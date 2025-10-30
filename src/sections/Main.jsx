import { useLocation } from "react-router-dom";
import { scroller, Element } from "react-scroll";
import { useEffect } from "react";
import { clients } from "../constant";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // ✅ Only Autoplay needed
import "swiper/css";

const Main = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        scroller.scrollTo(location.state.scrollTo, {
          duration: 800,
          delay: 0,
          smooth: "easeInOutQuart",
          offset: location.state.offset || -100,
        });
      }, 500);
    }
  }, [location]);

  return (
    <Element name="الرئيسية">
      <section className="relative overflow-hidden">
        <div className="bg-[url('https://ir1y4d.github.io/fnon-website/bg-6.png')] w-full h-screen bg-no-repeat bg-size-[1400px] absolute opacity-80" />

        {/* Main Text Section */}
        <div className="relative flex flex-col justify-center max-lg:justify-end h-screen px-10 max-sm:px-5">
          <h1 className="text-7xl max-lg:text-6xl max-sm:text-[38px] font-extrabold mb-7">
            فنون الهندسة والإعمار
          </h1>

          <div
            className="relative text-5xl md:p-3 flex items-center justify-around max-w-200 max-lg:text-4xl max-md:text-3xl max-sm:text-[19px] 
              before:content-[''] before:w-full before:h-full before:absolute before:bg-secondry before:left-0 before:bottom-0 before:-skew-x-40 before:-z-1 z-5 max-lg:mb-70 max-md:mb-50 max-sm:mb-35"
          >
            <h1>خبرة تَبني</h1>
            <h1>جودة تُخلّد</h1>
            <h1>رؤية تُلهم</h1>
          </div>
        </div>

        {/* Clients Logo Swiper */}
        <div className="absolute bottom-10 left-[50%] translate-x-[-50%] w-[70%] max-lg:w-full px-10 bg-black/5 backdrop-blur-[2px]">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={5}
            spaceBetween={0}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            speed={10000} // adjust to control how fast the logos move
          >
            {clients.icons.map((icon, i) => (
              <SwiperSlide key={i}>
                <img
                  src={icon}
                  alt=""
                  className="w-35 h-auto object-contain opacity-90 hover:opacity-100 transition max-lg:w-35"
                  loading="lazy"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </Element>
  );
};

export default Main;
