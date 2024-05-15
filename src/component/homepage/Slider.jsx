import imgs from "../../assets/imgs";

function Slider() {
  return (
    <div className="container mx-auto mt-3">
      <div
        data-hs-carousel='{"loadingClasses": "opacity-0"}'
        className="relative w-[100vw] lg:w-[95%] mx-auto flex justify-center items-center"
      >
        <div className="hs-carousel relative overflow-hidden w-full xs:min-h-40 sm:min-h-52 md:min-h-64 lg:min-h-80 xl:min-h-96 min-h-32 bg-slate-400 rounded-lg mx-auto">
          <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
            <div className="hs-carousel-slide w-[100vw]">
              <img src={imgs.slider1} className="block w-full" />
            </div>
            <div className="hs-carousel-slide">
              <img src={imgs.slider2} className="block w-full" />
            </div>
          </div>
        </div>
        <button
          type="button"
          className="hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 rounded-s-lg"
        >
          <span className="text-2xl" aria-hidden="true">
            <svg
              className="flex-shrink-0 size-5"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </span>
          <span className="sr-only">Previous</span>
        </button>
        <button
          type="button"
          className="hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 rounded-e-lg"
        >
          <span className="sr-only">Next</span>
          <span className="text-2xl" aria-hidden="true">
            <svg
              className="flex-shrink-0 size-5"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </span>
        </button>
        <div className="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-2">
          <span className="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border bg-white  rounded-full cursor-pointer" />
          <span className="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border bg-white  rounded-full cursor-pointer" />
        </div>
      </div>
      {/* End Slider */}
    </div>
  );
}

export default Slider;
