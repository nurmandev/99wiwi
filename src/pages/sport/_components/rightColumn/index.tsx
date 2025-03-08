import useTabSwitcher from "../../../../hooks/useTabSwitcher";
import BetSlip from "./_component/betSlip";
import MyBets from "./_component/myBets";

enum ViewType {
  BetSlip = "Bet Slip",
  MyBets = "My Bets",
}

const RightColumn: React.FC = () => {
  const { switchTab, currentTab, isTabActive } = useTabSwitcher(
    ViewType.BetSlip
  );

  return (
    <div className="w-1/4 bg-primary bg-opacity-5 dark:bg-opacity-10 hidden md:block ">
      <div className="flex ">
        <div
          className={`flex-1 pt-2 pb-4 px-2 rounded-tl cursor-pointer ${
            isTabActive(ViewType.BetSlip) && "bg-primary text-white"
          }`}
          onClick={() => switchTab(ViewType.BetSlip)}
        >
          <div className="font-medium"> Bet Slip</div>
          <div className=""> 1 Selections</div>
        </div>
        <div
          className={`flex-1 pt-2 pb-4 px-2 rounded-tr cursor-pointer ${
            isTabActive(ViewType.MyBets) && "bg-primary text-white"
          }`}
          onClick={() => switchTab(ViewType.MyBets)}
        >
          <div className="font-medium">My Bets </div>
          <div className=""> Please Login</div>
        </div>
      </div>
      {currentTab === ViewType.BetSlip && <BetSlip />}
      {currentTab === ViewType.MyBets && <MyBets />}
    </div>
  );
};

export default RightColumn;
