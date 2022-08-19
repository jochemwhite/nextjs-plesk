import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/header/header";
import Banner from "../components/banner/banner";
import s from "../styles/Logo.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function logo() {
  return (
    <>
      <Header />
      <div className={s.container}>
        <h1>Logo ontwerp aanvragen</h1>
        <div className={s.features_container}>
          <div>
            <h2>Al onze pakketten zijn inclusief:</h2>
            <div className={s.features}>
            <ul>
              <li>
                <FontAwesomeIcon icon={faCheck} className={s.icon} />
                Alle ontwerp- en correctierondes
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} className={s.icon} />
                100% tevredenheidsgarantie
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} className={s.icon} />
                Je krijgt écht alle benodigde bestanden voor drukwerk- en
                digitaal gebruik
              </li>
            </ul>
            <ul>
              <li>
                <FontAwesomeIcon icon={faCheck} className={s.icon} />
                Betaling achteraf
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} className={s.icon} />
                Volledige rechten
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} className={s.icon} />
                Ervaren Nederlandse ontwerpers waarmee je rechtstreeks contact
                hebt
              </li>
            </ul>
            </div>
          </div>
          
        </div>
      </div>

      <Footer />
    </>
  );
}
