import z from "zod";
import { validationMessages } from "./utils";

export const queryValidation = z.object({
  checkin_date: z.string({ required_error: validationMessages.required }),
  checkout_date: z.string({ required_error: validationMessages.required }),
  origin: z.string({ required_error: validationMessages.required }),
  destiny: z.string({ required_error: validationMessages.required }),
  number_of_bedrooms: z
    .number({
      required_error: validationMessages.required,
    })
    .min(1),
  number_of_guests: z
    .number({ required_error: validationMessages.required })
    .min(1),
});

export type QueryFields = z.infer<typeof queryValidation>;
