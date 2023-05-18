import React, { useState } from "react";
import PositionSelection from "../PositionSelection";
import PlayerTable from "../PlayerTable";

export default function FilterPlayereTable({ playerArray }) {
  const [selectedPosition, setSelectedPosition] = useState("");

  const handlePositionChange = (event) => {
    setSelectedPosition(event.target.value);
  };

  const filteredPlayers = selectedPosition
    ? playerArray.filter((player) =>
        player.positions.includes(selectedPosition)
      )
    : playerArray;

  return (
    <div>
      <PositionSelection
        positions={["forward", "midfielder", "defender", "goalkeeper"]}
        onChange={handlePositionChange}
      />
      <PlayerTable playerArray={filteredPlayers} />
    </div>
  );
}
