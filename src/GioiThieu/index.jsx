import imgs from "../assets/imgs";
import Footer from "../component/Footer";
import Header from "../component/Header";
import TitlePage from "../component/TitlePage";

function GioiThieu() {
    return (
        <div>
            <Header />
            <div className="container mx-auto">
                <div className="row w-[95%] xs:w-[90%] mx-auto">
                    <TitlePage title="Giới thiệu"/>
                    <h2 className="text-3xl text-main-brown mt-8">Giới thiệu</h2>
                    <hr className="mt-3 bg-main-brown"/>
                    <div className="flex flex-col md:flex-row mt-5 gap-5 items-start lg:items-center">
                        <div className="min-w-[300px] max-w-[300px] min-h-[450px] max-h-[450px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(.${imgs.aboutme})` }}></div>
                        <div className="text-sm text-main-brown">
                            <div className="">Đã từ lâu trà không chỉ là một thứ đồ uống thông thường mà còn được coi như một nét văn hóa . Trà dùng để uống và thưởng thức các hương vị đặc biệt, trà dùng để làm những món quà biếu tặng đầy ý nghĩa ...</div>
                            <div className="mt-3 tracking-wide">Tokyoshop là một trong những cửa hàng đầu tiên chuyên bán và cung cấp các sản phẩm trà nổi tiếng của tỉnh Phúc Kiến - Trung Quốc và các sản phẩm trà Đài Loan. Chúng tôi đã được cấp chứng chỉ xác nhận đại lý của các thương hiệu trà nổi tiếng.</div>
                            <div className="mt-7 tracking-wide">Ngoài các sản phẩm đặc biệt về trà cửa hàng chúng tôi còn cung cấp các mặt hàng khác như dụng cụ pha trà, hương liệu trà các sản phẩm mà chúng tôi cung cấp đa phần đều là các mặt hàng cao cấp và đảm bảo chất lượng .</div>
                            <div className="mt-3 tracking-wide"> Với mong muốn đem đến cho mọi người một nét văn hóa đặc trưng của người Á Đông chúng tôi đã tiến hành đưa sản phẩm và thương hiệu lên website tokyoshop nhằm giúp mọi người hiểu biết hơn về các sản phẩm của chúng tôi . Đồng thời chúng tôi sẽ cung cấp thêm những kiến thức về trà , về các sản phẩm trà và các kinh nghiệm , kỹ năng trong lĩnh vực này .</div>
                            <div className="mt-3 tracking-wide">Chúng tôi rất hoan nghênh các bạn ghé thăm cửa hàng để xem các sản phẩm. Các bạn sẽ được đón tiếp và tư vấn một cách tận tình nhất. Thay mặt cửa hàng một lần nữa chúng tôi xin cảm ơn sự quan tâm của quý khách !</div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default GioiThieu;