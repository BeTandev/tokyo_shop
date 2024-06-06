import { Link } from "react-router-dom";
import { blogData } from "../../mockData/blogData";

function NewBlog() {
  return (
    <div className="container mx-auto mt-10">
      <div className="row w-[95%] xs:w-[90%] mx-auto">
        <h3 className="text-center text-2xl font-medium text-main-brown">
          Tin Tức Mới
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-4">
          {blogData.slice(0, 3).map((item, index) => (
            <div key={index} className="basis-1/3">
              <Link to={`${item.link}`} className=""><img src={`.${item.image}`} alt="" className="w-full" /></Link>
              <div className="text-lg text-main-brown mt-2"><Link to={`${item.link}`}>{item.title}</Link></div>
              <div className="flex text-slate-400 text-xs">
                <div className="">{item.date}</div>
                <div className="">- Đăng bởi {item.author}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewBlog;
