import { Link } from "react-router-dom";
import { blogData } from "../../mockData/blogData";

function BlogMenu(props) {

  const {slug, title} = props

  return (
    <div className="basis-1/4">
      <h3 className="text-2xl text-main-brown">Bài viết khác</h3>
      <hr className=" text-main-brown mt-3" />
      {blogData.slice(0, 3).map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-3 mt-3 text-main-brown"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-3 h-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
          <Link to={`${item.link.startsWith('/') ? '' : '/'}${item.link}`} className="text-base">
            {item.title}
          </Link>
        </div>
      ))}
      {slug && <h3 className="text-2xl text-main-brown mt-5">Tags</h3>}
      {slug && <hr className=" bg-main-brown mt-3" />}
      {slug && <Link
        to={`/tagged/${slug}`}
        className="border border-main-brown px-4 py-2 text-sm text-main-brown mt-4 block w-max hover:bg-main-brown hover:text-white transition-all duration-300"
      >
        {title}
      </Link>}
    </div>
  );
}

export default BlogMenu;
