import { Link } from "react-router-dom";
import imgs from "../../assets/imgs";

function Banner() {
  return (
      <div
        className="container h-[280px] md:h-[400px] bg-center bg-no-repeat bg-cover flex items-center mt-10 mx-auto"
        style={{ backgroundImage: `url(.${imgs.middle_banner})` }}
      >
        <div className="row w-[95%] xs:w-[90%] mx-auto flex flex-col items-center md:items-end">
          <h2 className="text-4xl text-white font-medium text-center">
            Trà Việt Nam Chất Lượng
          </h2>
          <Link
            to={`/tat-ca-san-pham`}
            className=" bg-orange-400 text-white text-sm md:text-lg rounded hover:bg-transparent border border-orange-400 transition-all duration-300 mt-5 block w-max px-8 py-3 hover:text-white">
            Xem tiếp
          </Link>
        </div>
      </div>
  );
}

export default Banner;
