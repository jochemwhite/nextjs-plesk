import React from 'react'
import s from "./Contact_from.module.css";
import Contact_Form from "../Form/Contact/Contact_Form"

export default function Contact_from() {
  return (
    <div className={s.background}>
      <div className={s.content}>
        <Contact_Form />
      </div>
    </div>
  );
}
