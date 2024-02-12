import { useState } from "react";
import { logo } from "../assets/Img";
import { navbar } from "../constant";
import { GiHamburgerMenu } from "react-icons/gi";

export function Navbar() {
  const [active, setActive] = useState(false);

  const handleActive = () => {
    setActive(!active);
  };

  return (
    <nav>
      <div className="max-md:hidden flex justify-between px-12 py-8 items-center">
        <img
          src={logo}
          alt="logo"
          width={60}
          height={50}
          className="rounded-lg"
        />
        <div>
          <ul className="flex gap-8 text-gray-400 font-Josefin">
            {navbar.map(({ label, href }) => {
              const active = "Sobre";
              return (
                <li
                  key={label}
                  className={`${active === label && "text-black"}`}
                >
                  <a href={href}>{label}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="md:hidden scale-up-center ">
        <button
          type="button"
          onClick={handleActive}
          className="transition-all duration-700 text-3xl p-4"
        >
          {active ? (
            <GiHamburgerMenu className="rotate-90 duration-500" />
          ) : (
            <GiHamburgerMenu className="duration-500" />
          )}
        </button>

        {active && (
          <ul className=" scale-up-center flex flex-col gap-8 items-center justify-center py-4 pb-12 text-gray-400 font-Josefin">
            {navbar.map(({ label, href }) => {
              const active = "Sobre";
              return (
                <li
                  key={label}
                  className={`${active === label && "text-black"}`}
                >
                  <a href={href}>{label}</a>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
