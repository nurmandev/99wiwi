// RightColumn.tsx
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import useTabSwitcher from "../../../../../hooks/useTabSwitcher";

interface BetDetail {
  match: { home: string; away: string };
  betType: string;
  odds: number;
}

enum BetType {
  Single = "Single",
  Multiple = "Multiple",
  System = "System",
}

const BetSlip: React.FC = () => {
  const { isTabActive, switchTab } = useTabSwitcher(BetType.Single);
  const [betSlip, setBetSlip] = useState<BetDetail[]>([
    { betType: "OV 1.5", match: { home: "ARS", away: "MTD" }, odds: 0.63 },
  ]);
  const [totalReturn, setTotalReturn] = useState<number>(0);

  const handlePlaceBet = () => {
    console.log("Placing bet:", betSlip);
  };

  const handleClearAll = () => {
    // Clear the bet slip
    setBetSlip([]);
    setTotalReturn(0);
  };

  return (
    <div className="">
      <div className="flex mb-4">
        <button
          className={`flex-1 py-3 px-4 border-b-2 ${
            isTabActive(BetType.Single)
              ? "border-b-2 border-primary"
              : "border-background text-gray-400"
          }`}
          onClick={() => switchTab(BetType.Single)}
        >
          Single
        </button>
        <button
          className={`flex-1 py-3 px-4 border-b-2 ${
            isTabActive(BetType.Multiple)
              ? " border-primary "
              : "border-background text-gray-400"
          }`}
          onClick={() => switchTab(BetType.Multiple)}
        >
          Multiple
        </button>
        <button
          className={`flex-1 py-3 px-4 border-b-2 ${
            isTabActive(BetType.System)
              ? "border-b-2 border-primary"
              : "border-background text-gray-400"
          }`}
          onClick={() => switchTab(BetType.System)}
        >
          System
        </button>
      </div>

      <div className="px-2">
        {/* List of match bet details */}
        <ul>
          {betSlip.map((bet, index) => (
            <li key={index} className="mb-2 flex items-center justify-between">
              <div>
                <div className="font-medium text-gray-500">
                  {bet.match.home} : {bet.match.away}
                </div>
                <div className="text-xs font-medium">
                  {bet.betType} @ {bet.odds} odds
                </div>
              </div>
              <FaTimes className="text-lg bg-background p-1 rounded-full" />
            </li>
          ))}
        </ul>

        {/* Total stake and total return */}
        <div className="my-4 ">
          <div className="font-medium">Stake</div>
          <div className="flex items-center justify-between">
            <div className="w-1/2 flex items-center gap-2 bg-primary bg-opacity-10 px-2 rounded">
              <input
                type="text"
                placeholder="$"
                className="w-full p-2 bg-transparent focus:outline-none "
              />
              <div>USD</div>
            </div>
            <div>
              <p>Return</p>
              <p className="text-primary font-medium">{totalReturn} USD</p>
            </div>
          </div>
        </div>
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p>Total Stake</p>
            <p>Total Return</p>
          </div>
          <div className="">
            <p className="text-primary font-medium">{totalReturn} USD</p>
            <p className="text-primary font-medium">{totalReturn} USD</p>
          </div>
        </div>

        {/* Place Bet and Clear All buttons */}
        <div className="flex flex-col gap-4">
          <button
            onClick={handlePlaceBet}
            className={
              "w-full bg-primary text-white font-bold py-3 rounded-md hover:bg-primary-dark transition duration-300"
            }
          >
            Place Bet
          </button>
          <button
            onClick={handleClearAll}
            className={
              "text-primary border border-primary py-3 px-6  font-bold rounded"
            }
          >
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
};

export default BetSlip;
