import React from "react";
import s from "./Affilate_form.module.css";

import { useState } from "react";

export default function Affiliate_form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [discord, setDiscord] = useState("");
  const [platform, setPlatform] = useState("Twitch");
  const [link, setLink] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    let data = {
      name,
      email,
      country,
      discord,
      platform,
      link,
      message,
    };

    //send data to API
    fetch("/api/contact/affiliate", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      //on response
    })
      .then((res) => {
        console.log("Response received");
        if (res.status === 200) {
          console.log("Response succeeded!");
          setName("");
          setEmail("");
          setCountry("");
          setDiscord("");
          setPlatform("Twitch");
          setLink("");
          setMessage("");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className={s.container}>
      <div className={s.header}>
        <h1 className={s.title}>Inschrijven</h1>
        <p>
          Neem contact op met Amrio door het onderstaande formulier in te
          vullen!
        </p>
      </div>
      <div className={s.form}>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
            window.location.reload(false);
          }}
        >
          <div className={s.form_group}>
            <div className={s.form_item}>
              <label className={s.label} htmlFor="name">
                Naam:
              </label>
              <input
                type="text"
                className={s.form_control}
                id="name"
                placeholder="Vul je volledgie naam is"
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className={s.form_item}>
              <label className={s.label} htmlFor="name">
                Email:
              </label>
              <input
                type="text"
                className={s.form_control}
                id="name"
                required
                placeholder="Vul je Email adres in"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={s.form_item}>
              <label className={s.label} htmlFor="name">
                Land:
              </label>
              <input
                type="text"
                className={s.form_control}
                id="name"
                required
                placeholder="Vul je Land in"
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
            <div className={s.form_item}>
              <label className={s.label} htmlFor="name">
                Discord:
              </label>
              <input
                type="text"
                className={s.form_control}
                id="name"
                required
                placeholder="Vul je Discord tag in"
                onChange={(e) => setDiscord(e.target.value)}
              />
            </div>
            <div className={s.form_item}>
              <label className={s.label} htmlFor="platform">
                Main platform:
              </label>
              <select
                onChange={(e) => setPlatform(e.target.value)}
                id="platform"
                name="platform"
                className={s.form_control}
              >
                <option value="Twitch">Twitch</option>
                <option value="Youtube">Youtube</option>
                <option value="Instagram">Instagram</option>
                <option value="Tiktok">Tiktok</option>
              </select>
            </div>
            <div className={s.form_item}>
              <label className={s.label} htmlFor="name">
                {platform}:
              </label>
              <input
                type="text"
                className={s.form_control}
                id="name"
                placeholder={`Vul je ${platform} link in`}
                required
              />
            </div>
            <div className={s.form_item}>
              <label className={s.label} htmlFor="name">
                Bericht:
              </label>
              <textarea
                id="subject"
                name="subject"
                className={s.form_control}
                placeholder="vertel iets over jezelf en waar kan Amrio jouw helpen"
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <div className={s.form_item}>
              <button type="submit" className={s.btn}>
                Verstuur
              </button>
            </div>

            <p className={s.disclaimer}>
              <small>
                <i>We zullen uw bericht zo snel mogelijk beantwoorden.</i>
              </small>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
