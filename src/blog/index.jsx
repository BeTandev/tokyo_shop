import { Link } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "../component/Header";
import TitlePage from "../component/TitlePage";
import { blogData } from "../mockData/blogData";

function Blog() {
    return (
        <div>
            <Header />
            <div className="container mx-auto">
                <div className="row w-[95%] xs:w-[90%] mx-auto">
                    <TitlePage title="Tin tức" />
                    <h2 className="mt-5 text-3xl font-medium text-main-brown">Tin Tức</h2>
                    <hr className="bg-orange-400 mt-2 h-0.5" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-4">
                        {blogData.slice(0, 3).map((item, index) => (
                            <div key={index} className="basis-1/3">
                                <Link to={`${item.slug}`} className=""><img src={`.${item.image}`} alt="" className="w-full" /></Link>
                                <div className="text-lg text-main-brown mt-2 font-medium"><Link to={`${item.link}`}>{item.title}</Link></div>
                                <div className="flex text-slate-400 text-sm">
                                    <div className="">{item.date}</div>
                                    <div className="">- Đăng bởi {item.author}</div>
                                </div>
                                <div className="text-sm mt-2 leading-6">{item.summary}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Blog;