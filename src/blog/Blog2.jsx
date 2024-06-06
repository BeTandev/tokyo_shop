import Footer from "../component/Footer";
import Header from "../component/Header";
import TitlePage from "../component/TitlePage";
import CommentBox from "../component/DetailBlogComponent/CommentBox";
import ShowComment from "../component/DetailBlogComponent/ShowComment";
import BlogMenu from "../component/DetailBlogComponent/BlogMenu";
import { useEffect, useState } from "react";
import imgs from "../assets/imgs";

function Blog2() {
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
          <TitlePage title="Blog" link="/" detailTitle="Cách pha trà" />
          <div className="flex flex-col md:flex-row mt-7 gap-10">
            <div className="basis-3/4">
              <h2 className="text-2xl text-main-brown font-medium">
                Cách pha trà
              </h2>
              <div className="text-sm tracking-wide text-main-brown mt-2">
                Mọi người thường nghĩ pha trà rất công phu phức tạp, nên cũng
                hình thành 2 “trường phái”, một là hời hợt vì không thích tìm
                hiểu, hai là sa đà vào những phương thức huyền hoặc không thực
                tế. Tôi sẽ chỉ cho bạn 3 điểm đơn giản để có một chén chà ngon.
                Ai cũng biết các bước pha trà cơ bản, là trà khô được hãm bằng
                nước sôi trong ấm và rót ra chén thưởng thức. Pha trà không phức
                tạp đến mức bạn phải là một chuyên gia nhưng cũng không phải đơn
                giản chỉ là ngâm trà trong ấm.
              </div>
              <div className="mt-4">
                <img src={`.${imgs.blog2}`} alt="" />
              </div>
              <h3 className="text-xl mt-4 text-main-brown font-medium">
                3 Yếu tố quan trọng nhất trong pha trà
              </h3>
              <div className="text-sm tracking-wide text-main-brown mt-2">
                Bí quyết để pha trà ngon nằm trong 3 yếu tố: Nhiệt độ nước,
                Lượng trà và thời gian hãm.
              </div>
              <h4 className="text-lg mt-2 text-main-brown">Nhiệt độ nước</h4>
              <div className="text-sm tracking-wide text-main-brown mt-2">
                Tất nhiên pha trà phải dùng nước nóng, nhưng nóng bao nhiêu thì
                mỗi loại trà lại thích hợp với một nhiệt độ khác nhau. Nước vừa
                sôi chỉ phù hợp với trà đen hoặc trà ô long già, nó cần nhiệt độ
                cao để phá vỡ các kết cấu và phát tán hương vị. Nhưng phải dùng
                nước nguội hơn cho các loại trà có hương vị tinh tế, như trà
                xanh, trà ô long. Nước quá nóng sẽ làm trà bị “cháy”, làm cho
                trà bị đắng chát và mất đi các hương vị tinh tế, nhưng nước quá
                nguội cũng sẽ làm hương vị trà yếu đi rất nhiều vì các hợp chất
                trong trà không được hòa tan.
              </div>
              <h4 className="text-lg mt-2 text-main-brown">Lượng trà</h4>
              <div className="text-sm tracking-wide text-main-brown mt-2">
                Lượng trà quá nhiều sẽ làm trà quá đắng (và tốn kém ^__^), nhưng
                quá ít trà thì hương vị sẽ rất yếu không đủ thưởng thức. Tuỳ vào
                từng loại trà sẽ có định lượng khác nhau. Một tỉ lệ mà các bạn
                có thể bắt đầu thử là 8g trà cho một ấm 300ml, sau đó bạn có thể
                gia giảm lượng trà cho phù hợp với khẩu vị của mình.
              </div>
              <h4 className="text-lg mt-2 text-main-brown">Thời gian hãm</h4>
              <div className="text-sm tracking-wide text-main-brown mt-2">
                Kỵ nhất trong pha trà là “ngâm” trà, nhưng lỗi này hầu hết mọi
                người đều mắc phải, nó sẽ làm trà quá đắng chát và có mùi nẫu.
                Giống như nhiệt độ nước, mỗi loại trà sẽ phù hợp với một thời
                gian hãm nhất định. Trà đen, trà ô long có thể ngâm lâu hơn
                nhưng trà xanh thì nhanh hơn nhiều. Nhìn chung thời gian hãm trà
                được tính bằng giây chứ không phải bằng phút.
              </div>
              <h4 className="text-xl mt-2 text-main-brown font-semibold">
                Các bước pha trà
              </h4>
              <div className="text-sm tracking-wide text-main-brown mt-2">
                Đây là cách pha trà 7 bước được Trà Việt khuyến khích, các bạn
                cần có: trà, ấm chén và chuyên trà để bắt đầu
              </div>
              <div className="text-sm tracking-wide text-main-brown mt-2 ml-6">
                <strong>Đun nước: </strong>Một lần nữa chắc chắn rằng nước bạn
                có là nước đóng chai đã được lọc, không phải nước khoáng hay
                nước máy. Hầu hết các loại trà đều pha trà dưới nhiệt độ sôi,
                trong khoảng 75°C – 98°C tuỳ loại.
              </div>
              <div className="text-sm tracking-wide text-main-brown mt-2 ml-6">
                <strong>Làm nóng ấm chén: </strong>Khi ấm đun nước gần đạt độ
                sôi, bạn rót nước vào ấm, đậy nắp lại. Khi ấm trà nóng lên, bạn
                rót hết nước ra chuyên trà và các ly.
              </div>
              <div className="text-sm tracking-wide text-main-brown mt-2 ml-6">
                <strong>Đong trà: </strong>Cho trà vào ấm, lượng trà ít nhiều
                tuỳ từng loại, thông thường là 1/5 đến 1/2 ấm trà.
              </div>
              <div className="text-sm tracking-wide text-main-brown mt-2 ml-6">
                <strong>Đánh thức trà: </strong>rót nước nóng ngập trà và đổ đi
                càng nhanh càng tốt.. Đây không phải là nước để uống, nó có tác
                dụng “đánh thức” để các lá trà bắt đầu nở ra. Nước nóng đánh
                thức trà không phải là nước sôi.
              </div>
              <div className="text-sm tracking-wide text-main-brown mt-2 ml-6">
                <strong>Hãm trà: </strong>Đổ nước nóng vào đầy ấm, đậy nắp ấm và
                hãm trà trong khoảng 10-40 giây tuỳ loại trà. Đây là công đoạn
                quan trọng nhất, hãy đảm bảo nhiệt độ nước và thời gian hãm phù
                hợp với loại trà.
              </div>
              <div className="text-sm tracking-wide text-main-brown mt-2 ml-6">
                <strong>Rót trà: </strong>sau 10-40 giây, rót hết nước từ ấm trà
                vào chuyên, từ chuyên mới rót ra các chén uống trà. Chuyên trà
                lúc này rất quan trọng, giúp bạn ngừng ngay quá trình hãm trà
                trong ấm bằng cách rót nhanh và rót hết nước trong ấm ra chuyên.
                Đảm bảo nước trong ấm được rót ra hết, không để nước dư trong
                ấm. Mở nắp ấm sau khi rót trà ra chuyên, để trà không bị “nẫu”
                vì nhiệt độ cao trong ấm.
              </div>
              <div className="text-sm tracking-wide text-main-brown mt-2 ml-6">
                <strong>Hãm trà lần tiếp theo: </strong>Lặp lại bước 5 và bước 6
                cho các lần pha tiếp theo. Lần hãm sau thường có thời gian lâu
                hơn so với lần pha trước.IFrame Nếu nước trà đầu tiên quá nhạt
                hoặc quá đậm, hãy điều chỉnh thời gian ở lần hãm tiếp theo. Trà
                ngon và pha khéo, bạn có thể lặp lại 5-8 lần hãm trà, trước khi
                hương vị trở nên quá nhạt.
              </div>
              <h4 className="text-xl mt-2 text-main-brown font-semibold">
                Một số mẹo nhỏ giúp pha trà ngon
              </h4>
              <div className="text-sm tracking-wide text-main-brown mt-2 ml-6">
                Hãy bắt đầu với những chiếc ấm nhỏ và thành mỏng, mọi thứ sẽ dễ
                dàng hơn nhiều. Nước máy không thể phà trà được, đơn giản nhất
                là dùng các loại nước đóng chai (nhưng không phải là nước
                khoáng)
              </div>
              <div className="text-sm tracking-wide text-main-brown mt-2 ml-6">
                Không cần có nhiệt kế để đo nhiệt độ. Bạn có thể giảm nhiệt độ
                nước bằng cách đun sôi và để nguội dần, nước đun trong bình siêu
                tốc, sau 5 phút sẽ giảm còn khoảng 83°C
              </div>
              <div className="text-sm tracking-wide text-main-brown mt-2 ml-6">
                Sợi trà nhỏ, mỏng, xốp pha nhiệt độ thấp, sợi trà lớn, chắc pha
                nhiệt độ cao. Trà xanh pha nhiệt độ thấp hơn. Trà ô long, trà
                đen cần nhiệt độ cao hơn.
              </div>
              <div className="text-sm tracking-wide text-main-brown mt-2 ml-6">
                Nếu muốn hương vị đậm hơn, hãy tăng lượng trà, không phải tăng
                nhiệt độ hay ngâm lâu hơn. Không có một đáp án hoàn toàn chính
                xác về nhiệt độ nước, thời gian pha và định lượng trà cho mỗi
                loại trà, hãy thử gia giảm 3 yếu tố đó để khám phá đáp án của
                chính bạn
              </div>
              <hr className="bg-main-brown mt-4" />
              <ShowComment slug="blog2" commentData={commentData} />
              <CommentBox slug="blog2" setCommentData={setCommentData} />
            </div>
            <BlogMenu />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Blog2;
