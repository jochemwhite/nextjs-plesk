import React from "react";
import s from "./drag_and_drop.module.css";

export default function Drag_And_Drop() {
  return (
    <div className={s.container}>
      <div className={s.image_container}>
        <img
          src="https://mrhosting.nl/img/features-img/softaculous.png"
          alt=""
        />
      </div>
      <div className={s.text_container}>
        <div>
          <h1>Start Snel & Gemakkelijk</h1>
          <p>
            Zelfs met beperkte expertise kunt u gemakkelijk uw website overal
            vandaan updaten. Log in op uw <br /> dashboard en breng de nodige
            wijzigingen aan. Als de wijzigingen zijn opgeslagen, zijn ze direct{" "}
            <br />
            zichtbaar op uw website!
          </p>
        </div>
      </div>
    </div>
  );
}
