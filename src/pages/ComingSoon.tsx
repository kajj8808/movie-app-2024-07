import { useQuery } from "@tanstack/react-query";
import { getComingSoon } from "../utils/fetchers";

export default function ComingSoon() {
  const { data, isLoading } = useQuery({
    queryKey: ["coming-soon"],
    queryFn: getComingSoon,
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
