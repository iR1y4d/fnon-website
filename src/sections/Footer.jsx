const Footer = () => {
  const getYear = new Date().getFullYear();

  return (
    <footer className="bg-[#ffffff6e]">
      <div className="h-20 flex justify-center items-center gap-10 text-primary">
        <div className="px-10 w-full flex items-start justify-around">
          <div>
            <p>092 555 5865</p>
            <p>091 724 0771</p>
          </div>
          <div className="text-center">
            {" "}
            <h1>فنون الهندسة و الاعمار</h1>
            <h1>مدينة المرج, بجانب مطاحن المرج (السيلس)</h1>
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
