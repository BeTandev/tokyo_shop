import Footer from "../component/Footer";
import Header from "../component/Header";
import Banner from "../component/homepage/Banner";
import BestSeller from "../component/homepage/BestSeller";
import FeedBack from "../component/homepage/FeedBack";
import IntroducePage from "../component/homepage/IntroducePage";
import IntroduceTea from "../component/homepage/IntroduceTea";
import Maxim from "../component/homepage/Maxim";
import NewBlog from "../component/homepage/NewBlog";
import Slider from "../component/homepage/Slider";

function HomePage() {
  return (
    <div>
      <Header />
      <Slider />
      <IntroduceTea />
      <IntroducePage />
      <Maxim />
      <BestSeller />
      <Banner />
      <FeedBack />
      <NewBlog />
      <Footer />
    </div>
  );
}

export default HomePage;
