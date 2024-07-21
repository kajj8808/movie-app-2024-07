import { Outlet, useParams } from "react-router-dom";
import Header from "../components/Header";
import MovieModal from "../components/MovieModal";
import { AnimatePresence } from "framer-motion";

/* Root Layout */
export default function Root() {
  const { id } = useParams();
  console.log(id);
  return (
    <AnimatePresence mode="wait">
      <div className="w-full h-full bg-[#f1f1f1]">
        <Header />
        <Outlet />
        {id && <MovieModal />}
      </div>
    </AnimatePresence>
  );
}
