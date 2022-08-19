import { useState, useEffect } from "react";

import axios from "axios";
import Modal from "./Modal";
import s from "./Modal.module.css";
import m from "./domain.module.css";

const Domain = () => {
  const [showModal, setShowModal] = useState(false);
  const [value, setvalue] = useState("");
  const [button, setbutton] = useState("zoeken");
  const [status, setstatus] = useState(" ");
  const [TLD, setTLD] = useState("nl");
  const [TLD2, setTLD2] = useState("nl");
  const [value2, setvalue2] = useState("");

  const handleCloseClick = (e) => {
    window.location.reload(false);
  };

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
    setvalue2(value);
    setTLD2(TLD);
    setShowModal(true);
  }

  return (
    <>
      <div className={m.container}>
        <div className={m.text_container}>
          <div className={m.background}>
            <p>Op Zoek Naar Een Premium Kwaliteit</p>
            <h1>Domeinnaam?</h1>
          </div>
        </div>

        <div className={m.from_container}>
          <div>
            <div>
              <form
                className={m.form}
                onSubmit={(e) => {
                  handleSubmit(e);
                }}
              >
                <div className="">
                  <input
                    className="appearance-none border text-xl py-2  h-12 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  xl:w-80"
                    id="domain"
                    type="text"
                    required
                    placeholder="Vul uw domain in"
                    onChange={(e) => {
                      setvalue(e.target.value);
                    }}
                  />
                </div>
                <select
                  className=" text-xl w-full px-4 md:text-lg lg:flex"
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
                  className="bg-main px-12 font-bold text-white text-xl w-full py-2"
                  type="submit"
                  value="Zoeken"
                ></input>
              </form>
            </div>
          </div>
        </div>
      </div>

      {showModal ? (
        <>
          <div className={s.background}>
            <div className={s.modal}>
              <div className={s.bernard}>
                <h3 className={s.title}>Domain</h3>
                <button
                  type="button"
                  className={s.close_button}
                  data-modal-toggle="defaultModal"
                  onClick={(e) => {
                    handleCloseClick(e);
                  }}
                >
                  <svg
                    className="w-5 h-5"
                    fillRule="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>

              <div className={s.status_text}>
                <p>
                  Het domain {value2}.{TLD2} is{" "}
                  <span className="font-bold">{status}</span>
                </p>
              </div>

              <h1 className={s.form_title}>Toch een ander domain?</h1>
              <div className={s.form_container}>
                <div></div>
                <div className="flex">
                  <form
                    className={m.form}
                    onSubmit={(e) => {
                      handleSubmit(e);
                    }}
                  >
                    <div>
                      <input
                        className="appearance-none border text-xl py-2  h-12 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  xl:w-80"
                        id="domain"
                        type="text"
                        required
                        placeholder="Vul uw domain in"
                        onChange={(e) => {
                          setvalue(e.target.value);
                        }}
                      />
                    </div>
                    <select
                      className=" text-xl w-full px-4 md:text-lg lg:flex"
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
                      className="bg-main px-12 font-bold text-white text-xl w-full py-2"
                      type="submit"
                      value="Zoeken"
                    ></input>
                  </form>
                </div>
              </div>

              <div className={s.button_container}>
                <button
                  data-modal-toggle="defaultModal"
                  type="button"
                  className={s.action_button}
                >
                  {button}
                </button>
                <button
                  onClick={(e) => {
                    handleCloseClick(e);
                  }}
                  data-modal-toggle="defaultModal"
                  type="button"
                  className={s.close_button}
                >
                  Nu Sluiten
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        true
      )}
    </>
  );
};

export default Domain;
