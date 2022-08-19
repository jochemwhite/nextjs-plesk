import React from "react";
import Image from "next/image";

import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Price_Table(props) {
  return (
    <>
      <div className="w-64  text-sm bg-white mx-4 mb-8">
        <div className="flex justify-center bg-white   pt-2 border-t-4 border-main ">
          <div>
            <div className="flex justify-center text-xs">
              <p className="border-b-2 border-main mb-2">{props.game}</p>
            </div>
            <div className="flex justify-center">
              <h1 className="text-2xl font-bold">{props.title}</h1>
              <h1 className="text-2xl  ml-1">plan</h1>
            </div>
            <div className="flex justify-center py-2">
              <div className="inline-block n tracking-widest text-center	">
                <Image
                  src={props.image}
                  alt={props.title}
                  width={100}
                  height={100}
                />
              </div>
            </div>
            {/* <div className="text-4xl text-center">{props.price}</div> */}
          </div>
        </div>
        <div className=" bg-main px-20 py-4 flex justify-center">
          <h1 className="text-white font text-2xl">{props.price}</h1>
        </div>
        <div className="">
          <ul className="divide-y divide-solid divide-black/[.05] px-4 ">
            <li className="py-3">
              <FontAwesomeIcon icon={faCheck} className="text-main mr-2" />
              {props.items1}
            </li>
            <li className="py-3">
              <FontAwesomeIcon icon={faCheck} className="text-main mr-2 " />
              {props.items2}
            </li>
            <li className="py-3">
              <FontAwesomeIcon icon={faCheck} className="text-main mr-2" />
              {props.items3}
            </li>
            <li className="py-3">
              <FontAwesomeIcon icon={faCheck} className="text-main mr-2" />
              {props.items4}
            </li>
            <li className="py-3">
              <FontAwesomeIcon icon={faCheck} className="text-main mr-2" />
              {props.items5}
            </li>
            <li className="py-3">
              <FontAwesomeIcon icon={faCheck} className="text-main mr-2" />
              {props.items6}
            </li>
            <li className="py-4">
              <FontAwesomeIcon icon={faCheck} className="text-main mr-2" />
              {props.items7}
            </li>
          </ul>
        </div>
        <div className="flex justify-center bg-slate-300 p-4">
          <div className="bg-main px-4 py-2 text-white hover:bg-main-dark">
            <a href="">{props.button}</a>
          </div>
        </div>
      </div>
    </>
  );
}
