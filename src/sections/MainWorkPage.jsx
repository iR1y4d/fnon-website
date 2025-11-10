import React, { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { works } from "../constant";
import PhaseSection from "../components/PhaseSection";
import Title from "../components/Title";

import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

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

  return (
    <main className="overflow-hidden">
      {/* Cover Image */}
      <div className="lg:h-[70vh] w-full bg-center bg-no-repeat relative overflow-hidden">
        <div className="image-wrapper loading">
          <img
            src={work.images.bigImage}
            alt="cover"
            className="w-full h-full object-cover"
            loading="lazy"
            onLoad={(e) => e.target.parentElement.classList.remove("loading")}
          />
        </div>
      </div>

      <div className="container px-6 lg:px-16 mt-10">
        <div className="flex flex-col gap-4">
          <div>
            <h1 className="text-4xl font-bold">{decodedTitle}</h1>
          </div>

          <div className="flex gap-5 text-[#ffffffe3]">
            <h3>{work.workFor}</h3>
            <p>/</p>
            <h3>{work.location}</h3>
          </div>

          {/* Progress Bar */}
          <div className="mt-3 text-[#ffffffe3]">
            <div className="flex justify-between">
              <p>نسبة الإنجاز</p>
              <p>{work.progress}</p>
            </div>
            <div className="w-full h-2 bg-[#ffffff30] rounded-full mt-1 overflow-hidden">
              <div
                className="h-full bg-secondry rounded-full transition-all duration-150"
                style={{ width: work.progress }}
              ></div>
            </div>
          </div>

          {/* About Section */}
          <section className="mb-20">
            <div>
              <h2 className="text-4xl mt-10 mb-5">نبذة عن المشروع</h2>
              <p className="text-2xl font-light text-[#ffffffe3]">
                {work.caption}
              </p>
            </div>

            <div>
              <h2 className="text-4xl mt-10 mb-5">أهم النقاط</h2>
              <ul className="list-disc text-2xl font-light space-y-5 ml-5">
                <li>{work.caption}</li>
                <li>{work.caption}</li>
                <li>{work.caption}</li>
              </ul>
            </div>
          </section>

          {/* Title Component */}
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
          openLightbox={openLightbox}
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
          openLightbox={openLightbox}
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
          openLightbox={openLightbox}
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
