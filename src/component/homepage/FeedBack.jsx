function FeedBack() {
    return (
        <div className="container mx-auto mt-10">
        <div className="row w-[95%] xs:w-[90%] mx-auto flex flex-col lg:flex-row gap-5 md:gap-10">
          <div className="basis-1/2">
            <h3 className="text-2xl text-main-brown">Khách Hàng Nói Về Chúng Tôi</h3>
            <hr className="mt-3 bg-main-brown"/>
            <div className="mt-3 text-main-brown">
              Web này tiện lợi ghê !! có đầy nhiều loại trà vừa thơm lại vừa tốt
              cho sức khỏe. Dụng cụ trà lại đầy đủ. Mua hàng lại được hướng dẫn
              đầy đủ về cách pha trà cũng như cách thưởng thức...... Cảm ơn
              GreenShop nhé!
            </div>
            <div className="mt-2 text-main-brown font-semibold">— Cao Trọng Tấn</div>
            <div className="mt-4 text-main-brown">
              Trà ở đây thơm qua. Hôm qua mình đi uống thử 1 lần mà nghiện luôn.
              Chịu khó dẫn bạn qua đó thưởng thức mới được.
            </div>
            <div className="mt-2 text-main-brown font-semibold">— Nguyễn Thanh Mai</div>
            <div className="mt-4 text-main-brown">
              Mấy bạn pha trà khéo ghê. Cách pha cũng hay nữa. Phải chịu khó qua
              đó để học cách pha mới được.
            </div>
            <div className="mt-2 text-main-brown font-semibold">— Khánh Linh</div>
          </div>
          <div className="basis-1/2">
            <iframe
              width={0}
              height={200}
              src="https://www.youtube.com/embed/RrfH82zHwXs?list=RDRrfH82zHwXs"
              title="DIỄM XƯA - TRỊNH CÔNG SƠN - Cover: Violinist Anh Tú"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-[200px] xs:h-[250px] sm:h-[300px] md:h-[400px] lg:h-full"
            />
          </div>
        </div>
      </div>
    );
}

export default FeedBack;