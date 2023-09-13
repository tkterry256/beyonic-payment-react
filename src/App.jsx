import { RouterProvider } from "react-router-dom";
import router from "./router";
import { Header } from "./components/header";

function App() {
  return (
    <div>
      <Header />
      <div className="max-w-sm mx-auto">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
