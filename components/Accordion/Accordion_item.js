import { useState } from "react";
import s from "./Accordion.module.css";

export default function Accordion_item(props) {
  const [expanded, setExpanded] = useState(false);

  
  return (
    <div
      key={props.id}
      onClick={() => setExpanded(!expanded)}
      className={s.accordion_container}
    >
      <div className={s.accordion} key={props.id}>
        <p className={expanded ? s.expanded : s.collapsed}>{props.title}</p>
        <img src="/Accordion/icon-arrow-down.svg" alt="arrow down" />
      </div>
      <div
        key={props.id}
        className={`${s.description} ${
          expanded ? `${s.description_active}` : `${s.description_inactive}`
        }`}
      >
        {props.key}
        <p>{props.description}</p>
      </div>
    </div>
  );
}
