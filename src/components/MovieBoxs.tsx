import { useEffect, useRef, useState } from "react";
import { IContainerSize, IMovie, IPosition } from "../types/interfaces";
import MovieBox from "./MovieBox";

export default function MovieBoxs({ movies }: { movies: IMovie[] }) {
  // 컨테이너 크기를 가져오기 위해서 사용.
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState<IContainerSize>({
    width: 0,
    height: 0,
  });
  const [posterPositions, setPosterPositions] = useState<IPosition[]>([]);

  const updateSize = () => {
    if (containerRef.current) {
      setContainerSize({
        width: containerRef.current.offsetWidth,
        height: containerRef.current.offsetHeight,
      });
    }
  };

  const generateRandomPosition = () => {
    const isTop = Boolean(Math.round(Math.random() * 1));
    const isLeft = Boolean(Math.round(Math.random() * 1));
    const x =
      (Math.random() * (isLeft ? containerSize.width : -containerSize.width)) /
      2;
    const y =
      (Math.random() * (isTop ? containerSize.height : -containerSize.height)) /
      2;
    return { x, y };
  };

  function isOverlapping(newPosition: IPosition): boolean {
    const BOX_WIDTH = 130;
    const BOX_HEIGHT = 200;
    return posterPositions.some((position) => {
      const left1 = position.x;
      const right1 = position.x + BOX_WIDTH;
      const top1 = position.y;
      const bottom1 = position.y + BOX_HEIGHT;

      const left2 = newPosition.x;
      const right2 = newPosition.x + BOX_WIDTH;
      const top2 = newPosition.y;
      const bottom2 = newPosition.y + BOX_HEIGHT;

      return (
        left1 < right2 && right1 > left2 && top1 < bottom2 && bottom1 > top2
      );
    });
  }

  const addNewPosition = () => {
    let attempts = 0;
    const maxAttempts = 100;

    while (maxAttempts !== attempts) {
      const newPosition = generateRandomPosition();
      if (!isOverlapping(newPosition)) {
        setPosterPositions((prevPosition) => [...prevPosition, newPosition]);
        break;
      }
      attempts++;
    }
  };

  // 화면에서 content의 크기(width , height)를 받아옵니다.
  useEffect(() => {
    // component가 mount될 떄 페이지 사이즈를 가져옵니다.
    updateSize();
    // 페이지 크기가 변경될 때 마다 작동하는 이벤트에 updatesize를 등록합니다.
    window.addEventListener("resize", updateSize);
    // component가 remount 될떄마다 이벤트가 남아 버리기에
    return () => window.removeEventListener("resize", updateSize);
  }, [movies]);
  // 영화 포스터 위치를 생성합니다.

  useEffect(() => {
    if (containerSize.width === 0) {
      return;
    }
    if (movies.length > 0 && posterPositions.length === 0) {
      const newPosition = generateRandomPosition();
      setPosterPositions([newPosition]);
    } else if (movies.length > 0 && posterPositions.length !== movies.length) {
      addNewPosition();
    }
  }, [movies, containerSize, posterPositions]);

  return (
    <div
      className="h-[80vh] w-[80vw] flex justify-center items-center"
      ref={containerRef}
    >
      {/*   {posterPositions.length > 1 &&
        movies?.map((item, index) => (
          <MovieBox movieData={item} position={posterPositions[index]} />
        ))} */}
      {posterPositions.map((item, index) => (
        <MovieBox key={index} movieData={movies[index]} position={item} />
      ))}
    </div>
  );
}
