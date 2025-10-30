import { Element } from "react-scroll";
import Title from "../components/Title";
import ServicesCard from "../components/ServicesCard";
import { services } from "../constant";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const OurServices = () => {
  return (
    <Element name="خدماتنا">
      <section className="pb-20">
        <Title name="خدماتنا" caption="نقوم بجميع الخدمات لمباني تليق بكم" />

        {/* ✅ سلايدر للموبايل والأجهزة الصغيرة */}
        <div className="xl:hidden px-3">
          <Swiper
            modules={[Pagination, Autoplay]}


            spaceBetween={20}

            slidesPerView={1}
            breakpoints={{
              480: { slidesPerView: 1 },
              640: { slidesPerView: 1.5 },
              900: { slidesPerView: 2 },
            }}
            pagination={{
              clickable: true,
              el: ".swiper-pagination-custom",
            }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            grabCursor
            className="pb-10"
          >
            {services.map((service, index) => (
              <SwiperSlide
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <ServicesCard name={service.name} caption={service.caption} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* ✅ النقاط تظهر تحت البطاقات */}
          <div className="swiper-pagination-custom !relative !bottom-0 mt-4 flex justify-center"></div>
        </div>

        {/* ✅ عرض شبكي للأجهزة الكبيرة */}
        <div className="hidden xl:flex xl:justify-center xl:flex-wrap items-center gap-15 px-5">
          {services.map((service, index) => (
            <ServicesCard
              key={index}
              name={service.name}
              caption={service.caption}
            />
          ))}
        </div>
      </section>
    </Element>
  );
};

export default OurServices;
