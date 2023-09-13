import {
  formatDate,
  formatMoney,
  singularPlural,
  truncateText,
} from "../utils/utils";

function OrderDetails({ order }) {
  const { product } = order;
  const totalAmount = product.unitAmount * order.quantity;
  return (
    <div className="py-3 flex flex-col gap-3">
      <h3 className="text-sm font-semibold text-gray-600">Order details</h3>

      <div className="grid grid-cols-[1.5fr_1fr] gap-y-1.5 font-semibold">
        <h4>Date of purchase:</h4>
        <span> {formatDate(Date.now())} </span>

        <h4>Unit amount:</h4>
        <span> {formatMoney(product.unitAmount)} </span>

        <h4>Quantity:</h4>
        <span>
          {order.quantity} {singularPlural(order.quantity, "unit", "units")}
        </span>

        <h4>Description:</h4>
        <span> {truncateText(product.description, 64)} </span>

        <div className="py-4 col-span-2"></div>

        <h4>Amount paid:</h4>
        <span> {formatMoney(totalAmount)} </span>
      </div>
    </div>
  );
}
export { OrderDetails };
