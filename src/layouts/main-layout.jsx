import { Outlet } from "react-router-dom";
import { Header } from "../components/header";

function MainLayout() {
  return (
    <div>
      <Header />
      <div className="p-4 max-w-sm mx-auto">
        <Outlet />
      </div>
    </div>
  );
}
export { MainLayout };
