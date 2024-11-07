import { usefulLinks, ourServices } from "./FooterData/FooterData";
import { MdKeyboardArrowRight } from "react-icons/md";

const Footer = () => {
  return (
    <footer
      className="px-[7%] gridLayout shadow-md shadow-black py-10"
      style={{
        "--minpx": "200px",
        "--maxpx": "1fr",
      }}
    >
      <section className="text-gray-400 flex flex-col gap-3">
        <h3 className="nunitoFont text-[2rem] text-black">Tempo</h3>
        <p className="text-[.9rem] max-w-[150px]">
          A108 Adam Street New York, NY 535022 United States
        </p>
        <div className="text-[.9rem]">
          <p>
            <b>Phone:</b> +1 5589 55488 55
          </p>
          <p>
            <b>Email:</b> info@example.com
          </p>
        </div>
      </section>
      <section className="flex flex-col gap-2 nunitoFont">
        {usefulLinks.map((link) => (
          <>
            {link.title && <h4 className="font-bold">{link.title}</h4>}
            {link.link && (
              <a href="" className="text-[.9rem] flex items-center w-max">
                <i className="text-[1.2rem] text-red-600">
                  <MdKeyboardArrowRight />
                </i>
                {link.link}
              </a>
            )}
          </>
        ))}
      </section>
      <section className="flex flex-col gap-2 nunitoFont">
        {ourServices.map((link) => (
          <>
            {link.title && <h4 className="font-bold">{link.title}</h4>}
            {link.link && (
              <a href="" className="text-[.9rem] flex items-center w-max">
                <i className="text-[1.2rem] text-red-600">
                  <MdKeyboardArrowRight />
                </i>
                {link.link}
              </a>
            )}
          </>
        ))}
      </section>
      <form className="nunitoFont flex flex-col gap-2">
        <h4 className="font-bold">Join Our Newsletter</h4>
        <p
          className="text-[.9rem] text-gray-400 clamp"
          style={{
            "--min": ".7rem",
            "--default": "3vw",
            "--max": ".9rem",
          }}
        >
          Tamen quem nulla quae legam multos aute sint culpa legam noster magna
        </p>
        <div className="flex items-center relative pt-5 w-[260px] sm:w-[220px] md:w-full">
          <input
            type="email"
            placeholder="Your email"
            className="border-[1px] w-full rounded-full px-3 text-[.8rem] focus:border-red-500 focus:outline-none focus:placeholder:text-red-500 md:text-[.9rem]"
          />
          <button className="absolute bg-red-600 text-white hover:bg-red-500 rounded-full right-0 px-3 text-[.8rem] md:text-[.9rem]">
            Subscribe
          </button>
        </div>
      </form>
    </footer>
  );
};

export default Footer;
