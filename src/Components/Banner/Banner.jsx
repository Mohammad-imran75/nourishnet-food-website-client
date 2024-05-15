import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
  Autoplay,
} from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const Banner = () => {
  return (
    <div>
      <Swiper
        modules={[
          Navigation,
          Pagination,
          Autoplay,
          Scrollbar,
          A11y,
          EffectFade,
        ]}
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
              Connect. Conserve. Care.
            </h1>
            <p className="text-xl lg:w-[500px] mx-auto font-semibold text-yellow-200 mt-3">
              Join us in creating a sustainable future by reducing food waste
              and sharing surplus with those in need. Together, we can make a
              significant impact on our community iss well-being.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ width: "100%", height: "90vh" }}
            src="https://i.ibb.co/ypg23BC/adults-enjoying-mexican-food.jpg"
            alt=""
          />
          <div className="lg:absolute top-[200px] left-[350px] ">
            <h1 className="text-5xl text-rose-500 font-extrabold">
              Connect. Conserve. Care.
            </h1>
            <p className="text-xl lg:w-[500px] mx-auto font-semibold text-yellow-200 mt-3">
              Be a part of the solution to food waste by sharing surplus food
              with your community. Together, we can create a healthier and more
              sustainable world.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ width: "100%", height: "90vh" }}
            src="https://i.ibb.co/5nP0K97/photorealistic-lohri-festival-celebration-with-traditional-food.jpg"
            alt=""
          />
          <div className="lg:absolute top-[200px] left-[350px] ">
            <h1 className="text-5xl text-rose-500 font-extrabold">
              Connect. Conserve. Care.
            </h1>
            <p className="text-xl lg:w-[500px] mx-auto font-semibold text-yellow-200 mt-3">
              Unite to fight food waste and support those in need. Share surplus
              food and make a difference in your community today.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ width: "100%", height: "90vh" }}
            src="https://i.ibb.co/41Tb3KP/top-view-eid-al-fitr-celebration-with-delicious-food.jpg"
            alt=""
          />
          <div className="lg:absolute top-[200px] left-[350px] ">
            <h1 className="text-5xl text-rose-500 font-extrabold">
              Connect. Conserve. Care.
            </h1>
            <p className="text-xl lg:w-[500px] mx-auto font-semibold text-yellow-200 mt-3">
              Empower your community through food sharing and surplus reduction
              with our innovative platform. Join us in making a meaningful
              impact, one meal at a time.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ width: "100%", height: "90vh" }}
            src="https://i.ibb.co/KXNVMHv/top-view-table-full-food.jpg"
            alt=""
          />
          <div className="lg:absolute top-[200px] left-[350px] ">
            <h1 className="text-5xl text-rose-500 font-extrabold">
              Connect. Conserve. Care.
            </h1>
            <p className="text-xl lg:w-[500px] mx-auto font-semibold text-yellow-200 mt-3">
              Transform surplus into support by sharing food within your
              community. Let is work together to reduce waste and nourish those
              in need.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
