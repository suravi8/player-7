// src/components/SelectedPlayers.jsx
import React from "react";

function SelectedPlayers({ selectedPlayers, removePlayer }) {
  return (
    <section className="mt-10 grid grid-cols-1 gap-4 py-5">
      {selectedPlayers.map((player) => (
        <div key={player.playerId} className="flex flex-row card w-full border-b-4 p-5">
          <div className="basis-1/8">
            <figure><img className="w-20 rounded" src={player.image} alt={player.name} /></figure>
          </div>
          <div className="basis-3/4 px-10 my-auto">
            <h1 className="font-bold">{player.name}</h1>
            <p>Role: {player.role}</p>
          </div>
          <div className="basis-1/8 ml-auto my-auto">
            <button className="btn btn-error" onClick={() => removePlayer(player.playerId)}>Remove</button>
          </div>
        </div>
      ))}
    </section>
  );
}

export default SelectedPlayers;
