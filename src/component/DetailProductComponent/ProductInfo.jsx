import imgs from "../../assets/imgs";

function ProductInfo() {
  return (
    <div className="mt-10 text-sm tracking-wide text-main-brown font-medium">
      <div className="">
        Được lựa chọn từ những lá chè trên cùng của các giống trà Assam, Ceylon
        và Kenya, đặc chế theo phong cách Anh truyền thống.Có thể thêm sữa tuỳ
        theo khẩu vị của bạn, mang lại sự tỉnh táo, tăng thêm sinh lực mỗi khi
        bạn thưởng thức.
      </div>
      <div className="flex justify-center">
        <img
          src={imgs.tra_gao_rang}
          alt=""
          className="max-w-[300px] max-h-[200px]"
        />
      </div>
      <div className="">
        Được lựa chọn từ những lá chè trên cùng của các giống trà Assam, Ceylon
        và Kenya, đặc chế theo phong cách Anh truyền thống.Có thể thêm sữa tuỳ
        theo khẩu vị của bạn, mang lại sự tỉnh táo, tăng thêm sinh lực mỗi khi
        bạn thưởng thức.
      </div>
      <div className="flex justify-center">
        <img
          src={imgs.tra_ahmad_dau}
          alt=""
          className="max-w-[300px] max-h-[200px]"
        />
      </div>
    </div>
  );
}

export default ProductInfo;
