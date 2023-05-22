import React from "react";
import './PlayerTable.module.scss'

export default function PlayerTable({ playerArrayy }) {
  let playerArray = [
    {
      id: 1,
      name: "Erling Haaland",
      positions: ["Forward"],
      team: "Manchester City",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/0/07/Erling_Haaland_2023_%28cropped%29.jpg",
    },
    {
      id: 2,
      name: "Thibaut Courtois",
      positions: ["Goalkeeper"],
      team: "Real Madrid",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/c/c4/Courtois_2018_%28cropped%29.jpg",
    },
    {
      id: 3,
      name: "Wayne Rooney",
      positions: ["Forward"],
      team: "Manchester United",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Wayne_Rooney_%2850121725757%29.jpg/220px-Wayne_Rooney_%2850121725757%29.jpg", 
    },
    {
      id: 4,
      name: "Marcelo Vieira",
      positions: ["Defender"],
      team: "Real Madrid",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Bra-Cos_%286%29.jpg/220px-Bra-Cos_%286%29.jpg", 
    }
  ];

  const filterByPosition = (array, value) => {
    return array.filter((object) => {
      return object.positions.some((position) => position === value);
    });
  };

  if (!playerArrayy) {
    // Render all players if no position is selected
    playerArray = [...playerArray];
  } else {
    playerArray = filterByPosition(playerArray, playerArrayy);
  }

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
        {playerArray?.map((player) => (
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
