import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const PhaseSection = ({
  title,
  slides = [],
  sectionKey,
  isOpen,
  onToggle,
  openLightbox,
}) => {
  const mainSwiperRef = useRef(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // ✅ Clean up destroyed thumbs to avoid "classList undefined" error
  useEffect(() => {
    return () => {
      if (thumbsSwiper && !thumbsSwiper.destroyed) {
        thumbsSwiper.destroy();
      }
    };
  }, [thumbsSwiper]);

  // ✅ disable loop if slides are too few
  const enableLoop = slides.length > 2;

  return (
    <div className="mb-10">
      {/* Toggle Button */}
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full text-left cursor-pointer flex justify-between items-center bg-[#ffffff10] px-5 py-3 rounded-xl hover:bg-[#ffffff15] transition"
      >
        <h2 className="text-3xl max-md:text-xl font-bold text-right">
          {title}
        </h2>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.28 }}
          className="ml-3"
        >
          <ChevronDown size={24} />
        </motion.div>
      </button>

      {/* Expandable Section */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 190 }}
            className="overflow-hidden"
          >
            <div className="w-full md:w-[85%] lg:w-[70%] pb-10 relative flex flex-col items-center gap-5 mt-6 px-3 sm:px-6 md:px-10 mx-auto">
              {/* 🖼️ Main Swiper */}
              <Swiper
                modules={[Navigation, Thumbs, Autoplay]}
                navigation
                loop={enableLoop}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                thumbs={{
                  swiper:
                    thumbsSwiper && !thumbsSwiper.destroyed
                      ? thumbsSwiper
                      : null,
                }}
                onSwiper={(swiper) => (mainSwiperRef.current = swiper)}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                className="w-full h-[52vh] sm:h-[62vh] md:h-[72vh] rounded-xl"
              >
                {slides.map((slide, index) => (
                  <SwiperSlide key={index}>
                    <div className="image-wrapper loading">
                      <img
                        src={slide.src}
                        alt={`slide-${index}`}
                        loading="lazy"
                        className="w-full h-full object-cover cursor-pointer rounded-md"
                        onClick={() => openLightbox(slides, index)}
                        onLoad={(e) =>
                          e.target.parentElement.classList.remove("loading")
                        }
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* 🧩 Thumbnails Swiper */}
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                freeMode
                watchSlidesProgress
                modules={[Thumbs]}
                breakpoints={{
                  0: { slidesPerView: 2 },
                  640: { slidesPerView: 3 },
                  1024: { slidesPerView: 4 },
                }}
                className="w-full max-w-5xl h-[110px]"
              >
                {slides.map((slide, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={slide.src}
                      loading="lazy"
                      className={clsx(
                        "w-full h-full object-cover cursor-pointer rounded-md transition-all duration-300",
                        activeIndex === index
                          ? "ring-4 ring-secondry scale-105"
                          : "opacity-80 hover:opacity-100"
                      )}
                      alt={`thumb-${index}`}
                      onClick={() => mainSwiperRef.current?.slideToLoop(index)}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PhaseSection;
