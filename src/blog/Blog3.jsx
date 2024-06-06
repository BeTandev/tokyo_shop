import { Link } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "../component/Header";
import TitlePage from "../component/TitlePage";
import CommentBox from "../component/DetailBlogComponent/CommentBox";
import ShowComment from "../component/DetailBlogComponent/ShowComment";
import BlogMenu from "../component/DetailBlogComponent/BlogMenu";
import { useEffect, useState } from "react";

function Blog3() {
  const [commentData, setCommentData] = useState([]);

  useEffect(() => {
    const getComment = localStorage.getItem("cmtSave");
    const commentJson = JSON.parse(getComment);
    setCommentData(commentJson);
  }, []);

  return (
    <div>
      <Header />
      <div className="container mx-auto">
        <div className="row w-[95%] xs:w-[90%] mx-auto">
          <TitlePage title="Blog" link="/" detailTitle="Chỉ dẫn hương vị" />
          <div className="flex flex-col md:flex-row mt-7 gap-10">
            <div className="basis-3/4">
              <h2 className="text-2xl text-main-brown font-medium">
                Chỉ dẫn hương vị
              </h2>
              <div className="text-sm tracking-wide text-main-brown mt-2">
                Một “từ điển” các tính từ mô tả hương vị sau đây sẽ giúp bạn
                vượt qua sự chung chung và nắm bắt tốt nhất các hương vị cụ thể
                từng loại trà, làm phong phú thêm thế giớ trà của bạn.
              </div>
              <div className="text-sm tracking-wide text-main-brown mt-2">
                Nên nhớ rằng không có mùi vị độc lập hay biên giới nghiêm ngặt
                nào giữa các từ này, mùi vị luôn tồn tại phức hợp và đôi khi các
                từ mô tả chồng lấp lên nhau.
              </div>
              <div className="text-sm tracking-wide text-main-brown mt-2">
                Khi nếm thử, chúng ta đánh giá 3 khía cạnh của trà: mùi hương,
                vị và dịch trà.
              </div>
              <h3 className="text-xl text-main-brown mt-4">Mùi hương : </h3>
              <div className="text-sm tracking-wide text-main-brown mt-2">
                Là các phẩm chất của trà được cảm nhận bằng mũi. Bạn có thể
                thưởng thức hương trà ở cả nước trà và sợi trà vừa pha trong ấm.
                Tôi thường thích thưởng thức mùi hương trong ấm trà khi vừa rót
                ra hết.
              </div>
              <div className="text-sm tracking-wide text-main-brown mt-2">
                Để khám phá sự phong phú diệu kỳ của các hương vị, hãy nhớ bạn
                phải biết cách pha trà.
              </div>
              <hr className="bg-main-brown mt-4" />
              <div className="mt-4 text-main-brown">
                <strong>Tags: </strong>
                <Link to={`/tagged/huong-vi-tra`}>Hương vị trà</Link>
              </div>
              <ShowComment slug="blog3" commentData={commentData}/>
              <CommentBox slug="blog3" setCommentData={setCommentData}/>
            </div>
            <BlogMenu slug="huong-vi-tra" title="Hương vị trà"/>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Blog3;
