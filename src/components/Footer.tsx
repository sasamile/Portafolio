import { header } from "@/assets/Img";
import { FaFacebook, FaGithub, FaWhatsapp } from "react-icons/fa";
import { IoIosMailUnread } from "react-icons/io";

function Footer() {
  return (
    <footer className="bg-[#1B1B32] pt-40 mt-32">
      <div className="bg-[#0C6EFD] py-12 w-[80%] -m-52 text-white px-32 items-center gap-12 mx-auto rounded-2xl flex max-md:flex-col">
        <h1 className="font-Rubik text-3xl">¡Hablemos!</h1>
        <p className="w-[300px] max-md:w-full  mx-auto text-center">
          Contactame para iniciar tu proyecto de desarrollo web y hare que tu
          vision se vuelva realidad.
        </p>
        <div>
          <button className="flex items-center gap-2 rounded-full border-white border-2 p-3 font-bold ">
            Contacto <IoIosMailUnread />
          </button>
        </div>
      </div>
      <div className="mt-64 grid items-center justify-center">
        <img
          src={header}
          alt="principal"
          width={150}
          className="mx-auto rounded-full my-12"
        />
        <p className="w-[400px] mx-auto text-center font-bold text-2xl text-white">
          Apredo y creo todo los dias. Creemos un proyecto juntos{" "}
        </p>
        <div className="text-3xl text-white flex items-center justify-center gap-12 py-12">
          <a
            href="#"
            className="border-2 p-4 rounded-full hover:bg-white hover:text-black"
          >
            <FaFacebook />
          </a>
          <a
            href="#"
            className="border-2 p-4 rounded-full hover:bg-white hover:text-black"
          >
            <FaGithub />
          </a>
          <a
            href="#"
            className="border-2 p-4 rounded-full hover:bg-white hover:text-black"
          >
            <FaWhatsapp />
          </a>
        </div>

        <p className="text-center text-white text-xl py-12">Creado por Santiago Suescun (2023) ©</p>
      </div>
    </footer>
  );
}

export default Footer;
