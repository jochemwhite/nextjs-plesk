import Link from "next/link";
import s from "./navbar.module.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Mobiel_navbar from "./Mobiel_navbar";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  let menu;
  if (isOpen) {
    menu = <Mobiel_navbar />;
  }

  return (
    <>
      
      <div className={s.container}>
        
        <div className={s.navbar_container}>
          <div className={s.hamburger}>
            <FontAwesomeIcon icon={faBars} onClick={() => setIsOpen(!isOpen)} />
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
            <li>
              <Link href="/design">
                <a>Design</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Affilate</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
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
          <div className=" flex bg-main-dark h-full items-center px-5 font-bold text-lg">
            <Link href="/klantportaal">
              <a>klant portaal</a>
            </Link>
          </div>
        </div>
      </div>
      <div>{menu}</div>
    </>
  );
};

export default Navbar;

{
  /* <li>Website</li>
          <li>Gamehosting</li>
          <li>Affilate</li>
          <li>Over Ons</li>
          <li>Contact</li> */
}
