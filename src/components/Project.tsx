import { FaArrowAltCircleRight, FaGithub } from "react-icons/fa";
import { projectos } from "../constant";

function Project() {
  return (
    <section>
      <h1 className="font-Rubik text-4xl text-center pt-32">Mis Proyectos</h1>
      <p className="text-2xl text-center py-8 text-gray-600 max-md:w-[90%] max-md:mx-auto">
        Estos son algunos Proyectos que he creado recientemente
      </p>

      <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1  w-[90%] mx-auto gap-12 ">
        {projectos.map(({ img, href }) => (
          <div key={href} className="relative">
            <img
              src={img}
              alt="img"
              width={500}
              className="h-[300px] object-center object-cover border-gray-500 border-2"
            />
            <div className="bg-black/80 absolute inset-0 opacity-0 hover:opacity-100 hover:flex hover:items-center hover:justify-center">
              <a href={href} target="_blank" className="text-white text-7xl">
                <FaGithub />
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="grid place-items-center my-12">
        <button>
          <a
            href="https://github.com/sasamile?tab=repositories" 
            target="_blank"
            className="bg-sky-500 p-3 gap-4 rounded-xl font-bold font-Josefin text-xl text-white flex items-center "
          >
            Ver mas Proyectos <FaArrowAltCircleRight />
          </a>
        </button>
      </div>
    </section>
  );
}

export default Project;
