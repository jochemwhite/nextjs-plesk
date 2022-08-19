import React from "react";
import s from "./Cards.module.css";
import Link from "next/link";

export default function Cards(props) {
  let background = {
    "background-image": `url(${props.background})`,
  };
  return (
    <article className={s.card} style={background}>
      <div className={s.card_content}>
        <h3 className={s.card_title}>{props.title}</h3>
        <span className={s.card_subtitle}>{props.subtitle}</span>
        <p className={s.card_description}>{props.description}</p>
        <Link href={props.link}>
          <a className={s.card_button}>lees meer</a>
        </Link>
      </div>
    </article>
  );
}
