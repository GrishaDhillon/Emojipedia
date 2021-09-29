import React from "react";
import Emoticons from "./Emoticons";
import Definition from "./Definition";

function Entry(props) {
  return (
    // <dl className="dictionary">
    <div className="term">
      <dt>
        <Emoticons emoji={props.emoji} />
        <span>{props.name}</span>
      </dt>
      <dd>
        <Definition meaning={props.meaning} />
      </dd>
    </div>
    // </dl>
  );
}

export default Entry;
