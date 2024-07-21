import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen gap-2 text-center">
      <p className="text-3xl font-bold">Error</p>
      <Link to={"/"} className="text-sm">
        Go To Home
      </Link>
    </div>
  );
}
