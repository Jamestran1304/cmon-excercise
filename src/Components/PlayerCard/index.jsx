import React from 'react';
import './PlayerCard.module.scss'

const PlayerCard = ({ player }) => {
  const { name, positions, team, image } = player;

  return (
    <div className="player-card">
      <img src={image} alt={name} />
      <div className="player-info">
        <h2>{name}</h2>
        <p>Position: {positions.join(', ')}</p>
        <p>Team: {team}</p>
      </div>
    </div>
  );
};

export default PlayerCard;
