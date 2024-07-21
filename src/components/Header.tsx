import { motion } from "framer-motion";
import { Link, useMatch } from "react-router-dom";
export default function Header() {
  const popularMatch = useMatch("/");
  const comingSoonMatch = useMatch("/coming-soon");
  const nowPlayingMatch = useMatch("/now-playing");

  return (
    <nav className="fixed flex justify-center w-full gap-8 text-sm font-bold text-[#1f1f1f] list-none bg-white backdrop-blur-xl h-[5vh] items-center border-b shadow-md">
      <li className="relative">
        <Link to={"/"}>
          <span>POPULAR</span>
          {popularMatch && (
            <motion.div
              viewport={{ once: true }}
              style={{ originY: "0px" }}
              className="absolute left-0 right-0 m-0 mx-auto bg-[#1f1f1f] rounded-full size-1.5 -bottom-3"
              layoutId="circle"
            />
          )}
        </Link>
      </li>
      <li className="relative">
        <Link to={"/coming-soon"}>
          <span>COMING SOON</span>
          {comingSoonMatch && (
            <motion.div
              viewport={{ once: true }}
              style={{ originY: "0px" }}
              className="absolute left-0 right-0 m-0 mx-auto bg-[#1f1f1f] rounded-full size-1.5 -bottom-3"
              layoutId="circle"
            />
          )}
        </Link>
      </li>
      <li className="relative">
        <Link to={"/now-playing"}>
          <span>NOW PLAYING</span>
          {nowPlayingMatch && (
            <motion.div
              viewport={{ once: true }}
              style={{ originY: "0px" }}
              className="absolute left-0 right-0 m-0 mx-auto bg-[#1f1f1f] rounded-full size-1.5 -bottom-3"
              layoutId="circle"
            />
          )}
        </Link>
      </li>
    </nav>
  );
}
