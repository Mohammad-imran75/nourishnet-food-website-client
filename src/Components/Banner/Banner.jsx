import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
  Autoplay
} from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const Banner = () => {
  return (
   <div>
     <Swiper
        modules={[Navigation, Pagination,Autoplay, Scrollbar, A11y, EffectFade]}
        spaceBetween={50}
        effect="flip"
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={{ delay: 3000 }}

      >
    <SwiperSlide>
          <img
            style={{ width: "100%", height: "90vh" }}
            src="https://i.ibb.co/Qfq1HCF/side-lamb-ragout-with-fried-onion-carrot-tomato-sauce-greens-vegetable-salad-table.jpg"
            alt=""
          />
          <div className="lg:absolute top-[200px] left-[350px] ">
            <h1 className="text-5xl text-rose-500 font-extrabold">
            Komodo National Park <br /> <span>In Indonesia</span>
            </h1>
            <p className="text-xl lg:w-[500px] mx-auto font-semibold text-yellow-200 mt-3">
            Komodo National Park in Indonesia is home to the iconic Komodo dragons and offers breathtaking landscapes of pristine beaches, crystal-clear waters, and rugged terrain.
            </p>
          </div>
        </SwiperSlide>
        </Swiper>
   </div>
  );
};

export default Banner;
