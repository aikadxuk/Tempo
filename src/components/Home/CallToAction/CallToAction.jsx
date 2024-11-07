import BackgroundImg from "./../../../assets/cta-bg.jpg";

const CallToAction = () => {
  return (
    <div
      className="w-full h-[350px] bg-center bg-cover bg-fixed flex flex-col justify-center items-center text-white relative before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-black/50 nunitoFont gap-3 px-[7%]"
      style={{ backgroundImage: `url(${BackgroundImg})` }}
    >
      <h3
        className="z-10 font-semibold clamp"
        style={{
          "--min": "1.6rem",
          "--default": "3vw",
          "--max": "2rem",
        }}
      >
        Call To Action
      </h3>
      <p
        className="z-10 text-center max-w-[1200px] font-medium clamp"
        style={{
          "--min": ".8rem",
          "--default": "3vw",
          "--max": "1rem",
        }}
      >
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <button
        className="z-10 border-2 px-7 py-1 uppercase rounded-full hover:bg-white hover:text-black clamp"
        style={{
          "--min": ".6rem",
          "--default": "3vw",
          "--max": ".8rem",
        }}
      >
        <a href="#">Call to action</a>
      </button>
    </div>
  );
};

export default CallToAction;
