import "../styles/Tips.scss";

import React from "react";

function Tips() {
  return (
    <section id="tips">
      <h2>Advice to reduce your CO2 emissions</h2>
      <div className="tips_container">
        <div className="tips_box">
          <h4>Browser</h4>
          <p>Close unused tabs in your browsers.</p>
        </div>
        <div className="tips_box">
          <h4>Apps</h4>
          <p>Close apps you don't use so they aren't running in the background.</p>
        </div>
        <div className="tips_box">
          <h4>Emails</h4>
          <p>Unsubscribe to newsletter you don't read. Don’t use reply all unless necessary</p>
        </div>
        <div className="tips_box">
          <h4>Sleepmode</h4>
          <p>Turn off your devices any time you won’t be using them for 2 hours or more.</p>
        </div>
        <div className="tips_box">
          <h4>Charging</h4>
          <p>Don’t leave your devices plugged in for longer than they need to charge.</p>
        </div>
        <div className="tips_box">
          <h4>Turn off autoplay</h4>
          <p>Minimize unnecessary energy use by avoiding streaming videos you’re not actually watching.</p>
        </div>
        <div className="tips_box">
          <h4>Clouds</h4>
          <p>Move to the cloud and choose a cloud provider that uses renewable energy</p>
        </div>
        <div className="tips_box">
          <h4>Booksmarks</h4>
          <p>
            Save bookmarks for websites you frequently go to instead of searching for them in your search engine each
            time.
          </p>
        </div>
        <div className="tips_box">
          <h4>Deleting</h4>
          <p>Purge your inbox, photo albums, documents, and other files regularly.</p>
        </div>
      </div>
    </section>
  );
}

export default Tips;
