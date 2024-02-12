import { info } from "../constant";

function Info() {
  return (
    <section className="grid grid-cols-3 w-[90%] mx-auto max-md:grid-cols-1 mt-12">
      {info.map(({ Icon, title, label }) => (
        <div key={title} className="border-2 border-gray-400 hover:bg-[#1B1B32] hover:text-white">
          <div className="bg-[#0A0A23] w-[80%] mx-auto py-4 mt-4 rounded-3xl">
            <Icon className="text-[#7ADE2A] mx-auto text-3xl" />
          </div>
          <h1 className="text-3xl text-center py-4 font-bold">{title}</h1>

          <p className="w-[90%] mx-auto text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            eius magni, possimus dolore voluptas quisquam earum, officiis quis
            soluta at blanditiis illum porro sapiente esse explicabo corrupti
            ipsam voluptatibus! Quos.
          </p>

          <div className="flex flex-wrap gap-2 items-center justify-center py-4 w-[80%] mx-auto">
            {label.map((lb) => (
              <span className="bg-sky-700 text-white p-2 rounded-2xl font-bold text-sm" key={lb[0]}>{lb}</span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Info;
