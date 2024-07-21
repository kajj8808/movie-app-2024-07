import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { IMovieDetail } from "../types/interfaces";
import { getMovie, makeBgPath } from "../utils/fetchers";
import { useEffect } from "react";

import { motion } from "framer-motion";

export default function MovieModal() {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data, isLoading } = useQuery<IMovieDetail>({
    queryKey: ["detail", id],
    queryFn: () => getMovie(id!),
  });

  useEffect(() => {
    if (!isLoading && !data?.id) return navigate("/");
  }, [isLoading]);

  function goBack() {
    navigate(-1);
  }

  function openWebPageModeBlank(url: string) {
    const newWindow = window.open();
    if (newWindow) {
      newWindow.location.href = url;
    }
  }

  return (
    <>
      {id ? (
        <motion.div
          className="absolute left-0 right-0 w-4/5 max-w-3xl m-0 mx-auto top-[10%] z-50 bg-white min-h-96 pt-16 px-5 pb-8 rounded-xl shadow-2xl"
          layoutId={id}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
        >
          {data && (
            <div className="flex flex-col items-center">
              <div className="overflow-hidden shadow-lg rounded-xl">
                <motion.img
                  src={makeBgPath(data.backdrop_path)}
                  alt={data.title}
                  className="max-w-[768px] max-h-[432px] w-full"
                />
              </div>
              <div className="flex items-center">
                <h3 className="mt-4 text-3xl font-bold">{data.title}</h3>
                <svg
                  className="relative top-[10px] left-1 size-5 cursor-pointer"
                  onClick={() => openWebPageModeBlank(data.homepage)}
                  data-slot="icon"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M12.232 4.232a2.5 2.5 0 0 1 3.536 3.536l-1.225 1.224a.75.75 0 0 0 1.061 1.06l1.224-1.224a4 4 0 0 0-5.656-5.656l-3 3a4 4 0 0 0 .225 5.865.75.75 0 0 0 .977-1.138 2.5 2.5 0 0 1-.142-3.667l3-3Z"></path>
                  <path d="M11.603 7.963a.75.75 0 0 0-.977 1.138 2.5 2.5 0 0 1 .142 3.667l-3 3a2.5 2.5 0 0 1-3.536-3.536l1.225-1.224a.75.75 0 0 0-1.061-1.06l-1.224 1.224a4 4 0 1 0 5.656 5.656l3-3a4 4 0 0 0-.225-5.865Z"></path>
                </svg>
              </div>

              <span className="w-4/5 mt-8 text-black text-opacity-80">
                {data.overview}
              </span>

              <ul className="grid grid-cols-3 gap-2 mt-8">
                <li className="text-center">
                  <h3 className="text-sm font-bold">Budget</h3>
                  <p className="mt-2 text-sm text-opacity-80">{data.budget}</p>
                </li>
                <li className="text-center">
                  <h3 className="text-sm font-bold">Revenue</h3>
                  <p className="mt-2 text-sm text-opacity-80">{data.revenue}</p>
                </li>
                <li className="text-center">
                  <h3 className="text-sm font-bold">Runtime</h3>
                  <p className="mt-2 text-sm text-opacity-80">{data.runtime}</p>
                </li>
              </ul>
              <button
                onClick={goBack}
                className="absolute cursor-pointer top-4"
              >
                <svg
                  data-slot="icon"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="size-9"
                >
                  <path
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM8.28 7.22a.75.75 0 0 0-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 1 0 1.06 1.06L10 11.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L11.06 10l1.72-1.72a.75.75 0 0 0-1.06-1.06L10 8.94 8.28 7.22Z"
                  ></path>
                </svg>
              </button>
            </div>
          )}
        </motion.div>
      ) : null}
      <div
        onClick={goBack}
        className="absolute top-0 left-0 z-40 w-full h-full bg-black bg-opacity-50"
      />
    </>
  );
}
