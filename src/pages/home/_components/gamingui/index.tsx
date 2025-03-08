import { useState } from "react";
import Glowcard from "../../../_components/glowcard";
import Card from "./_component/card";
import IMAGES from "../../../../assets/images";
import FeaturedCard from "./_component/featuredCard";
import GameCard from "./_component/gameCard";

const featuredGames = [
  {
    name: "Case battle",
    img: IMAGES.case_battle,
    color: "bg-yellow-600 border-yellow-600",
  },
  { name: "Crash", img: IMAGES.crash, color: "bg-primary border-primary" },
  { name: "Roll", img: IMAGES.roll, color: "bg-yellow-500 border-yellow-500" },
  { name: "Dice Duel", img: IMAGES.dice, color: "bg-primary border-primary" },
  { name: "Bacarat", img: IMAGES.bacarat, color: "bg-primary border-primary" },
];

const otherGames = [
  {
    name: "Blackjack",
    img: IMAGES.blackjack,
    color: "bg-black border-black",
  },
  { name: "Mines", img: IMAGES.mine, color: "bg-primary border-primary" },

  {
    name: "Case battle",
    img: IMAGES.case_battle,
    color: "bg-yellow-600 border-yellow-600",
  },
  { name: "Crash", img: IMAGES.crash, color: "bg-primary border-primary" },
  { name: "Roll", img: IMAGES.roll, color: "bg-yellow-500 border-yellow-500" },
  { name: "Dice Duel", img: IMAGES.dice, color: "bg-primary border-primary" },
  { name: "Bacarat", img: IMAGES.bacarat, color: "bg-primary border-primary" },
];

const GamingUI = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Games");
  return (
    <div className="">
      {/* Top Promotional Banner */}
      <div className="flex overflow-x-auto gap-4 mb-6">
        <Card
          color="bg-primary"
          img={IMAGES.welcome2}
          text="100% Welcome Offer 1BTC"
        />
        <Card
          color="bg-purple-500"
          img={IMAGES.treasure}
          text="Treasure Hunt!"
        />
        <Card
          color="bg-green-500"
          img={IMAGES.welcomebonus}
          text="Daily $30,000 Competition"
        />
      </div>

      {/* Search & Filters */}
      <div className="flex items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Search for games"
          className="bg-gray-800 p-3 rounded-lg w-full"
        />
        <button className="bg-gray-700 px-4 py-2 rounded-lg">Sort</button>
      </div>
      <div className="flex overflow-x-auto gap-2 mb-6">
        {[
          "All Games",
          "Crash Games",
          "New Games",
          "Card Games",
          "Top Games",
          "Providers",
        ].map((category, index) => (
          <Glowcard
            show={selectedCategory === category}
            color="bg-primary border-primary"
            size="5rem"
          >
            <button
              key={index}
              className=" px-4 py-2 rounded-lg whitespace-nowrap "
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          </Glowcard>
        ))}
      </div>
      <div className="uppercase mb-2">{selectedCategory}</div>
      {/* Game Grid */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-6">
        {featuredGames.map((game, index) => (
          <FeaturedCard key={index} {...game} />
        ))}
      </div>
      <div className="uppercase mb-2">Other games</div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-6">
        {otherGames.map((game, index) => (
          <GameCard key={index} {...game} />
        ))}
      </div>
    </div>
  );
};

export default GamingUI;
