import { clients } from "../data";

function Clients() {
  return (
    <section>
      <div className="flex flex-col md:flex-row flex-wrap gap-5 md:gap-0 sm:justify-between justify-center my-4 items-center">
        {clients.map((el) => (
          <div key={el.id}>
            <img
              src={el.logo}
              alt="client"
              className="w-[100px] sm:w-[192px]"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Clients;
