import imgs from "../../assets/imgs";
import IntroducePageItem from "./IntroducePageItem";

function IntroducePage() {
  return (
    <div className="container mt-10 mx-auto">
      <div className="row w-[95%] xs:w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
        <IntroducePageItem image={imgs.IntroducePage1} title={"Trà"} detail="Trà lá: chỉ lấy nước tinh chất từ lá trà. Lá trà được phơi khô, pha chế trong bình..." link="/tat-ca-san-pham" />
        <IntroducePageItem image={imgs.IntroducePage2} title={"Trà cụ"} detail="Trà cụ là dụng cụ dùng để pha trà với nhiều mẫu mã , kiểu dáng cách điệu khác..." link="/tat-ca-san-pham" />
        <IntroducePageItem image={imgs.IntroducePage3} title={"Giảm giá"} detail="Với nhiều ưu đãi hấp dẫn Green Tea luôn mang đến cho người yêu trà có cơ hội thưởng thức..." link="/tat-ca-san-pham" />
        <IntroducePageItem image={imgs.IntroducePage4} title={"Giới thiệu"} detail="Đã bao lâu bạn không uống trà, thưởng thức trà theo đúng cách ??? GreenTea sẽ đưa bạn vào không..." link="/tat-ca-san-pham" />
      </div>
    </div>
  );
}

export default IntroducePage;
