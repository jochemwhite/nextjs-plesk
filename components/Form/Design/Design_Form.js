import React from "react";
import { useState } from "react";

export default function Design_Form() {
  //default States
  const [firstname, setfirstName] = useState("");
  const [lastname, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [product, setProduct] = useState("logo");
  const [prioriteit, setPrioriteit] = useState("low");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  //summit function
  function handleSubmit(e) {
    e.preventDefault();
    let data = {
      firstname,
      lastname,
      email,
      product,
      prioriteit,
      message,
    };

    //send data to API
    fetch("/api/contact/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      //on response
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
        setSubmitted(true);
        setfirstName("");
        setEmail("");
        setProduct("Logo");
        setProduct("low");
        setMessage("");
      }
    });
  }

  return (
    <div className=" shadow-black shadow-lg border border-main rounded-xl p-16">
      <div className="flex justify-center items-center">
        <h1 className="font-semibold  text-2xl">Vraag nu een offerte aan</h1>
      </div>

      <form
        className="w-full max-w-lg pt-16"
        onSubmit={(e) => {
          handleSubmit(e);
          window.location.reload(false);
        }}
      >
        <div className="flex flex-wrap -mx-3 mb-6 ">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 ">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              First Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-main rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              required
              placeholder="John"
              onChange={(e) => {
                setfirstName(e.target.value);
              }}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Last Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-main rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Smith"
              required
              onChange={(e) => {
                setlastName(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              E-mail
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-main rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="email"
              type="email"
              placeholder="johnsmith@gmail.com"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />

            <div className="flex justify-between">
              <div>
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Product
                </label>
                <select
                  id="product"
                  name="product"
                  onChange={(e) => {
                    // setEmail(e.target.value);
                    setProduct(e.target.value);
                  }}
                >
                  <option value="logo">Logo</option>
                  <option value="Visite kaartje">Visite kaartje</option>
                  <option value="Poster">Poster</option>
                  <option value="Brand Boek">Brand boek</option>
                </select>
              </div>

              <div>
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Prioriteit
                </label>
                <select
                  id="prioriteit"
                  name="prioriteit"
                  onChange={(e) => {
                    console.log(e.target.value);
                    setPrioriteit(e.target.value);
                  }}
                >
                  <option value="Low">low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                  <option value="Urgent">Urgent</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Message
            </label>
            <textarea
              className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-main rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
              id="message"
              required
              placeholder="graag willen wat infomatie over u design "
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            ></textarea>
            <p className="text-gray-600 text-xs italic"></p>
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3">
            <button
              className="shadow bg-[#69af08] hover:bg-main-dark focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Send
            </button>
          </div>
          <div className="md:w-2/3"></div>
        </div>
      </form>
    </div>
  );
}
