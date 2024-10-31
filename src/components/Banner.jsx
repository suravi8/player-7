// src/components/Banner.jsx
import React from "react";
import banner from '../assets/banner-main.png';

function Banner({ claimFreeCredit }) {
  return (
    <section className="hero bg bg-cover rounded-lg">
      <div className="hero-content text-center">
        <div className="">
          <img src={banner} className="mx-auto mb-5" alt="" />
          <h1 className="text-5xl font-bold text-white">Assemble Your Ultimate Dream 11 Cricket Team</h1>
          <p className="py-6 text-gray-400 text-xl">Beyond Boundaries Beyond Limits</p>
          <button className="btn text-gray-600 bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300" onClick={claimFreeCredit}>
            Claim Free Credit
          </button>
        </div>
      </div>
    </section>
  );
}

export default Banner;
