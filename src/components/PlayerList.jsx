// src/components/PlayerList.jsx
import React from "react";

function PlayerList({ players, choosePlayer }) {
  return (
    <section className="mt-10 grid grid-cols-3 gap-4">
      {players.map((player) => (
        <div key={player.playerId} className="card w-96 shadow-xl m-4">
          <figure><img src={player.image} alt={player.name} /></figure>
          <div className="card-body">
            <h2>{player.name}</h2>
            <p>Country: {player.country}</p>
            <p>Role: {player.role}</p>
            <p>Type: {player.battingBowlingType}</p>
            <p>Price: ${player.biddingPrice.toLocaleString()}</p>
            <button className="btn text-gray-600 bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300" onClick={() => choosePlayer(player)}>Choose Player</button>
          </div>
        </div>
      ))}
    </section>
  );
}

export default PlayerList;
