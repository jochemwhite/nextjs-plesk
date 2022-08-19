import s from "./why.module.css";

export default function Why() {
  return (
    <div className={s.container}>
      <div className={s.image}>
        <img src="https://mrhosting.nl/img/features-img/cloudHosting.png"/>
      </div>
      {/* <h1 className="flex justify-center text-4xl font-bold pb-8">Waarom Amrio</h1> */}
      <div className={s.grid_items}>
        <div className={s.item}>
              

          <img src="https://mrhosting.nl/img/features-img/01.png" alt="" />
          <h1 className={s.title}>Firewall</h1>
          <p>Protectie tegen ongewenste malware</p>
              
        </div>
        <div className={s.item}>
          <div>
            <img
              src="https://mrhosting.nl/img/features-img/02.png"
              alt=""
            />
            <h1 className={s.title}>Data Encryptie</h1>
            <p>Encryptie van data zodat jouw website beveiligd blijft.</p>
          </div>
        </div>
        <div className={s.item}>
          <img src="https://mrhosting.nl/img/features-img/03.png" alt="" />
          <h1 className={s.title}>Website Analyse</h1>
          <p>Analyseer je website gemakkelijk met ingebouwde tools.</p>
        </div>
        <div className={s.item}>
          <img src="https://mrhosting.nl/img/features-img/04.png" alt="" />
          <h1 className={s.title}>Data Protectie</h1>
          <p>Automatische back-ups worden elke 24 uur gemaakt.</p>
        </div>
        <div className={s.item}>
          <img src="https://mrhosting.nl/img/features-img/05.png" alt="" />
          <h1 className={s.title}>Klantenservice</h1>
          <p>24/7 ticketondersteuning beschikbaar.</p>
        </div>
        <div className={s.item}>
          <img src="https://mrhosting.nl/img/features-img/06.png" alt="" />
          <h1 className={s.title}>Technische Service</h1>
          <p>
            Een professioneel team staat klaar om je te assisteren met de
            technische aspecten van websites en servers.
          </p>
        </div>
      </div>
    </div>
  );
}
