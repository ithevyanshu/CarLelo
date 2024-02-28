const { PrismaClient } = require("@prisma/client");
import { createCarSchema } from "../utils/validation";

const prisma = new PrismaClient();

const allCars = async (req, res) => {
  try {
    const cars = await prisma.car.findMany();
    res.json(cars);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getCarbyId = async (req, res) => {
  const { id } = req.params;
  try {
    const car = await prisma.car.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    if (!car) {
      return res.status(404).json({ error: "Car not found" });
    }
    res.json(car);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const createCar = async (req, res) => {
  const car = req.body;
  try {
    const parseInfo = createCarSchema.safeParse(car);
    if (!parseInfo.success) {
      return res.status(400).json(parseInfo.error);
    }
    const newCar = await prisma.car.create({
      data: {
        img: car.img,
        maker: car.maker,
        model: car.model,
        price: car.price,
      },
    });
    res.json(newCar);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export = { allCars, getCarbyId, createCar};
