import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebookF,
  faTwitter,
  faDiscord,
  faTwitch,
} from "@fortawesome/free-brands-svg-icons";

//visite kaartje
//logo's
//flyers
//posters
//brandboek
//stickers

export default function () {
  return (
    <>
      <div className="flex flex-row text-black justify-around text-6xl ">
        <div className="p-16 bg-black rounded-full">
          <FontAwesomeIcon icon={faDiscord} />
        </div>
        <div>2</div>
        <div>3</div>
      </div>
    </>
  );
}
