import { usePayment } from "./payment-provider";

function LinkDetails() {
  const { product } = usePayment();
  return (
    <div className="py-4 flex flex-col gap-3">
      <h3 className="text-sm font-semibold text-gray-600">Link details</h3>
      <h4 className="text-lg text-gray-700">{product.name}</h4>
      <p className="text-gray-600"> {product.description} </p>
    </div>
  );
}
export { LinkDetails };
