// src/components/Navbar.jsx
import React from "react";
import logo from '../assets/logo.png';
import coin from '../assets/coin.png';

function Navbar({ userCoins }) {
  return (
    <nav className="navbar">
        <div className="navbar-start">
            <a className="text-xl"><img src={logo} alt="Logo" /></a>
        </div>
        <div className="navbar-end">
            <ul class="menu menu-horizontal px-1">
                <li><a>Home</a></li>
                <li><a>Fixture</a></li>
                <li><a>Teams</a></li>
                <li><a>Schedules</a></li>
            </ul>
            <a className="btn btn-ghost">
            <h1>{userCoins} Coin</h1>
            <img src={coin} alt="Coin" />
            </a>
        </div>
    </nav>
  );
}

export default Navbar;
