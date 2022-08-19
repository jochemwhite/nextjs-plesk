import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faDiscord,
  faTwitch,
} from "@fortawesome/free-brands-svg-icons";

export default function ContactCard(props) {
  return (
    <div className="flex justify-center bg-white  ">
      <div className="pt-12  rounded-lg border border-solid border-main shadow-black shadow-sm border-t-8 w-80">
        <div className="flex justify-center text-4xl">
          <FontAwesomeIcon
            className="flex justify-center text-main"
            icon={props.icon}
          />
        </div>
        <div className="py-6">
          <h2 className="flex justify-center font-bold text-black text-3xl ">
            {props.title}
          </h2>
        </div>
        <div className=" px-1 text-center ">
          <p className=" text-lg leading-10">{props.description}</p>
        </div>
        <div className="flex justify-center pt-16 pb-12">
          <button className="text-xl px-12 rounded-full border border-main border-solid hover:bg-main">
            {props.button}
          </button>
        </div>
      </div>
    </div>
  );
}
