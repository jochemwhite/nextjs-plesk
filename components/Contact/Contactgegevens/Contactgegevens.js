import React from "react";
import s from "./Contactgegevens.module.css";
import {
	faFacebook,
	faTwitter,
	faDiscord,
	faTwitch,
	faInstagram,
	faWhatsapp,
	faLinkedinIn,
    faAccessibleIcon,

	
} from "@fortawesome/free-brands-svg-icons";

import {
	faEnvelope,
	faPhoneAlt,
	faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contactgegevens(props) {
	return (
		<div className={s.container}>
			<div>
				<div>
					<h1 className={s.title}>Contactgegevens</h1>
				</div>

				<div className={s.contactgegevens}>
					<a href="" className={s.iconlink}>
						<span className={s.iconsitem}>
                        <FontAwesomeIcon icon={faEnvelope} />
						</span>
						{props.email}
					</a>
					<a href="" className={s.iconlink}>
						<span className={s.iconsitem}>
							<FontAwesomeIcon icon={faPhoneAlt} />
						</span>
						{props.tel}
					</a>
					<a href="" className={s.iconlink}>
						<span className={s.iconsitem}>
							<FontAwesomeIcon icon={faDollarSign} />
						</span>
						KVK Nummer: {props.kvk}
					</a>

				</div>

				<div className={s.iconlist}>
					<a href="" className={s.icons}>
						<FontAwesomeIcon icon={faFacebook} />
					</a>
					<a href="" className={s.icons}>
						<FontAwesomeIcon icon={faTwitter} />
					</a>
					<a href="" className={s.icons}>
						<FontAwesomeIcon icon={faInstagram} />
					</a>
					<a href="" className={s.icons}>
						<FontAwesomeIcon icon={faWhatsapp} />
					</a>
					<a href="" className={s.icons}>
						<FontAwesomeIcon icon={faLinkedinIn} />
					</a>
					<a href="" className={s.icons}>
						<FontAwesomeIcon icon={faDiscord} />
					</a>
					<a href="https://www.twitch.tv/leannetalens" className={s.icons}>
						<FontAwesomeIcon icon={faTwitch} />
					</a>
				</div>
			</div>
		</div>
	);
}
