import s from "./navbar.module.css";
import React from "react";
import { useCycle } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Sidebar from "../Mobile_navbar/Sidebar";

export default function navbar() {
  const [open, cycleOpen] = useCycle(false, true);

  return (
    <>
      <Sidebar open={open} cycleOpen={cycleOpen} />

      <div className={s.container}>
        <div className={s.navbar_container}>
          <div className={s.hamburger}>
            <FontAwesomeIcon icon={faBars} onClick={cycleOpen} />
          </div>

          <ul className={s.navbar}>
            <li className={s.item}>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li className={s.dropdown}>
              <a className={s.dropbtn}>Websites</a>
              <div className={s.content}>
                <Link href="/webhosting">
                  <a>Webhosting</a>
                </Link>
                <Link href="/webdesign">
                  <a>Webdesign</a>
                </Link>
              </div>
            </li>
            <li className={s.dropdown}>
              <a className={s.dropbtn}>Game Servers</a>
              <div className={s.content}>
                <Link href="/minecraft">
                  <a>Minecraft</a>
                </Link>
              </div>
            </li>
            {/* <li className={s.dropdown}>
              <Link href="/design">
                <a>Design</a>
              </Link>

              <div className={s.content}>
                <Link href="/logo">
                  <a>Logo Ontwerp</a>
                </Link>
                <Link href="/flyer">
                  <a>Flyer Ontwerp</a>
                </Link>
                <Link href="/visitekaartje">
                  <a>Visitekaartje Ontwerp</a>
                </Link>
                <Link href="/huisstyle">
                  <a>Huisstyle Ontwerpen</a>
                </Link>
              </div>
            </li> */}

            <li>
              <Link href="/affiliate">
                <a>Affiliate </a>
              </Link>
            </li>
            <li>
              <Link href="/over-ons">
                <a>Over Ons</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center text-white ">
          <div className=" flex bg-main-dark h-full items-center px-5 font-bold text-lg py-2">
            <Link href="/klantportaal">
              <a>klant portaal</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
