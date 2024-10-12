import { layout } from "../data/style";
import bill from "../assets/bill.png";
import apple from "../assets/apple.svg";
import google from "../assets/google.svg";
function Billing() {
  return (
    <section id="product" className={`${layout.sectionReverse}`}>
      <div className={`${layout.sectionImgReverse}`}>
        <img
          src={bill}
          alt="bill"
          loading="lazy"
          className="w-full h-full relative z-[5]"
        />
        <div className="absolute z-[3] w-1/2 h-1/2 top-0 -left-1/2 white__gradient" />
      </div>
      <div className="flex flex-col flex-1 justify-center text-white items-start ">
        <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
          Easily control your <br className="hidden md:block" /> billing &
          invoicing.
        </h2>
        <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] mt-5 ">
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className="flex flex-wrap flex-row mt-5 md:mt-10 ">
          <img
            src={apple}
            alt="apple"
            loading="lazy"
            className="cursor-pointer w-[128px] h-[42px] mr-5 "
          />
          <img
            src={google}
            alt="apple"
            loading="lazy"
            className="cursor-pointer w-[128px] h-[42px]  "
          />
        </div>
      </div>
    </section>
  );
}

export default Billing;
