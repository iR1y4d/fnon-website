const Footer = () => {
  const getYear = new Date().getFullYear();

  return (
    <footer className="bg-[#ffffff6e]">
      <div className="h-20 flex justify-center items-center gap-10 text-primary">
        <div>
          <div className="font-light text-xl ">
            فنون الهندسة و الاعمار{" "}
            <span className="text-xs relative -top-1.5 text-secondry">©</span>
          </div>
          <div className="text-center text-sm text-secondry">{getYear}</div>
        </div>
        <div>{/* <img src="icon_w.png" alt="" width={70} /> */}</div>
      </div>
    </footer>
  );
};

export default Footer;
