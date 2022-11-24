import "../styles/Tips.scss";
import TipsBox from "./TipsBox";

import React from "react";

function Tips(props) {
  return (
    <section id="tips">
      <h2>Advice to reduce your CO2 emissions</h2>
      <div className="tips_container">
        <TipsBox title="Browser" text="Close unused tabs in your browsers." />
        <TipsBox title="Apps" text="Close apps you don't use so they aren't running in the background." />
        <TipsBox title="Emails" text="Unsubscribe to newsletter you don't read. Don’t use reply all unless necessary." />
        <TipsBox title="Sleepmode" text="Turn off your devices any time you won’t be using them for 2 hours or more." />
        <TipsBox title="Charging" text="Don’t leave your devices plugged in for longer than they need to charge." />
        <TipsBox title="Turn off autoplay" text="Minimize unnecessary energy use by avoiding streaming videos you’re not actually watching." />
        <TipsBox title="Clouds" text="Move to the cloud and choose a cloud provider that uses renewable energy." />
        <TipsBox
          title="Booksmarks"
          text="Save bookmarks for websites you frequently go to instead of searching for them in your search engine each
            time."
        />
        <TipsBox title="Deleting" text="Purge your inbox, photo albums, documents, and other files regularly." />

      </div>
    </section>
  );
}

export default Tips;
