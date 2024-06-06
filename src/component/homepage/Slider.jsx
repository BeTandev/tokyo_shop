import imgs from "../../assets/imgs";
import { Carousel } from "@material-tailwind/react";

function Slider() {
  return (
    <div className="container mx-auto mt-10">
      <div className="row w-[95%] xs:w-[90%] mx-auto">
      <Carousel className="rounded-xl">
      <img
        src={`.${imgs.slider1}`}
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src={`.${imgs.slider2}`}
        alt="image 1"
        className="h-full w-full object-cover"
      />
    </Carousel>
      </div>
    </div>
    

  );
}

export default Slider;
