import React from "react";

export default function PositionSelection({positions, onChange}) {
  return (
    <select onChange={onChange}>
      <option value="">All Positions</option>
      {positions.map((position) => (
        <option key={position} value={position}>
          {position}
        </option>
      ))}
    </select>
  );
}
