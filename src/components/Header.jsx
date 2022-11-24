import "../styles/Header.scss";

function Header() {
  return (
    <header id="header">
      <nav className="navbar">
        <a href="/">
          <svg height="50" width="50">
            <circle cx="25" cy="25" r="20" stroke="none" strokeWidth="4" fill="#226F63" />
            <text fill="#ffffff" fontSize="12" fontFamily="Verdana" x="12" y="30">
              CO&#8322;
            </text>
            Sorry, your browser does not support inline SVG.
          </svg>
        </a>
        <ul>
          <li>
            <a href="#converter">Calculator</a>
          </li>
          <li>
            <a href="#tips">Advices</a>
          </li>
        </ul>
      </nav>
      <section className="max-width" id="headerSection">
        <div className="textContent">
          <h1>
            CO<sub>2</sub> Advice
          </h1>
          <p>
            The impact which the usage of the internet has on the global environment, is greater than you may think.
            With our calculator you can estimate how much your own social media usage could be contributing!
          </p>
          <a className="btn" href="#converter">
            Find my CO<sub>2</sub> footprint
          </a>
        </div>
        <div className="circler">
          {/* <img className="orangeCircle" src="src/assets/icons/orangeCircle.svg" alt="" />
          <img className="greenCircle" src="src/assets/icons/greenCircle.svg" alt="" /> */}
          <dotlottie-player
            src="https://lottie.host/2d8bd7d7-2776-424d-8bb3-8a66eacf2814/S3fGLkZFtb.lottie"
            background="transparent"
            mode="bounce"
            speed="1"
            style={{ width: "100%", height: "auto" }}
            loop
            autoplay
          ></dotlottie-player>
        </div>
      </section>
    </header>
  );
}

export default Header;
