import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

function TopBar() {
  return (
    <div className="bg-black/30 p-1 flex justify-start items-center">
      <Link to="/">
        <img src={logo} alt="beyonic logo" className="h-12 md:h-14" />
      </Link>
    </div>
  );
}
export { TopBar };
