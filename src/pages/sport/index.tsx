import { Outlet } from "react-router";
import LeftColumn from "./_components/leftColumn";
import RightColumn from "./_components/rightColumn";
import Navbar from "../_components/navbar";

const Sport: React.FC = () => {
  return (
    <div className="h-full">
      <Navbar />
      <div className="flex p-4 gap-4 h-[calc(100%-56px)]">
        <LeftColumn />
        <div className="flex-grow w-3/6 overflow-y-auto scrollbar-hide ">
          <Outlet />
        </div>
        <RightColumn />
      </div>
    </div>
  );
};

export default Sport;
