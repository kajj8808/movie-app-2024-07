import { motion } from "framer-motion";
import { IMovie, IPosition } from "../types/interfaces";
import { makeImagePath } from "../utils/fetchers";
import { Link } from "react-router-dom";

export default function MovieBox({
  position,
  movieData,
}: {
  position: IPosition;
  movieData: IMovie;
}) {
  /* const isTop = Boolean(Math.round(Math.random() * 1));
  const isLeft = Boolean(Math.round(Math.random() * 1));
  const randomPosition = {
    x:
      (Math.random() * (isLeft ? containerSize.width : -containerSize.width)) /
      2,
    y:
      (Math.random() * (isTop ? containerSize.height : -containerSize.height)) /
      2,
  };
 */
  return (
    <motion.div
      className="w-32 h-48 overflow-hidden font-bold rounded-lg shadow-xl cursor-pointer"
      animate={{ x: position.x, y: position.y, position: "absolute" }}
      transition={{ type: "spring", stiffness: 100, damping: 17 }}
      whileHover={{
        scale: 1.4,
        zIndex: 49,
      }}
      layoutId={movieData.id + ""}
    >
      <Link to={movieData.id + ""}>
        <img
          src={makeImagePath(movieData.poster_path)}
          alt={movieData.title}
          className="w-full h-full"
        />
      </Link>
    </motion.div>
  );
}
