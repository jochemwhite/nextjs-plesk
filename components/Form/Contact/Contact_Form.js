import React from "react";
import { useState } from "react";
import s from "./form.module.css"

export default function Contact_Form() {
	//default States
	const [name, setName] = useState(" ")
	const [email, setEmail] = useState(" ");
	const [onderwerp, setOnderwerp] = useState(" ");
	const [message, setMessage] = useState(" ");
	const [submitted, setSubmitted] = useState(false);

	//summit function
	function handleSubmit(e) {
		e.preventDefault();
		let data = {
			name,
			email,
			subject,
			message,
		};

		//send data to API
		fetch("/api/contact/form", {
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
				setName(" ")
				setEmail(" ");
				setOnderwerp(" ");
				setMessage(" ");
			}
		});
	}

	return (
		<div className=" ">
			<div className="flex items-center">
				<h1 className="font-semibold  text-2xl">Contact Form</h1>
			</div>

			<form
				className="w-full max-w-lg pt-16"
				onSubmit={(e) => {
					handleSubmit(e);
					window.location.reload(false);
				}}
			>
				<div className="flex flex-wrap -mx-3 mb-6  justify-center">
					<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 ">
						<input
							className={s.name}
							id="name"
							type="name"
							required
							placeholder="Naam"
							onChange={(e) => {
								setName(e.target.value)
							}}
						/>
					</div>
					<div className="w-full md:w-1/2 px-3">
						<input
							className={s.email}
							id="email"
							type="email"
							placeholder="Email"
							required
							onChange={(e) => {
								setEmail(e.target.value)
							}}
						/>
					</div>
				</div>
				<div className="flex flex-wrap -mx-3 mb-6">
					<div className="w-full px-3">
						<input
							className={s.onderwerp}
							id="subject"
							type="subject"
							placeholder="onderwerp"
							required
							onChange={(e) => {
								setOnderwerp(e.target.value)
							}}
						/>

						<div className="flex justify-between"></div>
					</div>
				</div>
				<div className="flex flex-wrap -mx-3 mb-6">
					<div className="w-full px-3">
						<textarea
							className="no-resize appearance-none block w-full bg-gray-200 border-transparent  py-3 px-4 mb-3 leading-tight  h-48 resize-none focus:outline-none focus:bg-white focus:ring-0 focus:border-main"
							id="message"
							required
							placeholder="Bericht"
							onChange={(e) => {
								setMessage(e.target.value);
							}}
						></textarea>
					</div>
				</div>
				<div className="md:flex md:items-center">
					<div className="md:w-1/3">
						<button
							className="shadow bg-[#69af08] hover:bg-main-dark focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 "
							type="submit"
						>
							verzenden
						</button>
					</div>
					<div className="md:w-2/3"></div>
				</div>
			</form>
		</div>
	);
}
