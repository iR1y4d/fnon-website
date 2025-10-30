import React, { useState, useRef } from "react";
import { useParams, useLocation } from "react-router-dom";
import { works } from "../constant";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import clsx from "clsx";
import Title from "../components/Title";

import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const MainWorkPage = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxSlides, setLightboxSlides] = useState([]);

  const { title } = useParams();
  const decodedTitle = decodeURIComponent(title || "");

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = parseInt(searchParams.get("id"), 10);

  const work = works.find((w) => w.id === id);

  if (!work)
    return (
      <div className="underline text-7xl h-screen flex justify-center items-center">
        <h1 className="relative p-5 before:content-[''] before:absolute before:h-full before:w-[60px] before:bg-secondry before:right-0 before:bottom-0 before:-z-1">
          لا يمكن الوصول للمشروع حاليًا!
        </h1>
      </div>
    );

  const baseSlides = (work.images.base || []).map((src) => ({ src }));
  const midSlides = (work.images.mid || []).map((src) => ({ src }));
  const endSlides = (work.images.end || []).map((src) => ({ src }));

  const defaultOpen =
    endSlides.length > 0
      ? ["end"]
      : midSlides.length > 0
      ? ["mid"]
      : baseSlides.length > 0
      ? ["base"]
      : [];

  const [openSections, setOpenSections] = useState(defaultOpen);

  const openLightbox = (slides, index = 0) => {
    setLightboxSlides(slides);
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  const PhaseSection = ({
    title,
    slides = [],
    sectionKey,
    isOpen,
    onToggle,
  }) => {
    const localMainSwiperRef = useRef(null);
    const [localThumbs, setLocalThumbs] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);

    return (
      <div className="mb-10">
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          className="w-full text-left cursor-pointer flex justify-between items-center bg-[#ffffff10] px-5 py-3 rounded-xl hover:bg-[#ffffff15] transition"
        >
          <h2 className="text-3xl font-bold">{title}</h2>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.28 }}
            className="ml-3"
          >
            <ChevronDown size={24} />
          </motion.div>
        </button>

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
                {/* Main Swiper */}
                <Swiper
                  modules={[Navigation, Thumbs, Autoplay]}
                  navigation
                  loop
                  autoplay={isLightboxOpen ? false : { delay: 5000 }}
                  thumbs={{ swiper: localThumbs }}
                  onSwiper={(swiper) => (localMainSwiperRef.current = swiper)}
                  onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                  className="w-full h-[52vh] sm:h-[62vh] md:h-[72vh] rounded-xl"
                >
                  {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                      <motion.img
                        src={slide.src} // ✅ native browser lazy
                        loading="lazy"
                        className="w-full h-full object-cover cursor-pointer rounded-md"
                        alt={`slide-${index}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.45 }}
                        onClick={() => openLightbox(slides, index)}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Thumbnail Swiper */}
                <Swiper
                  onSwiper={(s) => setLocalThumbs(s)}
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
                        src={slide.src} // ✅ native browser lazy
                        loading="lazy"
                        className={clsx(
                          "w-full h-full object-cover cursor-pointer rounded-md transition-all duration-300",
                          activeIndex === index
                            ? "ring-4 ring-secondry scale-105"
                            : "opacity-80 hover:opacity-100"
                        )}
                        alt={`thumb-${index}`}
                        onClick={() =>
                          localMainSwiperRef.current?.slideToLoop(index)
                        }
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

  return (
    <main className="overflow-hidden">
      {/* Cover Image */}
      <div className="lg:h-[70vh] w-full bg-center bg-no-repeat relative overflow-hidden">
        <img
          src={work.images.bigImage}
          alt="cover"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="container">
        <div>
          <div className="flex justify-start items-center gap-5 mt-10 mb-1">
            <h1 className="text-4xl font-bold">{decodedTitle}</h1>
          </div>

          <div className="flex gap-5 text-[#ffffffe3]">
            <h3>{work.workFor}</h3>
            <p>/</p>
            <h3>{work.location}</h3>
          </div>

          <div className="mt-3 text-[#ffffffe3]">
            <div className="flex justify-between">
              <p>نسبة الانجاز</p>
              <p>{work.progress}</p>
            </div>
            <div className="w-full h-2 bg-[#ffffff30] rounded-full mt-1 overflow-hidden">
              <div
                className="h-full bg-secondry rounded-full transition-all duration-150"
                style={{ width: work.progress }}
              ></div>
            </div>
          </div>

          <section className="mb-20">
            <div>
              <h2 className="text-4xl mt-10 mb-5">نبذة عن المشروع</h2>
              <p className="text-2xl font-light text-[#ffffffe3]">
                {work.caption}
              </p>
            </div>

            <div>
              <h2 className="text-4xl mt-10 mb-5">اهم النقاط</h2>
              <ul className="list-disc text-2xl font-light space-y-5">
                <li>{work.caption}</li>
                <li>{work.caption}</li>
                <li>{work.caption}</li>
              </ul>
            </div>
          </section>

          <Title
            name="التوثيق المرئي للمشروع"
            caption="نوثق فنوننا لحظة بلحظة"
          />
        </div>
      </div>

      {/* Sections */}
      {endSlides.length > 0 && (
        <PhaseSection
          title="مرحلة التشطيب (كهربائي، ميكانيكي، مدني)"
          slides={endSlides}
          sectionKey="end"
          isOpen={openSections.includes("end")}
          onToggle={() =>
            setOpenSections((prev) =>
              prev.includes("end")
                ? prev.filter((s) => s !== "end")
                : [...prev, "end"]
            )
          }
        />
      )}

      {midSlides.length > 0 && (
        <PhaseSection
          title="مرحلة الهيكل الخرساني"
          slides={midSlides}
          sectionKey="mid"
          isOpen={openSections.includes("mid")}
          onToggle={() =>
            setOpenSections((prev) =>
              prev.includes("mid")
                ? prev.filter((s) => s !== "mid")
                : [...prev, "mid"]
            )
          }
        />
      )}

      {baseSlides.length > 0 && (
        <PhaseSection
          title="مرحلة التأسيس"
          slides={baseSlides}
          sectionKey="base"
          isOpen={openSections.includes("base")}
          onToggle={() =>
            setOpenSections((prev) =>
              prev.includes("base")
                ? prev.filter((s) => s !== "base")
                : [...prev, "base"]
            )
          }
        />
      )}

      {/* Global Lightbox */}
      <Lightbox
        open={isLightboxOpen}
        close={() => setIsLightboxOpen(false)}
        index={lightboxIndex}
        slides={lightboxSlides}
        plugins={[Thumbnails, Zoom]}
        zoom={{ maxZoomPixelRatio: 3, scrollToZoom: true }}
        animation={{ fade: 400, swipe: 500 }}
      />
    </main>
  );
};

export default MainWorkPage;
