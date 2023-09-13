import { Route } from "react-router-dom";
import { createRoutesFromElements } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/homes";
import { Payment } from "./pages/payments";
import { PaymentSuccess } from "./pages/payment-successes";
import { MainLayout } from "./layouts/main-layout";

const routes = (
  <Route path="/" element={<MainLayout />}>
    <Route index element={<Home />} />
    <Route path="/payment" element={<Payment />} />
    <Route path="/payment-success" element={<PaymentSuccess />} />
  </Route>
);

const router = createBrowserRouter(createRoutesFromElements(routes));

export default router;
