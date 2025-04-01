import CardsCss from "./cards.module.css";
import Image from "../comp/Devanshu.jpg";

function Cards(props) {
  //   const { name } = props;

  //   props.name = "Hello class";

  return (
    <>
      <div className={CardsCss.main}>
        <img src={Image} alt="" className={CardsCss.image} />
        <h1 className="text-center text-danger">{props.name}</h1>
        <p className="text-center text-info">Web Developer</p>
        <button className="btn btn-success form-control">More Info..</button>
      </div>
    </>
  );
}

export default Cards;

/**
 function  multi(a){

return a * a

 }

 multi(5)


 */
