import BackgroundImg from "./../../../assets/hero-bg.jpg";

const Background = () => {
  return (
    <main
      className="h-[100vh] w-[100%] bg-fixed px-[3%] bg-cover bg-center before:absolute before:content-[''] before:top-0 before:left-0 before:w-full before:h-full before:bg-black before:opacity-45 flex items-center justify-center"
      style={{ backgroundImage: `url(${BackgroundImg})` }}
    >
      <section className="z-10 flex flex-col items-center text-white gap-3 nunitoFont">
        <span className="text-genericText font-semibold bg-white/40 p-1 px-10 rounded-full">
          Welcome to Tempo
        </span>
        <h1 className="text-mainTitle uppercase text-center">
          We&apos;re creative agency
        </h1>
        <p className="text-genericText text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
          voluptates?
        </p>
        <button className="border-2 border-white px-7 py-2 rounded-full hover:bg-black hover:text-white duration-500 uppercase">
          Get started
        </button>
      </section>
    </main>
  );
};

export default Background;
