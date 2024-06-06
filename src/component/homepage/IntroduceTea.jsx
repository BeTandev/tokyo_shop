import imgs from "../../assets/imgs";

function IntroduceTea() {
  return (
    <div className="container mt-10 mx-auto">
      <div className="row w-[95%] xs:w-[90%] mx-auto flex flex-col md:flex-row gap-5 items-center">
        <div className="basis-full md:basis-3/5 w-full">
          <h2 className="text-3xl roboto-regular text-main-brown">Nghi Thức Trà Đạo</h2>
          <div className="w-full md:w-[90%] mt-5 text-main-brown">
            Nghi thức trà đạo (Cha no Yu ) chính là nghi thức pha trà, thực hiện
            từ bước chuẩn bị đến bước pha trà với bộ trà cụ trước mặt các vị
            khách trong gian phòng gọi là trà thất (Chashitsu). Những bước pha
            trà được gọi là temae.Nghe có vẻ đơn giản nhưng thực sự ẩn chứa
            nhiều ý nghĩa sâu xa.
          </div>
        </div>
        <div className="basis-full md:basis-2/5 w-full">
          <img src={`.${imgs.tra_dao}`} alt="" className="w-full"/>
        </div>
      </div>
    </div>
  );
}

export default IntroduceTea;
