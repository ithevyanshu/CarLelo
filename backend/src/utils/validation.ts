import zod from "zod";

const createUserSchema = zod.object({
  email: zod.string().email({ message: "Invalid email" }),
  name: zod.string().min(3, { message: "Too short" }),
  password: zod.string().min(8, { message: "Too short" }),
});

const createCarSchema = zod.object({
  maker: zod.string().min(2, { message: "Too short" }),
  model: zod.string().min(2, { message: "Too short" }),
  price: zod.number().int({ message: "Not an integer" }),
});

const createRentSchema = zod.object({
  carId: zod.number().int({ message: "Not an integer" }),
  userId: zod.number().int({ message: "Not an integer" }),
  startDate: zod.string().regex(/^\d{2}-\d{2}-\d{4}$/),
  endDate: zod.string().regex(/^\d{2}-\d{2}-\d{4}$/),
});

export { createUserSchema, createCarSchema, createRentSchema };