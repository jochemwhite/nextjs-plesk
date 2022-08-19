import React from "react";
import Image from "next/image";
import s from "./swiper_content.module.css";

//icons
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Slider_content(props) {
  return (
    <div className={s.container}>
      <div className={s.content_container}>
        <div className={s.content}>
          <h1>{props.slider_title}</h1>
          <p>
            {props.slider_description1} {props.slider_description2}
          </p>
          <div className={s.feature_container}>
            <ul className={s.features}>
              <li>
                <FontAwesomeIcon icon={faCheck} className={s.icon} />
                <b>{props.item1_bold}</b> {props.item1}
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} className={s.icon} />
                <b>{props.item2_bold}</b> {props.item2}
              </li>
            </ul>
            <ul className={s.features}>
              <li>
                <FontAwesomeIcon icon={faCheck} className={s.icon} />
                <b>{props.item3_bold}</b> {props.item3}
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} className={s.icon} />
                <b>{props.item4_bold}</b> {props.item4}
              </li>
            </ul>

            {/* <div className={s.features}>
              <p>
                <FontAwesomeIcon icon={faCheck} className={s.icon} />
                <b>{props.item1_bold}</b> {props.item1}
              </p>
              <p>
                <FontAwesomeIcon icon={faCheck} className={s.icon} />
                <b>{props.item2_bold}</b> {props.item2}
              </p>
            </div>
            <div className={s.features}>
              <p>
                <FontAwesomeIcon icon={faCheck} className={s.icon} />
                <b>{props.item3_bold}</b> {props.item3}
              </p>
              <p>
                <FontAwesomeIcon icon={faCheck} className={s.icon} />
                <b>{props.item4_bold}</b> {props.item4}
              </p>
            </div> */}
          </div>
          <div className={s.button}>
            <a href={props.slider_url}>{props.slider_button}</a>
          </div>
        </div>
      </div>
      <div className={s.image_container}>
        <div>
          <Image
            src={props.img_url}
            alt={props.img_alt}
            width={props.img_width}
            height={props.img_height}
          />
        </div>
        <div className={s.price_container}>
          <p className={s.text}>{props.text1}</p>
          <p className={s.price}>{props.price}</p>
          <p className={s.text}>{props.text2}</p>
        </div>
      </div>
    </div>
  );
}
