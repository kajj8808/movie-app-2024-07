import { useQuery } from "@tanstack/react-query";
import { getNowPlaying } from "../utils/fetchers";
import MovieBoxs from "../components/MovieBoxs";

export default function NowPlaying() {
  const { data, isLoading } = useQuery({
    queryKey: ["now-playing"],
    queryFn: getNowPlaying,
  });

  return (
    <div className="flex items-center justify-center w-full h-screen">
      {isLoading ? (
        "Loading..."
      ) : data?.results ? (
        <MovieBoxs movies={data?.results} />
      ) : null}
    </div>
  );
}