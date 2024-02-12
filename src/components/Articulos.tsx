import { FaArrowAltCircleRight } from "react-icons/fa";

function Articulos() {
  return (
    <article className="my-32">
      <h1 className="font-Rubik text-4xl text-center">Articulos</h1>
      <ul className="border-2 w-[50%] mx-auto font-semibold my-12">
        <li className="border-b-2 py-2 bg-gray-300 pl-4">Mas Recientes</li>
        <li className="border-b-2 py-2 pl-4">
          <a href="https://www.freecodecamp.org/espanol/news/">
            El decorador de Python
          </a>
        </li>
        <li className="border-b-2 py-2 pl-4">
          <a href="https://www.freecodecamp.org/espanol/news/">
            Pythom Tutorial
          </a>
        </li>
        <li className="py-2 pl-4">
          <a href="https://www.freecodecamp.org/espanol/news/">Cursos de CSS</a>
        </li>
      </ul>
      <div className="grid place-items-center my-12">
        <button>
          <a
            href="https://github.com/sasamile?tab=repositories"
            target="_blank"
            className="bg-sky-500 p-3 gap-4 rounded-xl font-bold font-Josefin text-xl text-white flex items-center "
          >
            Ver mas Articulos <FaArrowAltCircleRight />
          </a>
        </button>
      </div>
    </article>
  );
}

export default Articulos;
