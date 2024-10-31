// src/components/Footer.jsx
import React from "react";

function Footer() {
  return (
    <>
      {/* Newsletter Section */}
      <section className="mt-20 mx-auto justify-center">
        <div className="place-content-center pl-80">
          <h1 className="text-2xl font-bold">Subscribe to our Newsletter</h1>
          <p className="text-slate-500">Get the latest updates and news right in your inbox!</p>
          <div>
            <input
              type="text"
              placeholder="Enter your email"
              className="input input-bordered w-full max-w-xs"
            />
            <button className="btn">Subscribe</button>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer bg-black text-primary-content">
        <div className="footer-center">
          <img src="assets/logo-footer.png" alt="Logo" />
        </div>
        <div>
          <nav>
            <h6 className="footer-title text-white">Services</h6>
            <a className="link link-hover" href="#">Branding</a>
            <a className="link link-hover" href="#">Design</a>
            <a className="link link-hover" href="#">Marketing</a>
            <a className="link link-hover" href="#">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title text-white">Company</h6>
            <a className="link link-hover" href="#">About us</a>
            <a className="link link-hover" href="#">Contact</a>
            <a className="link link-hover" href="#">Jobs</a>
            <a className="link link-hover" href="#">Press kit</a>
          </nav>
          <nav>
            <h6 className="footer-title text-white">Legal</h6>
            <a className="link link-hover" href="#">Terms of use</a>
            <a className="link link-hover" href="#">Privacy policy</a>
            <a className="link link-hover" href="#">Cookie policy</a>
          </nav>
          <form>
            <h6 className="footer-title">Newsletter</h6>
            <fieldset className="form-control w-80">
              <label className="label">
                <span className="label-text">Enter your email address</span>
              </label>
              <div className="join">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input input-bordered join-item"
                />
                <button className="btn btn-primary join-item">Subscribe</button>
              </div>
            </fieldset>
          </form>
        </div>
      </footer>
    </>
  );
}

export default Footer;
