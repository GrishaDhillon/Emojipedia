import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function addEmoji(emojis) {
  return (
    <Entry
      key={emojis.id}
      emoji={emojis.emoji}
      name={emojis.name}
      meaning={emojis.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map(addEmoji)}
        {/* <Entry
        emoji={emojipedia[0].emoji}
        name={emojipedia[0].name}
        meaning={emojipedia[0].meaning}
      /> */}
      </dl>
    </div>
  );
}

export default App;
