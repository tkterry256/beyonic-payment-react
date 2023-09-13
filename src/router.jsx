import { Route } from "react-router-dom";
import { createRoutesFromElements } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Payment } from "./pages/Payment";
import { PaymentSuccess } from "./pages/PaymentSuccess";

const routes = (
  <>
    <Route path="/" element={<Home />} />
    <Route path="/payment" element={<Payment />} />
    <Route path="/payment-success" element={<PaymentSuccess />} />
  </>
);

const router = createBrowserRouter(createRoutesFromElements(routes));

export default router;
