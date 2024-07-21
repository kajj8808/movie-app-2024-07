import { useQuery } from "@tanstack/react-query";
import { getPopular } from "../utils/fetchers";
import MovieBoxs from "../components/MovieBoxs";
import Loader from "../components/Loader";

export default function Home() {
  const { data, isLoading } = useQuery({
    queryKey: ["popular"],
    queryFn: getPopular,
  });
  return (
    <div className="flex items-center justify-center w-full h-screen">
      {isLoading ? (
        <Loader />
      ) : data?.results ? (
        <MovieBoxs movies={data?.results} />
      ) : null}
    </div>
  );
}
