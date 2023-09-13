import { Navigate } from "react-router-dom";
import { useStore } from "../store";
import { OrderDetails } from "../components/order-details";
import { CheckCircle } from "@phosphor-icons/react";

function PaymentSuccess() {
  const order = useStore((state) => state.order);

  if (!order) return <Navigate to="/" replace />;

  return (
    <div>
      <h2 className="py-10 text-2xl flex justify-center gap-3">
        <CheckCircle className="text-brand" size={36} weight="bold" />
        Payment received, thank you
      </h2>
      <OrderDetails order={order} />
    </div>
  );
}
export { PaymentSuccess };
