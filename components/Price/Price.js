import React from "react";

import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Price(props) {
  return (
    <>
      <div className="w-96 xl:w-96 lg:w-72  shadow-black shadow-lg">
        <div className=" flex justify-center bg-slate-200  py-5 border-t-4 border-main ">
          <h1 className="font-bold text-5xl">{props.price}</h1>
        </div>
        <div className=" bg-main px-20 py-4 flex justify-center">
          <h1 className="text-white font-bold text-2xl">{props.title}</h1>
        </div>
        <div className="bg-slate-200   ">
          <ul className="divide-y divide-solid divide-black/[.05] px-4 ">
            <li className="py-4">
              <FontAwesomeIcon icon={faCheck} className="text-main mr-2" />
              {props.items1}
            </li>
            <li className="py-4">
              <FontAwesomeIcon icon={faCheck} className="text-main mr-2 " />
              {props.items2}
            </li>
            <li className="py-4">
              <FontAwesomeIcon icon={faCheck} className="text-main mr-2" />
              {props.items3}
            </li>
            <li className="py-4">
              <FontAwesomeIcon icon={faCheck} className="text-main mr-2" />
              {props.items4}
            </li>
            <li className="py-4">
              <FontAwesomeIcon icon={faCheck} className="text-main mr-2" />
              {props.items5}
            </li>
            <li className="py-4">
              <FontAwesomeIcon icon={faCheck} className="text-main mr-2" />
              {props.items6}
            </li>
          </ul>
        </div>
        <div className="flex justify-center bg-slate-300 p-4">
          <div className="bg-main px-4 py-2 text-white hover:text-main-dark">
            <a href="">{props.button}</a>
          </div>
        </div>
      </div>
    </>
  );
}
