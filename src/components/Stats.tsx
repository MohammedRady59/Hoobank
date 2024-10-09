import { stats } from "../data";

function Stats() {
  return (
    <section className="flex items-center justify-center flex-wrap flex-row mb-6 sm:mb-20">
      {stats.map((el) => (
        <div
          key={el.id}
          className="flex md:items-center flex-1 md:justify-center m-3 md:flex-row flex-col"
        >
          <h4 className="font-poppins text-white text-[30px] xs:text-[40px] font-semibold ">
            {el.value}
          </h4>
          <p className="font-poppins text-gradient  text-[15px] xs:text-[20px] font-normal ">
            {el.title}
          </p>
        </div>
      ))}
    </section>
  );
}

export default Stats;
