import React from "react";
import Carousel3x from "./carousel3x";

interface Event {
  id: number;
  sport: string;
  match: { home: string; away: string };
  odds: { 1: number; 2: number; x: number };
  startTime: string;
  date: string;
}

const topEventsData: Event[] = [
  {
    id: 1,
    sport: "Football",
    match: { home: "Team A", away: "Team B" },
    odds: { 1: 1.76, 2: 0.54, x: 0.23 },
    date: "Dec 24th",
    startTime: "15:00",
  },
  {
    id: 2,
    sport: "Basketball",
    match: { home: "Team X", away: "Team Y" },
    odds: { 1: 1.76, 2: 0.54, x: 0.23 },
    date: "Dec 24th",
    startTime: "18:30",
  },
  {
    id: 3,
    sport: "Tennis",
    match: { home: "Player 1", away: " Player 2" },
    odds: { 1: 1.76, 2: 0.54, x: 0.23 },
    date: "Dec 24th",
    startTime: "12:45",
  },
  {
    id: 1,
    sport: "Football",
    match: { home: "Team A", away: "Team B" },
    odds: { 1: 1.76, 2: 0.54, x: 0.23 },
    date: "Dec 24th",
    startTime: "15:00",
  },
  {
    id: 2,
    sport: "Basketball",
    match: { home: "Team X", away: "Team Y" },
    odds: { 1: 1.76, 2: 0.54, x: 0.23 },
    date: "Dec 24th",
    startTime: "18:30",
  },
  {
    id: 3,
    sport: "Tennis",
    match: { home: "Player 1", away: " Player 2" },
    odds: { 1: 1.76, 2: 0.54, x: 0.23 },
    date: "Dec 24th",
    startTime: "12:45",
  },
  // Add more events as needed
];

const TopEvents: React.FC = () => {
  return (
    <div className="relative mt-8">
      <div className="font-medium mb-4 text-base">Top Events</div>
      <Carousel3x>
        {topEventsData.map((event) => (
          <div
            key={event.id}
            className={`w-1/2 md:w-2/5 text-xs flex-none bg-primary dark:bg-opacity-20 bg-opacity-5 p-2 rounded-lg snap-start`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="font-medium">
                <div className="">{event.match.home}</div>
                <div className="">{event.match.away}</div>
              </div>
              <div className="">
                <div className="">{event.date}</div>
                <div className="">{event.startTime}</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="font-medium bg-primary flex-1 bg-opacity-5 dark:bg-opacity-10 rounded p-2">
                <div className="">{event.match.home}</div>
                <div className="">{event.odds[1]}</div>
              </div>
              <div className="font-medium bg-primary flex-1 bg-opacity-5 dark:bg-opacity-10 rounded p-2">
                <div className="">Draw</div>
                <div className="">{event.odds.x}</div>
              </div>
              <div className="font-medium bg-primary flex-1 bg-opacity-5 dark:bg-opacity-10 rounded p-2">
                <div className="">{event.match.away}</div>
                <div className="">{event.odds[2]}</div>
              </div>
            </div>
          </div>
        ))}
      </Carousel3x>
    </div>
  );
};

export default TopEvents;
