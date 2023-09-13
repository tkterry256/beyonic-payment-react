import { LinkDetails } from "../components/link-details";
import { PaymentForm } from "../components/payment-form";
import { PaymentProvider } from "../components/payment-provider";
import { product } from "../data/product";

function Payment() {
  return (
    <div>
      <h2 className="py-12 font-light text-2xl text-center">Payment Link</h2>
      <div className="border-b mb-4"></div>
      <PaymentProvider product={product}>
        <LinkDetails />
        <PaymentForm />
      </PaymentProvider>
    </div>
  );
}
export { Payment };
