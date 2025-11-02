import { Element } from "react-scroll";
import Title from "../components/Title";
import { social } from "../constant";

const ContactUs = () => {
  return (
    <Element name="تواصل معنا">
      {/* bg-[#2c4a64] */}
      <section className="relative overflow-hidden pb-20 bg-[#2c4a64]">
        {/* <div className="bg-[url(bg-2.jpg)] w-full h-screen bg-center bg-no-repeat absolute -left-50 -bottom-80 -z-1 bg-contain max-lg:bg-size-[1400px]" /> */}
        <div className="container">
          <Title name="تواصل معنا" caption="شركتنا جاهزة دائمًا لنشر فنونها" />
          <div className="flex justify-center items-center max-lg:flex-col">
            <div className="text-3xl leading-12 text-[#ffffffe3] font-light flex flex-col gap-y-3 mb-5 max-lg:mb-0 text-center flex-1">
              <p>
                نحن لا نقدّم مجرد خدمات… بل نصنع تجارب عمرانية تُذكر، وننجز
                أعمالًا تترك أثرًا طويلًا بعد انتهاء التنفيذ.
              </p>
              <p>رسالتك هي أول خطوة… دعها تصل، ودعنا نبدأ العمل معًا.</p>
            </div>

            <div className="flex-1 max-lg:w-90">
              <img src="ContactUs2.svg" alt="" loading="lazy" />
            </div>
          </div>
          <div className="flex justify-center items-center gap-10 mb-5 ">
            {social.map((way) => (
              <a href={way.value}>
                <img
                  src={way.name + ".svg"}
                  alt={way.name}
                  width={100}
                  className="hover:scale-105 duration-500 drop-shadow-2xl"
                  loading="lazy"
                />
              </a>
            ))}
          </div>
        </div>
      </section>
    </Element>
  );
};

export default ContactUs;
