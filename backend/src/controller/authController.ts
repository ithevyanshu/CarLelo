import {
  createAccessToken,
  hashPassword,
  verifyPassword,
} from "../utils/token";
import { createUserSchema } from "../utils/validation";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const signup = async (req, res) => {
  const user = req.body;
  try {
    const parseInfo = createUserSchema.safeParse(user);
    if (!parseInfo.success) {
      return res.status(400).json(parseInfo.error);
    }
    const emailExists = await prisma.user.findUnique({
      where: {
        email: user.email,
      },
    });
    if (emailExists) {
      return res.status(400).json("Email already exists");
    }
    await prisma.user.create({
      data: {
        email: user.email,
        contact: user.contact,
        password: hashPassword(user.password),
        name: user.name,
        role: user.role,
      },
    });
    res.json(user);
  } catch (error) {
    res.status(500).json("Internal Server Error");
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (!user) {
      return res.status(400).json("Invalid email or password");
    }
    const passwordMatch = await verifyPassword(password, user.password);
    if (!passwordMatch) {
      return res.status(400).json("Invalid password");
    }
    const accessToken = createAccessToken({
      userId: user.id,
      email: user.email,
    });
    res.json({ accessToken });
  } catch (error) {
    res.status(500).json("Internal Server Error");
  }
};

export { signup, login };