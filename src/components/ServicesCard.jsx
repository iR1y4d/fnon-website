const ServicesCard = ({ name, caption, icon }) => {
  return (
    <div className=" overflow-hidden w-120 max-lg:w-115 h-60 max-sm:h-90 max-lg:h-70 p-7 bg-white/20 rounded-sm  duration-500 relative before:content-[] before:w-full before:h-full before:absolute before:left-117 max-lg:before:left-110 max-md:before:left-103 max-sm:before:left-110  before:bottom-[0%] before:bg-secondry z-1 hover:before:left-0 before:duration-400 shadow-2xl flex gap-3 justify-center items-start">
      <img
        src="menu-internal-icon.png"
        alt=""
        width={300}
        className="absolute opacity-5 left-0 -bottom-10"
        loading="lazy"
      />
      <div className="relative z-2 flex-1">
        <h1 className="text-2xl font-bold mb-2">{name}</h1>
        <p className="text-[17px] font-light text-white/90">{caption}</p>
      </div>
      <div>
        <img
          src={name + ".png"}
          alt=""
          width={70}
          className="relative z-2 flex-1"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default ServicesCard;
