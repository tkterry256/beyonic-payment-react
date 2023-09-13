import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="py-28 flex justify-center">
      <Link
        to="/payment"
        className="bg-brand hover:bg-brand/90 active:bg-brand/95 text-gray-100 text-center text-sm font-semibold align-middle w-56 px-2 py-1 rounded-sm"
      >
        Initiate Payment
      </Link>
    </div>
  );
}
export { Home };
