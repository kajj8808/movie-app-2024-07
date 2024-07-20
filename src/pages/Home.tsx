import { useQuery } from "@tanstack/react-query";
import { getPopular } from "../utils/fetchers";

export default function Home() {
  const { data, isLoading } = useQuery({
    queryKey: ["popular"],
    queryFn: getPopular,
  });
  return (
    <div>
      {isLoading ? (
        "Loading..."
      ) : (
        <div>
          {data?.results.map((item) => (
            <div key={item.id}>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
