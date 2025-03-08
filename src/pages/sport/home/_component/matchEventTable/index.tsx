import React from "react";
import OddBox from "./oddBox";

interface MatchEvent {
  date: string;
  time: string;
  homeTeam: string;
  awayTeam: string;
  homeOdd: number;
  drawOdd: number;
  awayOdd: number;
  overOdd: number;
  underOdd: number;
}

interface Props {
  matchEvents: MatchEvent[];
  showHeaders?: boolean;
}

const MatchEventTable: React.FC<Props> = ({ matchEvents, showHeaders }) => {
  return (
    <div className="overflow-x-auto">
      {showHeaders ? (
        <div className="grid grid-cols-10 mb-2 items-center">
          <div className="col-span-5 font-bold">12:30 - 13:00</div>
          <div className="col-span-1 font-bold text-center">1</div>
          <div className="col-span-1 font-bold text-center">Draw</div>
          <div className="col-span-1 font-bold text-center">2</div>
          <div className="col-span-1 font-bold text-center">O 1.5</div>
          <div className="col-span-1 font-bold text-center">U 1.5</div>
        </div>
      ) : (
        <div className="col-span-5 font-bold mt-4 mb-2">16:00 - 16:30</div>
      )}

      <div className="grid grid-cols-10 gap-0.5  items-center">
        {matchEvents.map((event, index) => (
          <React.Fragment key={index}>
            <div className="col-span-5 bg-primary bg-opacity-5 dark:bg-opacity-10 ">
              <div className="flex gap-4 p-1 text-xs">
                <div className="">
                  <div className="">{event.time}</div>
                  <div className="">{event.date}</div>
                </div>
                <div className="font-medium">
                  <div className="">{event.homeTeam}</div>
                  <div className="">{event.awayTeam}</div>
                </div>
              </div>
            </div>
            <OddBox odd={event.homeOdd} />
            <OddBox odd={event.drawOdd} />
            <OddBox odd={event.awayOdd} />
            <OddBox odd={event.overOdd} />
            <OddBox odd={event.underOdd} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default MatchEventTable;
