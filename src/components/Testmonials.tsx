import { feedback } from "../data";
import styles from "../data/style";
import quotes from "../assets/quotes.svg";
function Testmonials() {
  return (
    <section
      id="clients"
      className={`flex justify-center items-center flex-col sm:py-16 py-6 relative`}
    >
      <div className="absolute z-[0] w-[60%] h-[60%] top-0 -right-1/2 blue__gradient" />

      <div className="flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1] w-full ">
        <h2 className={`${styles.heading2}`}>
          What people are <br className="hidden md:block" /> saying about us
        </h2>
        <p className={`${styles.paragraph}`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className="flex flex-wrap  sm:justify-between justify-center relative z-[1] w-full feedback-container">
        {feedback.map((el) => (
          <div
            className="text-white flex flex-col justify-between px-10 py-12 rounded-2xl max-w-[370px]  md:mr-10 sm:mr-5 mr-0 feature-card"
            key={el.id}
          >
            <img
              src={quotes}
              alt="qoutes"
              loading="lazy"
              className="w-[42px] h-[27px]"
            />
            <p className="font-poppins font-normal text-[18px] my-10">
              {" "}
              {el.content}
            </p>
            <div className="flex items-center  ">
              <img
                src={el.img}
                alt={el.name}
                className="w-[48px] h-[48px] rounded-full "
              />
              <div className="flex-col ml-4">
                <h4 className="font-poppins font-normal text-[20px]">
                  {el.name}
                </h4>
                <p className="font-poppins font-normal text-[16px]  text-dimWhite ">
                  {el.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testmonials;
