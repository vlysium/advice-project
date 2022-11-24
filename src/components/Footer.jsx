import React from "react";
import "../styles/Footer.scss";

function Footer() {
  return (
    <footer>
      <section className="max-width">
        <div className="footerLogos">
          <a href="/">
            <svg height="50" width="50">
              <circle cx="25" cy="25" r="20" stroke="none" strokeWidth="4" fill="#226F63" />
              <text fill="#ffffff" fontSize="12" fontFamily="Verdana" x="12" y="30">
                CO&#8322;
              </text>
              Sorry, your browser does not support inline SVG.
            </svg>
          </a>
          <h5>Footprint Calculator</h5>
        </div>
        <div className="footerLinks">
          <ul>
            <li>
              <a href="#converter">Calculator</a>
            </li>
            <li>
              <a href="#tips">Advice</a>
            </li>
          </ul>
        </div>
        <div className="footerMedia">
          <img src="./assets/icons/icons8-facebook-240.svg" alt="" />
          <img src="./assets/icons/icons8-instagram.svg" alt="" />
          <img src="./assets/icons/icons8-tiktok.svg" alt="" />
        </div>
      </section>
    </footer>
  );
}

export default Footer;
