import { Link } from "react-router-dom";

function IntroducePageItem(props) {

    const {image, title, detail, link} = props

    return (
        <div className="flex items-center">
          <div className="md:basis-5/12 basis-6/12">
            <img src={`${image}`} alt="" className="h-[250px] object-cover"/>
          </div>
          <div className="md:basis-7/12 basis-6/12 ml-5">
            <h2 className="text-2xl roboto-medium text-main-brown"><Link to={`${link}`}>{title}</Link></h2>
            <div className="text-sm roboto-regular tracking-wide text-main-brown mt-2">
              {detail}
            </div>
            <Link to={`${link}`} className=" bg-orange-400 text-white text-sm md:text-lg rounded hover:bg-transparent hover:text-orange-400 border border-orange-400 transition-all duration-300 mt-4 block w-max px-5 py-2">Xem tiếp</Link>
          </div>
        </div>
    );
}

export default IntroducePageItem;