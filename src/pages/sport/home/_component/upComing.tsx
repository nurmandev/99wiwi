import useTabSwitcher from "../../../../hooks/useTabSwitcher";
import MatchEventTable from "./matchEventTable";

const dateData = ["Dec 21", "Dec 22", "Dec 23", "Dec 24", "Dec 25"];
const matchEvents = [
  {
    date: "Dec 25",
    time: "19:00",
    homeTeam: "Team A",
    awayTeam: "Team B",
    homeOdd: 2.0,
    drawOdd: 3.0,
    awayOdd: 2.5,
    overOdd: 1.8,
    underOdd: 2.0,
  },
  {
    date: "Dec 25",
    time: "19:00",
    homeTeam: "Team A",
    awayTeam: "Team B",
    homeOdd: 2.0,
    drawOdd: 3.0,
    awayOdd: 2.5,
    overOdd: 1.8,
    underOdd: 2.0,
  },
  // Add more match events as needed
];
const sportData = [{ name: "Football" }, { name: "Volley" }];

function UpComing() {
  const { isTabActive, switchTab } = useTabSwitcher("Football");
  const { isTabActive: dateIsTabActive, switchTab: dateSwitchTab } =
    useTabSwitcher("Dec 21");
  return (
    <div className="mt-8">
      <div className="flex items-center gap-4 overflow-x-auto no-scrollbar">
        {sportData.map((sport) => (
          <div
            key={sport.name}
            onClick={() => switchTab(sport.name)}
            className={`px-4 font-medium py-2 rounded ${
              isTabActive(sport.name) && "bg-primary text-white"
            }`}
          >
            {sport.name}
          </div>
        ))}
      </div>
      <div className="flex mb-4">
        {dateData.map((date) => (
          <button
            className={` py-2 px-4 font-medium ${
              dateIsTabActive(date)
                ? "border-b-2 border-primary text-primary"
                : ""
            }`}
            onClick={() => dateSwitchTab(date)}
          >
            {date}
          </button>
        ))}
      </div>
      <div className="">
        <MatchEventTable matchEvents={matchEvents} showHeaders={true} />

        <MatchEventTable matchEvents={matchEvents} showHeaders={false} />
      </div>
    </div>
  );
}

export default UpComing;
