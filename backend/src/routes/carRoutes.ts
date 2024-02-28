import express from "express";
import carController from "../controller/carController";

const router = express.Router();

router.get("/", carController.allCars).post("/", carController.createCar);
router.get("/:id", carController.getCarbyId);

module.exports = router;