import { useContext } from "react";
import { createContext } from "react";

const PaymentContext = createContext();

function PaymentProvider({ children, product }) {
  return (
    <PaymentContext.Provider value={{ product }}>
      {children}
    </PaymentContext.Provider>
  );
}

function usePayment() {
  const payment = useContext(PaymentContext);
  if (!payment) {
    throw new Error("Payment provider required to utilize the usePayment hook");
  }
  return payment;
}

export { PaymentProvider, usePayment };
