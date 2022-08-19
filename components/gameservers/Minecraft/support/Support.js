import React from "react";
import s from "./support.module.css";
import Image from "next/image";

export default function Support() {
  return (
    <>
      <div className={s.container}>
        <h1 className={s.title}>Wat Ondersteunen Wij?</h1>
        <div className={s.items}>
          <div className={s.item}>
            <div className={s.icon}>
              <Image
                src="/Minecraft/icons/craftbuckit.png"
                width="65px"
                height="47px"
              />
            </div>
            <h1 className={s.subtitle}>Plugins</h1>
            <p className={s.description}>
              Gemakkelijke installatie voor plugins via ons Minecraft dashboard
            </p>
          </div>
          <div className={s.item}>
            <div className={s.icon}>
              <Image
                src="/Minecraft/icons/mods_icon.png"
                width="65px"
                height="47px"
              />
            </div>
            <h1 className={s.subtitle}>Mods</h1>
            <p className={s.description}>
              Onze servers ondersteunen mods en modpacks. Voor ondersteuning bij
              installatie kun je altijd contact opnemen!
            </p>
          </div>
          <div className={s.item}>
            <div className={s.icon}>
              <Image
                src="/Minecraft/icons/uptime_icon.png"
                width="65px"
                height="47px"
              />
            </div>
            <h1 className={s.subtitle}>Uptime</h1>
            <p className={s.description}>
              De servers worden alleen offline gehaald voor updates, verder is
              de server altijd online!
            </p>
          </div>
          <div className={s.item}>
            <div className={s.icon}>
              <Image
                src="/Minecraft/icons/ddos_icon.png"
                width="65px"
                height="47px"
              />
            </div>
            <h1 className={s.subtitle}>DDoS Protectie</h1>
            <p className={s.description}>
              Onze Minecraft servers beschikken over DDoS protectie, zodat jouw
              server 24/7 beschikbaar is.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
