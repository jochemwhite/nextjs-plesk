import React from "react";
import s from "./over-ons.module.css";
import Image from "next/image";








export default function Over_ons() {
	return (
		<>
			<div>
				<div className={s.container}>
					<h3 className={s.title}>
						"We zijn een hechte groep die streeft naar het <br />{" "}
						leveren van perfectie, voor een betaalbare prijs."
					</h3>
				</div>
				<div className={s.container}>
					<h5 className={s.subtitle}>
						- Jochem van der Wit, Mede Eigenaar
					</h5>
				</div>
			</div>

			<div className="flex flex-row pb-20">
				<div className="flex basis-1/3 justify-end">
					<div className="w-96">
						<h5 className={s.texttitle}> wie zijn wij</h5>
						<p className={s.text}>
							We zijn een hechte vriendengroep van vijf die elkaar
							online heeft leren kennen. We delen allemaal een
							interesse: gamen. Sinds kleins af aan gamen we
							allemaal. Toen we ouder werden hebben een aantal van
							ons een passie gekregen voor programmeren, anderen
							voor het ontwerpen van of hosten van websites. Door
							ons bedrijf MrHosting te starten kunnen wij deze
							passie uiten in ons beroep!
						</p>
					</div>
				</div>
				<div className="flex basis-1/3 justify-center">
					<div className="w-96">
						<h5 className={s.texttitle}> Wat wij doen</h5>
						<p className={s.text}>
							Wij leveren klanten een betaalbare,
							klantvriendelijke server om hun websites, games,
							domeinen, mail servers en nog veel meer te hosten.
							Wij leggen hierbij de focus op klanttevredenheid.
							Wij begeleiden onze klanten bij het maken van
							websites en hosten van websites en games. Als de
							klant nog vragen heeft kan hij ons altijd bereiken
							via de telefoon. Zijn we er even niet? Dan hebben
							wij een 24/7 ticket support systeem.
						</p>
					</div>
				</div>
				<div className="flex basis-1/3 justify-start">
					<div className="w-96">
						<h5 className={s.texttitle}> Waarom wij dit doen</h5>
						<p className={s.text}>
							We hebben het idee dat de meeste website en gaming
							hosts niet genoeg aandacht focussen op de
							klanttevredenheid. Ze willen zo snel mogelijk de
							deal sluiten zodat ze door kunnen naar de volgende
							klant. Bij MrHosting proberen wij de klant zo veel
							mogelijk te begeleiden. We bieden ook de
							mogelijkheid voor content creators om zich aan te
							melden als een affiliate. Op deze manier kunnen zij
							geld verdienen door ons klanten te leveren!
						</p>
					</div>
				</div>
			</div>

			<div className="bg-purple-50">
				<h1 className="flex justify-center text-4xl py-20 ">Ons Team</h1>
				<div className="flex flex-row">
					<div className="basis-1/2 ">
						<div className="flex justify-center">
							<div>
								<Image
									src="/contact/placeholder.jpg"
									width="500"
									height="500"
								/>
                                <div className="flex justify-center">

								<p className="flex justify-center text-xl font-bold">Jochem van der wit</p>
                                </div>
                                <p className="flex justify-center">Server Manager</p>
							</div>
						</div>
					</div>
					<div className="basis-1/2 ">
						<div className="flex justify-center">
							<div>
								<Image
									src="/contact/placeholder.jpg"
									width="500"
									height="500"
								/>
                                <div className="flex justify-center">

								<p className="flex justify-center text-xl font-bold">Jochem van der wit</p>
                                </div>
                                <p className="flex justify-center">Server Manager</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
