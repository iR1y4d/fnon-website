const Footer = () => {
  const getYear = new Date().getFullYear();

  return (
    <footer className="bg-[#ffffff6e] ">
      <div className="md:h-20 flex  justify-center items-center gap-10 text-primary">
        <div className="px-10 max-md:px-5 max-md:gap-2 w-full flex items-start justify-around max-md:flex-col max-md:items-center">
          <div className="max-md:text-[13px]">
            <p>092 555 5865</p>
            <p>091 724 0771</p>
          </div>
          <div className="text-center">
            {" "}
            <h1>فنون الهندسة و الاعمار</h1>
            <h1>مدينة المرج, بجانب مطاحن المرج (السيلس)</h1>
          </div>

          <h1 className="max-md:text-[13px]">fnonalhandsa@gmail.com</h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// <div className="font-light text-xl ">
//   فنون الهندسة و الاعمار{" "}
//   <span className="text-xs relative -top-1.5 text-secondry">©</span>
// </div>
// <div className="text-center text-sm text-secondry">{getYear}</div>
