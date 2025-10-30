import { works } from "../constant";
import WorkCard from "../components/WorkCard";
const Works = () => {
  return (
    <main className="mt-25">
      <div className=" mx-auto px-16 max-xl:px-10 max-lg:px-6 max-sm:px-4 py-20">
        <div className="flex justify-center items-center gap-5 max-md:gap-15 flex-wrap">
          {works.map((work) => (
            <WorkCard work={work} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Works;
