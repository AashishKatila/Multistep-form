import { z, ZodType } from "zod"; 
import { IFormInput } from "./formTypes";
 
 export const UserSchema: ZodType<IFormInput> = z
  .object({
    firstName: z
    .string()
    .min(3, { message: "First name should be atleast 3 characters" })
    .max(12, { message: "First name is too long" }),
    lastName: z
    .string()
    .min(3, { message: "Last name must be atleast 3 characters" })
    .max(12, { message: "Last name is too long" }),
    email: z.string().email(),
    password: z
      .string()
      .min(8, { message: "Password is too short" })
      .max(20, { message: "Password is too long" }),
  });