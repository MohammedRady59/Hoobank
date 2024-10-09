import arrow from "../assets/arrow-up.svg";
function GetStarted() {
  return (
    <div className="w-[140px] h-[140px] flex items-center justify-center rounded-full bg-blue-gradient p-[4px] cursor-pointer">
      <div className="flex items-center justify-center w-full h-full bg-primary rounded-full flex-col">
        <div className="flex items-center justify-center ">
          <p className="font-medium font-poppins  text-[18px] leading-[23px]">
            <span className="text-gradient">Get</span>
          </p>
          <img
            src={arrow}
            alt="arrow"
            className="w-[23px] h-[23px] ml-2 object-contain"
          />
        </div>
        <p className="font-medium font-poppins  text-[18px] leading-[23px]">
          <span className="text-gradient">Started</span>
        </p>
      </div>
    </div>
  );
}

export default GetStarted;
