import styles from "../data/style";
import Button from "./Button";
import card from "../assets/card.png";

function CardDeal() {
  return (
    <section className={`flex md:flex-row flex-col sm:py-16 py-6`}>
      <div className={`flex flex-col items-start justify-center  flex-1`}>
        <h2 className={`${styles.heading2} `}>
          Find a better card deal <br className="hidden md:block" /> in few easy
          steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <Button />
      </div>
      <div className="flex flex-1  ">
        <img src={card} alt="card" className="w-full h-full " loading="lazy" />
      </div>
    </section>
  );
}

export default CardDeal;
