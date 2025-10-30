import { useState, useEffect } from "react";
import { Link as LinkScroll } from "react-scroll";
import { Link, useLocation } from "react-router-dom";

import clsx from "clsx";
import { navLinks } from "../constant";

const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 32);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isOpen);
  }, [isOpen]);

  const NavLink = ({ title, offset = -100 }) => {
    const linkClass =
      "relative z-1 hover:scale-105 p-1 transition-scale duration-300 text-[28px] max-sm:text-[25px] font-bold text-white cursor-pointer max-lg:text-4xl max-sm:mb-2 max-lg:mb-8 before:content-[''] before:absolute before:h-full before:w-[30px] before:bg-secondry before:right-0 before:bottom-0 before:-z-1 hover:before:w-full before:duration-500 max-lg:p-5 max-lg:after:content-[''] max-lg:after:absolute max-lg:after:h-0.5 max-lg:after:w-100 max-lg:after:bg-[#647c8c] max-lg:after:right-0 max-lg:after:-bottom-3 max-lg:after:opacity-10 after:z-0";

    return isHome ? (
      <LinkScroll
        to={title}
        offset={offset}
        spy
        smooth
        activeClass="before:w-full"
        className={linkClass}
        onClick={() => setIsOpen(false)}
      >
        {title}
      </LinkScroll>
    ) : (
      <Link
        to="/"
        state={{ scrollTo: title, offset }}
        className={linkClass}
        onClick={() => setIsOpen(false)}
      >
        {title}
      </Link>
    );
  };

  const IconLink = () => {
    const iconSrc = isOpen ? "/icon_w.png" : "/icon.png";
    const iconElement = (
      <img
        src={iconSrc}
        alt="icon"
        className="cursor-pointer relative z-1 w-25 max-lg:w-22"
      />
    );

    return isHome ? (
      <LinkScroll to="الرئيسية">{iconElement}</LinkScroll>
    ) : (
      <Link to="/" onClick={() => setIsOpen(false)}>
        {iconElement}
      </Link>
    );
  };

  return (
    <header
      className={clsx(
        "fixed left-0 top-0 w-full py-3 z-99 duration-500 bg-[#ffffff6e] backdrop-blur-[8px] ",
        hasScrolled && "p-0!"
      )}
    >
      <div className="container h-25 flex gap-20 items-center justify-between relative duration-500">
        <div className="max-lg:container flex items-center justify-between">
          <IconLink />
          <img
            src={isOpen ? "/close.svg" : "/menu.svg"}
            alt="menu"
            width={40}
            className="lg:hidden cursor-pointer relative z-100"
            onClick={() => setIsOpen((prevState) => !prevState)}
          />
        </div>

        <div
          className={clsx(
            "max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:h-screen max-lg:opacity-0 transition-all duration-300",
            isOpen
              ? "bg-primary max-lg:opacity-100"
              : "max-lg:pointer-events-none"
          )}
        >
          <div
            className={clsx(
              "flex gap-10 items-center justify-center max-lg:h-screen max-lg:flex-col max-lg:justify-center max-lg:items-start max-lg:mr-10 max-lg:hidden max-lg:mt-[15%]",
              isOpen && "flex!"
            )}
          >
            {navLinks.map((link) => (
              <NavLink key={link.name} title={link.name} />
            ))}
            {isOpen && (
              <img
                src="/menu-internal-icon.png"
                alt="icon"
                className="lg:hidden max-lg:-bottom-16 max-md:left-0 max-md:-bottom-10 max-sm:left-0 absolute -bottom-100 -left-5 opacity-50"
                loading="lazy"
              />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
