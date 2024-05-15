import imgs from "../../assets/imgs";
import MenuHidden from "./MenuHidden";
import PageSelect from "./PageSelect";
import TopRightMenu from "./TopRightMenu";

function Header() {

  return (
    <header>
      <div className="container mx-auto">
        <div className="row w-[95%] xs:w-[90%] mx-auto">
          <div className="flex md:flex-row flex-col justify-between items-center py-3">
            <div className="lg:basis-3/12 md:basis-3/12">
              <img src={imgs.logo} alt="" className="w-[100%]" />
            </div>
            <div className="lg:basis-8/12 md:basis-9/12 flex-col justify-end">
              <TopRightMenu />
              <PageSelect />
            </div>
          </div>
          <MenuHidden />
        </div>
      </div>
    </header>
  );
}

export default Header;
