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
          <button>CTA</button>
        </div>
        <div className="circler">
          <svg height="320" width="320" className="orangeCircle">
            <circle cx="160" cy="160" r="160" stroke="none" strokeWidth="4" fill="#e46f21" />
          </svg>
          <svg height="320" width="320" className="greenCircle">
            <circle cx="160" cy="160" r="160" stroke="none" strokeWidth="4" fill="#226F63" />
          </svg>
        </div>
      </section>
    </header>
  );
}

export default Header;
