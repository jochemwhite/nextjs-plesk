import s from "./topbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebookF,
  faTwitter,
  faDiscord,
  faTwitch,
} from "@fortawesome/free-brands-svg-icons";

import { faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Topbar = () => {
  return (
    <div className={s.Topbar}>
      <div className={s.text}>
        <div className={s.mobiel}>
          <FontAwesomeIcon className={s.icon} icon={faPhoneAlt} />
          <a className={s.text_info} href="tel:+31615543324">
            +31615543324
          </a>
        </div>
        <div className={s.email}>
          <FontAwesomeIcon className={s.icon} icon={faEnvelope} />
          <a
            className={s.text_info}
            href="mailto:info@amrio.nl"
            target="_blank"
          >
            info@amrio.nl
          </a>
        </div>
      </div>
      <div className={s.icons}>
        <a className={s.brand_icon} href="" target="_blank">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a className={s.brand_icon} href="" target="_blank">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a
          className={s.brand_icon}
          href="https://discord.gg/kqz2z57CYw"
          target="_blank"
        >
          <FontAwesomeIcon icon={faDiscord} />
        </a>
        <a className={s.brand_icon} href="" target="_blank">
          <FontAwesomeIcon icon={faTwitch} />
        </a>
      </div>
    </div>
  );
};

export default Topbar;
