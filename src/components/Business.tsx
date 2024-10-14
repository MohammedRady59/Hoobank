import { features } from "../data";
import styles, { layout } from "../data/style";
import Button from "./Button";

function Business() {
  return (
    <section
      id="features"
      className={`flex md:flex-row flex-col sm:py-16 py-6`}
    >
      <div className={`flex flex-col items-start justify-center  flex-1`}>
        <h2 className={`${styles.heading2} `}>
          You do the business, <br className="hidden md:block" /> we’ll handle
          the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button />
      </div>
      <div className={`${layout.sectionImg} flex-col `}>
        {features.map((el, idx) => (
          <div
            key={el.id}
            className={`flex flex-row p-6 rounded-[20px] feature-card  ${
              idx !== features.length ? "mb-6" : "mb-0"
            }`}
          >
            <div className="w-[80px] h-[80px] flex justify-center items-center bg-dimBlue rounded-full ">
              <img
                src={el.icon}
                alt="icon"
                loading="lazy"
                className="w-1/2 h-1/2"
              />
            </div>
            <div className="flex flex-col  ml-3 flex-1">
              <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
                {el.title}
              </h4>
              <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[23px]">
                {el.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Business;
