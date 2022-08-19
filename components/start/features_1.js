import React from "react";
import s from "./features.module.css";

export default function Features_1() {
  return (
    <div className={s.container}>
      <div className={s.image_container}>
        <img
          src="https://mrhosting.nl/img/features-img/drag-and-drop.png "
          alt=""
        />
      </div>
      <div className={s.text_container}>
        <div>
          <h1>Drag and Drop Website Bouwer</h1>
          <p>
            Creëer je eigen website gemakkelijk met Wordpress. Wordpress kan
            geïnstalleerd worden vanuit ons dashboard, je kunt dus direct
            beginnen!
          </p>
        </div>
      </div>
    </div>
  );
}
