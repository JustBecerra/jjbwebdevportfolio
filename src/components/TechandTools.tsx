import { useState, useEffect, useRef } from "react";
import { TechandToolsList, type TechandToolsTypes } from "../consts";
import { SingleTech } from "./SingleTech";

const TechListWrapper = () => {
  const [stop, setStop] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const items = [...TechandToolsList, ...TechandToolsList];

  useEffect(() => {
    let animationFrameId: number;

    const slide = () => {
      if (!stop) {
        setScrollPosition((prevPosition) => {
          const newPosition = prevPosition - 1;
          if (containerRef.current && Math.abs(newPosition) >= containerRef.current.scrollWidth / 2) {
            return 0;
          }
          return newPosition;
        });
      }
      animationFrameId = requestAnimationFrame(slide);
    };

    slide();

    return () => cancelAnimationFrame(animationFrameId);
  }, [stop]);

  return (
    <div
      className="hidden lg:flex flex-col items-center gap-8 w-full h-[200px]"
      onMouseOver={() => setStop(true)}
      onMouseLeave={() => setStop(false)}
    >
      <h1 className="text-green font-bold text-2xl mb-8">
        Tools & Technologies I use
      </h1>
      <div className="relative w-full py-2 overflow-hidden">
        <div
          ref={containerRef}
          className="flex gap-8 w-full h-[60px]"
          style={{
            transform: `translateX(${scrollPosition}px)`,
            transition: stop ? 'none' : 'transform 0.1s linear',
          }}
        >
          {items.map((tt: TechandToolsTypes, index: number) => (
            <SingleTech key={index} logo={tt.logo} name={tt.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechListWrapper;
