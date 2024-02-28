import express from "express";
import {
  allRental,
  createRental,
  deleteRental,
  rentalById,
  rentalByUserId,
  returnRequest,
  returnResponse,
  updateRental,
} from "../controller/rentalController";

const router = express.Router();

router.get("/", allRental).post("/", createRental);
router.get("/id/:id", rentalById);
router.get("/:userId", rentalByUserId);
router.put("/:id", updateRental).delete("/:id", deleteRental);
router.patch("/return-request/:id", returnRequest);
router.patch("/return-response/:id", returnResponse);

module.exports = router;