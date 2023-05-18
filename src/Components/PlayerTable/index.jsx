import React from "react";

export default function PlayerTable() {
  const playerArray = [
    {
      id: 1,
      name: "Erling Haaland",
      positions: ["forward"],
      team: "Manchester City",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/0/07/Erling_Haaland_2023_%28cropped%29.jpg",
    },
    {
      id: 2,
      name: "Thibaut Courois",
      positions: ["goalkeeper"],
      team: "Real Madrid",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/c/c4/Courtois_2018_%28cropped%29.jpg",
    },
  ];
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Positions</th>
          <th>Team</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        {playerArray.map((player) => (
          <tr key={player.id}>
            <td>{player.id}</td>
            <td>{player.name}</td>
            <td>{player.positions.join(", ")}</td>
            <td>{player.team}</td>
            <td>
              <img
                src={player.image}
                alt={player.name}
                style={{ width: "100px" }}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
