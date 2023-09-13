import { Minus, Plus } from "@phosphor-icons/react";
import { usePayment } from "./payment-provider";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formatMoney } from "../utils/utils";
import { paymentFormSchema } from "../validation/payment-form-schema";
import { useNavigate } from "react-router-dom";
import { useStore } from "../store";

const defaultValues = {
  quantity: 1,
};

function PaymentForm() {
  const navigate = useNavigate();
  const makePayment = useStore((state) => state.makePayment);
  const { product } = usePayment();
  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors, isSubmitted },
  } = useForm({
    defaultValues,
    resolver: zodResolver(paymentFormSchema),
  });

  const quantity = watch("quantity");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-rows-2 grid-flow-col grid-cols-[1.3fr_1fr] items-center">
        <h3 className="text-sm font-semibold text-gray-600">Unit Amount</h3>
        <p className="text-lg">{formatMoney(product.unitAmount)}</p>
        <h3 className="text-sm font-semibold text-gray-600">Quantity</h3>
        <div className="flex border-2 border-gray-700 text-xl">
          <button type="button" onClick={decrementQuantity} className="p-2">
            <Minus />
          </button>
          <input
            type="text"
            readOnly
            {...register("quantity", { valueAsNumber: true })}
            size={1}
            className="flex-1 text-center"
          />
          <button type="button" onClick={incrementQuantity} className="p-2">
            <Plus />
          </button>
        </div>
      </div>
      <div className="py-4 flex flex-col gap-1">
        <h3 className="text-sm font-semibold text-gray-600">Total Amount</h3>
        <p className="text-lg font-semibold text-gray-700">
          {" "}
          {formatMoney(product.unitAmount * quantity)}{" "}
        </p>
      </div>
      <div className="border-b mb-4"></div>
      <p className="text-red-600">{errors.quantity?.message}</p>
      <div className="py-4">
        <button
          type="submit"
          className="bg-brand py-1 px-3 text-gray-100 text-sm font-semibold rounded-sm w-full"
        >
          Proceed to pay
        </button>
      </div>
    </form>
  );

  function onSubmit({ quantity }) {
    makePayment({ product, quantity });
    navigate("/payment-success");
  }

  function incrementQuantity() {
    setValue("quantity", quantity + 1, { shouldValidate: isSubmitted });
  }
  function decrementQuantity() {
    if (quantity > 1) {
      setValue("quantity", quantity - 1, { shouldValidate: isSubmitted });
    }
  }
}
export { PaymentForm };
