import * as z from "zod";

const paymentFormSchema = z.object({
  quantity: z
    .number()
    .min(1, "Quantity must be greater than 0")
    .max(
      19,
      "This user is unable to receive this amount. Contact them for further assistance",
    ),
});

export { paymentFormSchema };
