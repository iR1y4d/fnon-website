import { Element } from "react-scroll";
import { works } from "../constant";
import { useState } from "react";
import ImgCard from "../components/ImgCard";
import Title from "../components/Title";
import { Link, Links } from "react-router-dom";

const OurWorks = () => {
  // const [bigImage, setBigImage] = useState(bestImages[0]);

  return (
    <Element name="أعمالنا">
      <section className=" pb-20 bg-[#2c4a64]">
        <Title
          name="أعمالنا"
          caption="لقد قمنا بالكثير من الأعمال التي لا تزال بصمةً لجودتنا"
        />

        {/* <div className="mx-auto w-[70%] max-md:w-full max-md:px-0 max-lg:w-full pb-10 flex flex-col justify-center items-center px-10">
          <ul className="flex p-1 gap-2 mb-2">
            {bestImages.map((img) => (
              <ImgCard
                key={img.id}
                id={img.id}
                item={img}
                changeBigImage={setBigImage}
                mainImage={bigImage}
              />
            ))}
          </ul>

          <Link
            to={`/works/${encodeURIComponent(bigImage.title)}?id=${
              bigImage.id
            }`}
            className="group"
          >
            <div className="relative overflow-hidden group">
              <img
                src={bigImage.image}
                alt="buildings"
                className="rounded-xl w-full"
              />

              <div
                key={bigImage.id}
                className="absolute bottom-0 left-0 right-0 bg-black/60 text-white max-lg:p-2 p-5 rounded-b-xl animate-up group-hover:bg-secondry/80 duration-500"
              >
                <div className="animate-shows  ">
                  <h2 className=" max-md:text-xl max-sm:text-md text-3xl font-bold mb-2">
                    {bigImage.title}
                  </h2>
                  <p className="max-md:text-[15px] max-sm:text-sm text-xl max-md:mb-2 max-sm:mb-2 mb-5">
                    {bigImage.caption}
                  </p>
                  <div className="flex items-center justify-start gap-3 max-md:text-md max-sm:text-xs opacity-80 text-lg font-light">
                    <span>{bigImage.time} شهر</span>•{" "}
                    <span>{bigImage.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div> */}
        <div className=" max-lg:px-5 max-w-[1500px] px-16 max-xl:px-10  max-sm:px-4 mx-auto">
          <div className="flex justify-center items-center max-lg:flex-col-reverse gap-10 max-lg:gap-5">
            <div className="flex-1 text-4xl font-light leading-13 text-center max-xl:text-3xl max-md:text-2xl max-lg:leading-11 ">
              <span className="text-secondry">"</span>نحن لا نقدم مجرد خدمات، بل
              نروي قصة نجاح متكاملة من خلال مجموعة ضخمة من المشاريع التي تمتد
              عبر مجالات متعددة، وكل مشروع منها يحمل بصمتنا الخاصة في الجودة
              والابتكار<span className="text-secondry">"</span>
            </div>
            <div className="flex-1 animate-up-down w-full h-full flex justify-center">
              <img
                src="build.svg"
                alt=""
                className="w-180 max-lg:w-150 max-sm:w-115 "
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* <div className="relative w-fit mx-auto p-2 rounded-sm cursor-pointer before:content-[''] before:absolute before:h-full before:w-[30px] before:bg-secondry before:right-0 before:bottom-0 before:-z-1 hover:before:w-full before:duration-500 hover:scale-105 duration-500 text-center mt-10 font-extrabold ">
          <Link to="/works">
            <h1 className="text-6xl max-lg:text-5xl max-md:text-4xl max-sm:text-4xl">
              لمشاهدةأعمال الشركة
            </h1>
          </Link>
        </div> */}
        {/* before:bg-[#647c8c] */}
        <div className="pb-5">
          <div className="relative z-10 w-fit mx-auto py-4 px-2 rounded-sm cursor-pointer hover:scale-105 duration-500 text-center mt-10 font-extrabold hover:text-white before:content-[''] before:absolute before:w-full before:h-[15px] before:bg-secondry before:left-0 before:bottom-0 before:-z-1 hover:before:h-full before:duration-250 mb-5 ">
            <Link to="/works">
              <h1 className="text-6xl max-lg:text-5xl max-md:text-4xl max-sm:text-3xl">
                لمشاهدةأعمال الشركة
              </h1>
            </Link>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default OurWorks;

//**
// bg-[url(bg-3.jpg)] w-full h-screen bg-center bg-no-repeat relative z-0 bg-size-[1500px] max-lg:bg-size-[1400px]  */
