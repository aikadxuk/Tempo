import { Link } from "react-router-dom";
import Dropdown from "./Dropdown/Dropdown";
import { useState, useEffect } from "react";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 650) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed flex justify-between items-center  w-[100vw] max-w-[100%] py-6 top-0 left-0 z-[1000] px-[7%] duration-500 ${
        scroll ? "bg-black" : ""
      }`}
    >
      <Link to="/" className="uppercase font-semibold text-[2rem] text-white">
        Tempo
      </Link>
      <nav
        className={`flex flex-col items-center gap-5 font-medium fixed top-0 h-full justify-center w-[50%] bg-white text-black ${
          openMenu ? "left-0" : "left-[-100%]"
        } duration-500 md:flex md:items-center md:static md:bg-transparent md:flex-row md:text-white md:w-auto`}
      >
        <Link to="/">Home</Link>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Portfolio</a>
        <Link to="/team">Team</Link>
        <Link to="/blog">Blog</Link>
        <Dropdown />
        <Link to="/contact">Contact</Link>
      </nav>
      <div
        className="flex w-12 h-12 rounded-md border-2 flex-col items-center justify-center gap-2 md:hidden cursor-pointer"
        onClick={handleOpenMenu}
      >
        <span className="w-10 h-[3px] bg-white"></span>
        <span className="w-10 h-[3px] bg-white"></span>
        <span className="w-10 h-[3px] bg-white"></span>
      </div>
    </header>
  );
};

export default Header;
