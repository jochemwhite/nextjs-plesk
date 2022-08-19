import s from "./Banner.module.css";

export default function Banner(props) {
  let BG = {
    backgroundImage: "url(" + props.background + ")",
  };
  return (
    <div className={s.background} style={BG}>
      <h1>{props.title}</h1>
      <p>{props.subetile}</p>
    </div>
  );
}
