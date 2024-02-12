import { Principal, header } from "../assets/Img";

function Header() {
  return (
    <>
      <header className="mt-20 w-[80%] mx-auto text-center">
        <img
          src={header}
          alt="header"
          width={300}
          className="rounded-full mx-auto"
        />
        <h1 className="font-Rubik text-[45px] max-md:text-[40px] pt-8">
          ¡Hola!,Soy Santiago Suescun
        </h1>
        <p className="font-sans text-xl md:text-3xl max-md:py-5 w-[80%] max-md:w-full mx-auto text-gray-700 ">
          Desarrollo sitios web y escribo articulos sobre programacion tambien
          hago mantenimientos de celulares y computadores.
        </p>
      </header>
      <div className="w-[65%] mx-auto pt-12 md:pb-12 max-md:w-full " >
      <img src={Principal} alt="principal" className="rounded-3xl max-md:rounded-none" />
      </div>
    </>
  );
}

export default Header;
