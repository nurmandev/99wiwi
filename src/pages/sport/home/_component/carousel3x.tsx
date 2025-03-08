import { ReactNode, useEffect, useRef } from "react";

interface Props {
  children: ReactNode[];
}

const Carousel3x: React.FC<Props> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let scrollInterval: any;

    // Start scrolling automatically
    function startScrolling() {
      scrollInterval = setInterval(() => {
        const container = containerRef.current;
        if (container) {
          const cardWidth = 250; // Update this to match the actual card width
          const margin = 16; // Update this to match the actual margin between children
          const scrollLeft = container.scrollLeft;
          const maxScrollLeft = container.scrollWidth - container.clientWidth;
          if (scrollLeft >= maxScrollLeft) {
            container.scrollTo({ left: 0, behavior: "smooth" });
          } else {
            container.scrollTo({
              left: scrollLeft + cardWidth + margin,
              behavior: "smooth",
            });
          }
        }
      }, 5000); // 5 seconds
    }
    startScrolling();

    // Stop scrolling when the component unmounts
    return () => clearInterval(scrollInterval);

    // Run this effect only once on mount
  }, []);

  return (
    <div className="relative ">
      <div
        className="flex gap-4 overflow-x-scroll scrollbar-hide  snap-x "
        ref={containerRef}
      >
        {children.map((card) => card)}
      </div>
    </div>
  );
};

export default Carousel3x;
