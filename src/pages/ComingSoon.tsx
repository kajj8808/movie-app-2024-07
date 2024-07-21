import { useQuery } from "@tanstack/react-query";
import { getComingSoon } from "../utils/fetchers";
import MovieBoxs from "../components/MovieBoxs";
import Loader from "../components/Loader";

export default function ComingSoon() {
  const { data, isLoading } = useQuery({
    queryKey: ["coming-soon"],
    queryFn: getComingSoon,
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
