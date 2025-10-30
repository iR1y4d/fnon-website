const Title = ({ name, caption }) => {
  return (
    <div className="py-20 flex flex-col items-center justify-center">
      <h1 className="relative z-50 w-fit text-7xl max-lg:text-6xl max-md:text-5xl max-sm:text-4xl font-bold before:content-[''] before:absolute before:h-22 max-lg:before:h-19 max-md:before:h-full before:w-[35px] before:bg-secondry before:right-0 before:bottom-0 before:-z-1 mb-2  ">
        {name}
      </h1>
      <p className="text-center text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-xl ">
        {caption}
      </p>
    </div>
  );
};

export default Title;
