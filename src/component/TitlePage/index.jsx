import { Link } from "react-router-dom";

function TitlePage(props) {

    const {title, detailTitle, link} = props

    return (
        <div className="flex items-center gap-1 mt-5">
            <Link to={"/"} className="text-sm text-main-brown">Trang chủ</Link>
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
            {detailTitle ? (<Link className="text-sm text-main-brown" to={`/${link}`}>{title}</Link>) : (<div className="text-sm text-main-brown">{title}</div>)}
            {detailTitle && (<svg
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
            </svg>)}
            {detailTitle && (<div className="text-sm text-main-brown">{detailTitle}</div>)}
          </div>
    );
}

export default TitlePage;