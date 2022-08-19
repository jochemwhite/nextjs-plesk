import Image from "next/image";
import Link from "next/link";
import s from "./logo.module.css"

const Logo = () => {
  return (
    <div className={s.container}>
      <div className={s.logo}>
        <Link href="/">
          <a>
            <Image
              src="/Logo/logo.png"
              alt="Picture of the author"
              width={150}
              height={100}
            />
          </a>
        </Link>
      </div>
      <div className={s.icons}>
        <div className={s.icon}>
          <a href="">
            <img src="https://mrhosting.nl/img/top-bar-icons/01.png" alt="" />
          </a>
          <p>24/7 support</p>
        </div>
        <div className={s.icon}>
          <a href="">
            <img src="https://mrhosting.nl/img/top-bar-icons/02.png" alt="" />
          </a>
          <p>Affiliate Programma</p>
        </div>
        <div className={s.icon}>
          <a href="">
            <img src="https://mrhosting.nl/img/top-bar-icons/03.png" alt="" />
          </a>
          <p>99% Uptime</p>
        </div>
      </div>
    </div>
  );
};

export default Logo;
