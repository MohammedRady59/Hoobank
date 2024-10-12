import styles from "../data/style";
import Button from "./Button";

function Testmonials() {
  return (
    <section id="clients" className={`flex md:flex-row flex-col sm:py-16 py-6`}>
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
    </section>
  );
}

export default Testmonials;
