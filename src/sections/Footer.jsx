const Footer = () => {
  const getYear = new Date().getFullYear();

  return (
    <footer className="bg-[#ffffff6e] ">
      <div className=" flex  justify-center items-center gap-10 text-primary py-5 max-md:py-1">
        <div className="w-full flex flex-col items-center justify-center gap-1 max-md:text-[13px] ">
          <div className="text-center">
            <h1>
              فنون الهندسة و الاعمار<span className="mr-2">©</span>
            </h1>
            <h1>مدينة المرج, بجانب مطاحن المرج (السيلس)</h1>
          </div>
          <div className="flex gap-5" dir="ltr">
            <p>092 555 5865</p>
            <p>091 724 0771</p>
          </div>
          <h1>fnonalhandsa@gmail.com</h1>
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
// <p>092 555 5865</p>
// <p>091 724 0771</p>
