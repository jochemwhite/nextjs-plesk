import s from "./Accordion.module.css";
import Image from "next/image";
import Accordion_item from "./Accordion_item";
import { v4 } from "uuid";

export default function Accordion(props) {
  const faqComponents = props.faqs.map((faq) => {
    return (
      <div key={v4()}>
        <Accordion_item
          id={faq.key}
          title={faq.title}
          description={faq.description}
        />
      </div>
    );
  });

  return (
    <>
      <div className={s.container}>
        {/* image */}
        <div className={s.image}>
          <Image
            src={props.image}
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </div>
        <div>{faqComponents}</div>
      </div>
    </>
  );
}
