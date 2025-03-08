// LeftColumn.tsx
import React from "react";
import { BiSearch } from "react-icons/bi";
import {
  FaHome,
  FaStar,
  FaFootballBall,
  FaVolleyballBall,
} from "react-icons/fa"; // Import icons as needed
import { FaDisplay } from "react-icons/fa6";
import { NavLink } from "react-router";
import { formatNames } from "../../../utils/sport";

const sportData = [
  { name: "Football", icon: FaFootballBall, liveEvents: 2 },
  { name: "Volley", icon: FaVolleyballBall, liveEvents: 4 },
];

const LeftColumn: React.FC = () => {
  const navData = [
    {
      name: "Home",
      icon: FaHome,
      to: "/sport",
    },
    {
      name: "Live",
      icon: FaDisplay,
      to: "/bet/live",
    },
    {
      name: "Favourites",
      icon: FaStar,
      to: "/bet/favourites",
    },
    // Add more sports data as needed
  ];

  return (
    <div className="hidden md:block w-1/6 p-4 ">
      {/* Search Input */}
      <div className="mb-4 flex items-center gap-2 bg-primary bg-opacity-10 px-2 rounded-lg">
        <BiSearch className="text-xl" />
        <input
          type="text"
          placeholder="Search matches"
          className="w-full p-2 bg-transparent focus:outline-none "
        />
      </div>
      <div className="mb-4">
        <div className="font-bold mb-2">Navigations</div>
        <nav className="">
          <ul>
            {navData.map((link, index) => (
              <NavLink
                key={index}
                to={link.to}
                className={({ isActive, isPending }) =>
                  `${
                    isPending
                      ? "text-yellow-400"
                      : isActive
                      ? "text-primary"
                      : ""
                  } flex items-center justify-between p-2 rounded transition duration-300 ease-in-out hover:bg-primary hover:bg-opacity-10 font-medium`
                }
              >
                <div className="flex items-center space-x-3">
                  <link.icon className="text-lg" />
                  <span>{link.name}</span>
                </div>
              </NavLink>
            ))}
          </ul>
        </nav>
      </div>
      {/* Sports List */}
      <div className="">
        <div className="font-bold mb-2">Sports</div>
        <nav className="">
          <ul>
            {sportData.map((link, index) => (
              <NavLink
                key={index}
                to={`/bet/${formatNames(link.name)}`}
                className={({ isActive, isPending }) =>
                  `${
                    isPending
                      ? "text-yellow-400"
                      : isActive
                      ? "text-primary"
                      : ""
                  } flex items-center justify-between p-2 rounded transition duration-300 ease-in-out hover:bg-primary hover:bg-opacity-10 font-medium`
                }
              >
                <div className="flex items-center space-x-2">
                  <link.icon className="text-lg" />
                  <span>{link.name}</span>
                </div>
                <span className="text-primary">{link.liveEvents} </span>
              </NavLink>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default LeftColumn;
