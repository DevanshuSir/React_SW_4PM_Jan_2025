import CardCSS from "./card.module.css";
import profile from "./Devanshu.jpg";

// const { card, card_H } = CardCSS;

function Card() {
  const styleP = {
    textAlign: "center",
    color: "brown",
  };

  return (
    <>
      <h1 style={{ textAlign: "center", color: "green" }}>Card Comp..🙋‍♂️</h1>

      <p style={styleP}>
        In the late Vedic period, around the 6th century BCE, the small states
        and chiefdoms of the Ganges Plain and the north-western regions had
        consolidated into 16 major oligarchies and
      </p>

      <div className={CardCSS.card}>
        <img src={profile} alt="" className={CardCSS.image} />
        <h1 className={CardCSS.card_H}>Devanshu</h1>
        <p className="text-center text-info">Web developer</p>
        <button className="btn btn-danger form-control">More Info</button>
      </div>
    </>
  );
}

export default Card;
