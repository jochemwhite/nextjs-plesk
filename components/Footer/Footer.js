import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import s from "./Icons.module.css";
import c from "./Copyright.module.css";
import t from "./Text.module.css";
import Image from "next/image";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";

import {
  faPhoneAlt,
  faEnvelope,
  faHeadphones,
} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  var thisYear = new Date().getFullYear();

  return (
    <>
      <div className={t.container}>
        <div className={t.about}>
          <div className={t.title_container}>
            <h1>Over Ons</h1>
          </div>
          <p>
            De visie van Amrio is het aanbieden van hoge kwaliteit servers, voor
            een lage prijs. Dit is perfect voor streamers die samen met hun
            kijkers/vrienden op een privéserver willen spelen. Speciaal voor
            games zoals Minecraft en Valheim is het essentieel om een
            betrouwbare host te hebben
          </p>
          <Link href="/over-ons">
            <button>Meer lezen</button>
          </Link>
          
        </div>
        <div className={t.widget}>
          <div className={t.title_container}>
            <h1>Bedrijf</h1>
          </div>
          <div className={t.lines}>
            <ul>
              <li>
                <Link href="/contact">
                  <button>Over Ons</button>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <button>Privacybeleid</button>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <button>Algemene voorwaarden</button>
                </Link>
              </li>
              <li className="py-1">KVK Nummer: 80167659</li>
              <li className="py-1">BTW ID: NL861574667B01</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={s.container}>
        <ul className={s.list}>
          <li className={s.list_item}>
            <Link href="mailto:info@amrio.nl">
              <button className={s.text}>
                <div className={s.icon}>
                  <FontAwesomeIcon icon={faHeadphones} />
                </div>
                <div>Klantenservice</div>
              </button>
            </Link>
          </li>
          <li className={s.list_item}>
            <Link href="mailto:info@amrio.nl">
              <button className={s.text}>
                <div className={s.icon}>
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div>info@amrio.nl</div>
              </button>
            </Link>
          </li>
        </ul>
        <ul className={s.list}>
          <li className={s.list_item}>
            <Link href="tel:+31615543324">
              <button className={s.text}>
                <div className={s.icon}>
                  <FontAwesomeIcon icon={faPhoneAlt} />
                </div>
                <div>0615543324</div>
              </button>
            </Link>
          </li>
          <li className={s.list_item}>
            <Link href="https://discord.gg/kqz2z57CYw">
              <button className={s.text}>
                <div className={s.icon}>
                  <FontAwesomeIcon icon={faDiscord} />
                </div>
                <div>Discord</div>
              </button>
            </Link>
          </li>
        </ul>
      </div>

      <div className={c.container}>
        <div className={c.payment}>
          <h1>WIJ ACCEPTEREN:</h1>
          <Image src="/footer/payment-methods.png" width={399} height={40} />
        </div>
        <div className={c.copyright}>
          <p className={c.text}>&copy;Copyright {thisYear} &nbsp; </p>
          <Link href="/">
            <button>Amrio</button>
          </Link>
          <p>&nbsp; All Rights Reserved.</p>
        </div>
      </div>
    </>
  );
}
