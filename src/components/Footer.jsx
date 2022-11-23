import React from "react";
import "../styles/Footer.scss";

function Footer() {
  return (
    <footer>
      <section className="max-width">
        <div className="footerLogos">
          <h3>CO2 UDREGNER</h3>
          <svg height="50" width="50">
            <circle
              cx="25"
              cy="25"
              r="20"
              stroke="none"
              strokeWidth="4"
              fill="#226F63"
            />
            <text
              fill="#ffffff"
              fontSize="12"
              fontFamily="Verdana"
              x="12"
              y="30"
            >
              CO2
            </text>
            Sorry, your browser does not support inline SVG.
          </svg>
        </div>
        <div className="footerLinks">
          <ul>
            <li>
              <a href="">Første</a>
            </li>
            <li>
              <a href="">Anden</a>
            </li>
            <li>
              <a href="">Trejde</a>
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
