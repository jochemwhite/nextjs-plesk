import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/header/header";
import Over_ons from "../components/over-ons/over-ons";

export default function over_ons() {
	return (
		<>
			<Header />
			<div className=" bg-fixed bg-[url('/USP/test.jpg')] bg-cover bg-center py-28">
				<h1 className="flex justify-center text-4xl text-white font-bold divide-x-0 divide-main divide-solid">
					over-ons
				</h1>
				<div className="flex text-white justify-center pt-8">
					<p>Home /</p>
					<p className="text-main">over-ons </p>
					<p></p>
				</div>
			</div>

			<div>
				<Over_ons />
			</div>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit.
				Recusandae numquam enim laborum esse perferendis consequuntur
				nihil? Necessitatibus totam odio repellendus commodi possimus
				pariatur dolor aspernatur quaerat, provident nihil, fugiat
				earum!
			</p>
			<Footer />
		</>
	);
}
