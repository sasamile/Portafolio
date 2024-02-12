
interface testimonioProps{
  img:string
}


function TestimonioCarousel({img}:testimonioProps) {
  return (
    
      
        <div>
          <img src={img} alt="img" className="rounded-xl h-[500px] max-md:h-[300px] w-full" />
          <p className="font-Share text-2xl py-4 w-[90%] mx-auto max-md:text-sm max-md:w-full">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
            fugiat doloremque. Nemo eius distinctio id commodi odio doloremque
            beatae qui a, accusantium fugit possimus earum pariatur dolor minus
            explicabo saepe!
          </p>
          <h1 className="font-bold text-3xl">Gino</h1>
          <p className="font-Josefin text-xl">Gerente en proyecto en Desarrollo Web</p>
        </div>
      
    
  );
}

export default TestimonioCarousel;
