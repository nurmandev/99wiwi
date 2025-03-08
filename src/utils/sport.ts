import {
  FaBasketballBall,
  FaTableTennis,
  FaVolleyballBall,
  FaFootballBall,
  FaHockeyPuck,
} from "react-icons/fa";
import { IoMdFootball } from "react-icons/io";
import { BiCricketBall } from "react-icons/bi";
import { GiBoxingGlove } from "react-icons/gi";
import { FaBaseballBatBall } from "react-icons/fa6";
import { GiEightBall, GiSnitchQuidditchBall } from "react-icons/gi";
import { MdSportsHandball, MdSportsRugby } from "react-icons/md";

export const getIconForSport = (sportName: string) => {
  switch (sportName.toLowerCase()) {
    case "football":
      return IoMdFootball;
    case "cricket":
      return BiCricketBall;
    case "basketball":
      return FaBasketballBall;
    case "tennis":
      return FaTableTennis;
    case "volleyball":
      return FaVolleyballBall;
    case "baseball":
      return FaBaseballBatBall;
    case "boxing":
      return GiBoxingGlove;
    case "american football":
      return FaFootballBall;
    case "handball":
      return MdSportsHandball;
    case "rugby league":
      return MdSportsRugby;
    case "table tennis":
      return FaTableTennis;
    case "badminton":
      return GiSnitchQuidditchBall;
    case "ice hockey":
      return FaHockeyPuck;
    case "snooker":
      return GiEightBall;
    // Add cases for other sports
    default:
      return FaFootballBall; // Default icon if no match
  }
};

export const formatNames = (name: string) => {
  return name.toLowerCase().replace(/\s/g, "_");
};
