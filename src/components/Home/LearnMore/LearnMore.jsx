import Icon from "./Icon/Icon";
import TitleHeader from "../../Global/TitleHeader/TitleHeader";

const LearnMore = () => {
  return (
    <aside className="px-[7%] py-20 flex flex-col gap-10 md:px-[7%]">
      <TitleHeader
        redTitle="About Us"
        subtitle="About"
        title="Learn More"
        text="Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem."
      />
      <section className="grid grid-cols-[repeat(auto-fit,minmax(300px,500px))] justify-center gap-10 text-normalSmallText">
        <article className="flex flex-col gap-5">
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <ul className="flex flex-col gap-2 pl-8">
            <li className="relative">
              <Icon />
              Ullamco laboris nisi ut aliquip ex ea commodo consequat
            </li>
            <li className="relative">
              <Icon />
              Duis aute irure dolor in reprehenderit in voluptate velit
            </li>
            <li className="relative">
              <Icon />
              Ullamco laboris nisi ut aliquip ex ea commodo consequat
            </li>
          </ul>
        </article>
        <article className="flex flex-col gap-5">
          <p>
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </p>
          <button className="border-2 border-red-500 px-5 py-2 rounded-full text-red-500 text-[.8rem] mr-auto">
            <a href="#">Learn More</a>
          </button>
        </article>
      </section>
    </aside>
  );
};

export default LearnMore;
