import { Link } from "react-router-dom";

const WorkCard = ({
  work: { id, location, workFor, title, caption, time, progress, images },
}) => {
  return (
    <Link
      to={`/works/${encodeURIComponent(title)}?id=${id}`} // ✅ add id as query parameter
      className="group"
    >
      <div className="bg-[#ffffff15] relative group cursor-pointer max-w-120 xl:w-135 max-xl:max-w-110 max-lg:max-w-170 max-md:w-150 max-sm:max-w-90 shadow-2xl">
        <div className="absolute z-5 right-2 top-2 text-white/70 text-[23px] font-light group-hover:text-secondry duration-400">
          {location}
        </div>
        <div className="overflow-hidden xl:h-82 lg:h-62 max-lg:h-113 max-md:h-80 max-sm:h-65">
          <img
            src={images.thumbnail}
            alt=""
            className="group-hover:scale-103 duration-500 w-full h-full"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col gap-3 justify-start p-5 overflow-hidden relative after:content-[''] after:w-full after:h-full after:absolute after:left-0 after:-bottom-full group-hover:after:-bottom-0 after:bg-secondry after:z-1 after:duration-150">
          <div className="relative z-5">
            <div className="flex gap-2 justify-start items-center">
              <div className="text-xl">{title}</div>
              <div className="text-[#ffffffe3] text-[10px]">●</div>
              <div className="text-[13px] font-light">{time}</div>
            </div>
            <div className="text-[#ffffffe3] text-[15px] truncate mt-3">
              {caption}
            </div>
            {/* Progress Bar */}
            <div className="mt-3 text-[#ffffffe3]">
              <div className="flex justify-between">
                <p>نسبة الانجاز</p>
                <p>{progress}</p>
              </div>
              <div className="w-full h-2 bg-[#ffffff30] rounded-full mt-1 overflow-hidden">
                <div
                  className="h-full bg-secondry group-hover:bg-[#ffffffe3] rounded-full transition-all duration-150"
                  style={{ width: progress }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkCard;
