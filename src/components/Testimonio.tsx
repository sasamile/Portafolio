import { persona1, persona2, persona3 } from "@/assets/Img";
import TestimonioCarousel from "./TestimonioCarousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

function Testimonio() {
  return (
    <div className="text-center ">
      <h1 className="font-Rubik text-4xl">Testimonio</h1>
      <p className="mb-12 mt-6 font-Josefin text-xl w-[80%] mx-auto">
        Estos son algunos testimonios de mis clientes ...
      </p>

      <Carousel className="w-[60%] mx-auto  relative">
        <CarouselPrevious className="absolute top-[300px] bg-black/80 text-white" />
        <CarouselContent>
          <CarouselItem>
            <TestimonioCarousel img={persona1} />
          </CarouselItem>
          <CarouselItem>
            <TestimonioCarousel img={persona2} />
          </CarouselItem>
          <CarouselItem>
            <TestimonioCarousel img={persona3} />
          </CarouselItem>
        </CarouselContent>
        <CarouselNext className="absolute top-[300px] bg-black/80 text-white" />
      </Carousel>
    </div>
  );
}

export default Testimonio;
