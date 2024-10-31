// src/App.jsx
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import PlayerList from "./components/PlayerList";
import SelectedPlayers from "./components/SelectedPlayers";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import playerData from "./data/players.json";
import Footer from "./footer";


function App() {
  const [players, setPlayers] = useState([]);
  const [userCoins, setUserCoins] = useState(0);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [showAvailable, setShowAvailable] = useState(true);

  useEffect(() => {
    setPlayers(playerData);
  }, []);

  const claimFreeCredit = () => {
    setUserCoins(userCoins + 500000);
    toast.success("500,000 coins added!");
  };

  const choosePlayer = (player) => {
    if (selectedPlayers.length >= 6) {
      toast.error("You cannot select more than 6 players.");
      return;
    }
    if (userCoins < player.biddingPrice) {
      toast.error("You don't have enough coins.");
      return;
    }
    if (selectedPlayers.find((p) => p.playerId === player.playerId)) {
      toast.error("Player already selected.");
      return;
    }

    setUserCoins(userCoins - player.biddingPrice);
    setSelectedPlayers([...selectedPlayers, player]);
  };

  const removePlayer = (playerId) => {
    const playerToRemove = selectedPlayers.find((p) => p.playerId === playerId);
    setUserCoins(userCoins + playerToRemove.biddingPrice);
    setSelectedPlayers(selectedPlayers.filter((p) => p.playerId !== playerId));
  };

  return (
    <div className="container mx-auto">
      <Navbar userCoins={userCoins} />
      <Banner claimFreeCredit={claimFreeCredit} />
      <div className="flex py-5">
        <div className="flex-1 my-auto">
          <p className="font-bold text-black">Available Players</p>
        </div>
        <div className="flex-none">
          <button className="btn text-gray-600 bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300" onClick={() => setShowAvailable(true)}>Available</button>
          <button className="btn ml-5 text-gray-600 bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300" onClick={() => setShowAvailable(false)}>Selected ({selectedPlayers.length})</button>
        </div>
      </div>
      {showAvailable ? (
        <PlayerList players={players} choosePlayer={choosePlayer} />
      ) : (
        <SelectedPlayers selectedPlayers={selectedPlayers} removePlayer={removePlayer} />
      )}
      <ToastContainer />
      
      <Footer></Footer>

    </div>
  );
}

export default App;
