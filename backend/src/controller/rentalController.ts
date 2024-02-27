import { PrismaClient } from "@prisma/client";
import { createRentSchema } from "../utils/validation";
const prisma = new PrismaClient();

const allRental = async (req, res) => {
  const rentals = await prisma.rental.findMany();
  res.json(rentals);
};

const rentalById = async (req, res) => {
  const { id } = req.params;
  try {
    const rental = await prisma.rental.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    if (!rental) {
      return res.status(404).json({ error: "Rental not found" });
    }
    res.json(rental);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const rentalByUserId = async (req, res) => {
  const { userId } = req.params;
  try {
    const rental = await prisma.rental.findMany({
      where: {
        userId: parseInt(userId),
      },
    });
    if (!rental) {
      return res.status(404).json({ error: "Rental not found" });
    }
    res.json(rental);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const createRental = async (req, res) => {
  const rental = req.body;
  try {
    const rentalInfo = createRentSchema.safeParse(rental);
    if (!rentalInfo.success) {
      return res.status(400).json(rentalInfo.error);
    }
    const newRental = await prisma.rental.create({
      data: {
        userId: rental.userId,
        carId: rental.carId,
        startDate: rental.startDate,
        endDate: rental.endDate,
      },
    });
    res.json(newRental);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateRental = async (req, res) => {
  const { id } = req.params;
  try {
    const rental = req.body;
    const updatedRental = await prisma.rental.update({
      where: {
        id: parseInt(id),
      },
      data: {
        userId: rental.userId,
        carId: rental.carId,
        startDate: rental.startDate,
        endDate: rental.endDate,
      },
    });
    res.json(updatedRental);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteRental = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.rental.delete({
      where: {
        id: parseInt(id),
      },
    });
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const returnRequest = async (req, res) => {
  const { id } = req.params;
  try {
    const rental = await prisma.rental.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    if (!rental) {
      return res.status(404).json({ error: "Rental not found" });
    }
    if (rental.returnReq) {
      return res.status(400).json({ error: "Return request already made" });
    }
    await prisma.rental.update({
      where: {
        id: parseInt(id),
      },
      data: {
        returnReq: true,
      },
    });
    res.json("updatedRental");
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const returnResponse = async (req, res) => {
  const { id } = req.params;
  try {
    const rental = await prisma.rental.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    if (!rental) {
      return res.status(404).json({ error: "Rental not found" });
    }
    if (rental.returnRes) {
      return res.status(400).json({ error: "No return request made" });
    }
    await prisma.rental.update({
      where: {
        id: parseInt(id),
      },
      data: {
        returnRes: true,
      },
    });
    res.json("returnAccepted");
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export {
  allRental,
  rentalById,
  rentalByUserId,
  createRental,
  updateRental,
  deleteRental,
  returnRequest,
  returnResponse,
};