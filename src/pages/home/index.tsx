import GamingUI from "./_components/gamingui";
import Navbar from "../_components/navbar";
import PublicChat from "./_components/publicChat";
import Sidebar from "./_components/sidebar";

function Home() {
  return (
    <div className="h-full">
      <Navbar />
      <div className="flex p-4 gap-4 h-[calc(100%-56px)]">
        <div className="w-1/6 hidden md:block">
          <Sidebar />
        </div>
        <div className="flex-1 overflow-y-auto scrollbar-hide">
          <GamingUI />
        </div>
        <PublicChat />
      </div>
    </div>
  );
}

export default Home;
