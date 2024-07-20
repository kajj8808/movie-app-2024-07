import { Outlet } from "react-router-dom";
import Header from "../components/Header";

/* Root Layout */
export default function Root() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
