import styles from "../data/style";
import discount from "../assets/Discount.svg";
import GetStarted from "./GetStarted";
import robot from "../assets/robot.png";
function Hero() {
  return (
    <section
      id="home"
      className={`${styles.paddingY} flex-col flex md:flex-row justify-between `}
    >
      <div className={`${styles.flexStart}  flex-col  `}>
        <div className="mb-2 rounded-lg px-4 py-[6px] flex flex-row items-center bg-discount-gradient ">
          <img
            src={discount}
            alt="discount"
            loading="lazy"
            className="w-[32px] h-[32px]"
          />
          <p className={`${styles.paragraph} ml-2`}>
            {" "}
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Mounth</span> Account
          </p>
        </div>
        <div className="flex justify-between items-center  flex-row">
          <h1 className=" flex-1 ss:text-[72px] text-[35px] ss:leading-[100px] leading-[75px] text-white font-semibold font-poppins">
            The Next <br className="sm:block hidden" />
            <span className="text-gradient">Generation</span>
          </h1>
          <div className="ss:flex  hidden md:ml-10 ml-0">
            <GetStarted />
          </div>
        </div>
        <div>
          <h1 className=" flex-1 ss:text-[68px] text-[35px] ss:leading-[100px] leading-[75px] text-white font-semibold font-poppins">
            Payment Method
          </h1>

          <p className={`${styles.paragraph} max-w-[470px] mt-5 `}>
            Our team of experts uses a methodology to identify the credit cards
            most likely to fit your needs. We examine annual percentage rates,
            annual fees.
          </p>
        </div>
      </div>
      <div>
        <img
          src={robot}
          alt="robot"
          className="w-[650px] h-[100%] relative  z-[5] "
        />
        <div className="absolute  z-0 w-[20%] n h-[35%] top-0 right-0 pink__gradient"></div>
      </div>
      <div className="ss:hidden  flex items-center justify-center  md:mr-4 mr-0">
        <GetStarted />
      </div>
    </section>
  );
}

export default Hero;
