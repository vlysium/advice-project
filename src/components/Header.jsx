import "../styles/Header.scss";

function Header() {
  return (
    <header>
      <nav className="navbar">
        <svg height="50" width="50">
          <circle cx="25" cy="25" r="20" stroke="none" strokeWidth="4" fill="#226F63" />
          <text fill="#ffffff" fontSize="12" fontFamily="Verdana" x="12" y="30">
            CO2
          </text>
          Sorry, your browser does not support inline SVG.
        </svg>
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
      </nav>
      <section className="max-width" id="headerSection">
        <div className="textContent">
          <h1>CO2 UDREGNER</h1>
          <p>
            The impact which the usage of the internet has on the global environment, is greater than you may think.
            With our calculator you can estimate how much your own social media usage could be contributing!
          </p>
          <a className="btn" href="#converter">
            CTA
          </a>
        </div>
        <div className="circler">
          {/* <img className="orangeCircle" src="src/assets/icons/orangeCircle.svg" alt="" />
          <img className="greenCircle" src="src/assets/icons/greenCircle.svg" alt="" /> */}

          <lottie-player
            src="https://lottie.host/c8625638-e109-4bbc-a1b5-7e2262ce6f05/gZIwASA7Be.json"
            mode="bounce"
            background="transparent"
            speed="1"
            style={{ width: "100%", height: "auto" }}
            loop
            autoplay
          ></lottie-player>
        </div>
      </section>
    </header>
  );
}

export default Header;
