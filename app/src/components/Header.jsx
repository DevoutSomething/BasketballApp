import React, { useState } from "react";

export default function Main() {
  return (
    <div>
      <NBADropdownSearchBar />
      <Player />
      <Logo />
      <Stats />
    </div>
  );
}

const Player = () => {
  return (
    <div>
      <Name />
      <Image />
    </div>
  );
};
const Image = () => {
  const [imgUrl, setImgUrl] = React.useState("");
  return <img src={imgUrl}></img>;
};

const Name = () => {
  const [playerName, setPlayerName] = React.useState("");
  return <p>{playerName}</p>;
};

const Logo = () => {
  const [logoUrl, setLogoUrl] = React.useState("");
  return <img src={logoUrl}></img>;
};

const Stats = () => {
  const [points, setPoints] = React.useState("");
  const [rebounds, setRebounds] = React.useState("");
  const [blocks, setBlock] = React.useState("");
  const [assists, setAssists] = React.useState("");
  const [steals, setSteals] = React.useState("");
  const [plusMinus, setPlusMinus] = React.useState("");

  return (
    <div>
      <Stat statName={"Points"} statValue={points} />
      <Stat statName={"Rebounds"} statValue={rebounds} />
      <Stat statName={"Blocks"} statValue={blocks} />
      <Stat statName={"Assists"} statValue={assists} />
      <Stat statName={"Steals"} statValue={steals} />
      <Stat statName={"PlusMinus"} statValue={plusMinus} />
    </div>
  );
};

const Stat = ({ statName, statValue }) => {
  return (
    <div>
      <p className="stat">{statName}</p>
      <p>{statValue}</p>
    </div>
  );
};
const NBADropdownSearchBar = () => {
  // Static list of NBA seasons
  const nbaSeasons = [
    "2023-2024",
    "2022-2023",
    "2021-2022",
    "2020-2021",
    "2019-2020",
    "2018-2019",
    "2017-2018",
    // Add more seasons if needed
  ];

  // State to store the search input and selected season
  const [searchTerm, setSearchTerm] = React.useState("");
  const [selectedSeason, setSelectedSeason] = React.useState("");

  // Event handler for input change
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Event handler for selecting an NBA season
  const handleSelectSeason = (season) => {
    setSelectedSeason(season);
  };

  const handleSubmit = function (e) {
    e.preventDefault();
    console.log("Submitted Search Term:", searchTerm);
    console.log("Selected NBA Season:", selectedSeason);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Input field for search */}
        <input
          type="text"
          placeholder="Search something..."
          value={searchTerm}
          onChange={handleInputChange}
          onSubmit={handleSubmit}
        />

        {/* Display selected NBA season */}
        {selectedSeason && <p>Selected NBA Season: {selectedSeason}</p>}

        {/* NBA Seasons dropdown */}
        <select
          onChange={(e) => handleSelectSeason(e.target.value)}
          value={selectedSeason}
        >
          <option value="" disabled>
            Select NBA Season
          </option>
          {nbaSeasons.map((season, index) => (
            <option key={index} value={season}>
              {season}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
};
