import React from "react";
import Modal from "./Modal";
import { useState } from "react";
import axios from "axios";

export default function Form() {
  const [value, setvalue] = useState("");
  const [TLD, setTLD] = useState("nl");
  const [showModal, setShowModal] = useState(false);
  const [button, setbutton] = useState("zoeken");
  const [status, setstatus] = useState("");

  async function handleSubmit(e) {
    let data = {
      value,
      TLD,
    };

    e.preventDefault();
    console.log("Sending");

    let res = await axios.post(`/api/transip/check_domain`, {
      data,
    });

    let domain_status = res.data.message.availability.status;

    if (domain_status === "free") {
      setstatus("Beschikbaar");
      setbutton("Nu Kopen!");
    } else {
      setstatus("bezet");
      setbutton("Verhuizen!");
    }
    setShowModal(true);
  }

  return (
    <>
      <Modal />
      <form
        className="flex bg-white shadow-md max-w-80 md:w-1"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="flex">
          <input
            className="appearance-none border text-xl py-2 w-80 h-12 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="domain"
            type="text"
            placeholder="Vul uw doemain in"
            onChange={(e) => {
              setvalue(e.target.value);
            }}
          />
        </div>
        <select
          className="flex text-xl px-4"
          name=""
          id="countries"
          onChange={(e) => {
            setTLD(e.target.value);
          }}
        >
          <option value="nl">.NL</option>
          <option value="com">.COM</option>
          <option value="net">.NET</option>
          <option value="eu">.EU</option>
          <option value="be">.BE</option>
          <option value="org">.ORG</option>
          <option value="info">.info</option>
        </select>
        <input
          className="bg-main px-12 font-bold text-white text-xl"
          type="submit"
          value="Zoeken"
        ></input>
      </form>
    </>
  );
}
