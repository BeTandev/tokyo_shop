import Slider from "./component/homepage/Slider";
import IntroduceTea from "./component/homepage/IntroduceTea";
import IntroducePage from "./component/homepage/IntroducePage";
import Maxim from "./component/homepage/Maxim";
import BestSeller from "./component/homepage/BestSeller";
import Banner from "./component/homepage/Banner";
import FeedBack from "./component/homepage/FeedBack";
import NewBlog from "./component/homepage/NewBlog";
import Footer from "./component/Footer";
import Header from "./component/Header";

function App() {

  return (
    <>
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
    </>
  );
}

export default App;
