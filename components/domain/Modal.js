import { useState, useEffect } from "react";
import s from "./Modal.module.css";
import axios from "axios";
import Form from "./Form";

const Modal = ({ show, onClose, children, domain, status, button }) => {
  const [isBrowser, setIsBrowser] = useState(false);
  
  

  useEffect(() => {
    // setIsBrowser(true);
    console.log(show)
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
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
            Het domain {domain} is{" "}
            <span className="font-bold">{status}</span>
          </p>
        </div>

        <div className={s.form_container}>
          <div>
            <h1 className={s.form_title}>Toch een ander domain</h1>
          </div>
          <div className="flex">
            <Form />
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
  ) : null;

  if (isBrowser) {
    return modalContent;
  } else {
    return null;
  }
};

export default Modal;
