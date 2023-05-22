import React, { useState } from "react";
import PositionSelection from "../PositionSelection";
import PlayerTable from "../PlayerTable";

export default function FilterPlayereTable() {
  const [selectedPosition, setSelectedPosition] = useState("");

  const handlePositionChange = (event) => {
    setSelectedPosition(event.target.value);
  };

  
  return (
    <div>
      <PositionSelection
        positions={["Forward", "Midfielder", "Defender", "Goalkeeper", "All"]}
        onChange={handlePositionChange}
      />
      <PlayerTable playerArrayy={selectedPosition} />
    </div>
  );
}
