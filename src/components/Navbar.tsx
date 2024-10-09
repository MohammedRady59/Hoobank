import logo from "../assets/logo.svg";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";
import { navLinks } from "../data";
import { useState } from "react";
function Navbar() {
  const [open, setOpen] = useState(false);
  function handleMenuOpen() {
    setOpen((prev) => !prev);
  }
  return (
    <nav className="w-full flex justify-between items-center py-6 navbar relative z-40">
      <img
        src={logo}
        alt="logoImage"
        loading="lazy"
        className="w-[124px] h-[32px]"
      />
      <ul className=" list-none hidden sm:flex justify-end flex-1 items-center">
        {navLinks.map((el, idx) => (
          <li
            key={idx}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
              idx === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
          >
            <a href={`#${el.id}`}>{el.title}</a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={open ? close : menu}
          alt="Menu"
          loading="lazy"
          className="object-contain w-[28px] h-[28px] cursor-pointer"
          onClick={() => handleMenuOpen()}
        />
        <div
          className={`${
            open ? "flex" : "hidden"
          } p-6 mx-4 my-2 min-w-[140px] rounded-lg absolute top-20 right-0 bg-black-gradient sidebar `}
        >
          <ul className=" list-none flex flex-col sm:hidden justify-end flex-1 items-center">
            {navLinks.map((el, idx) => (
              <li
                key={idx}
                className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
                  idx === navLinks.length - 1 ? "mb-0" : "mb-10"
                }`}
              >
                <a href={`#${el.id}`}>{el.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
