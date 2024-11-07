import TitleHeader from "../../Global/TitleHeader/TitleHeader";
import Data from "./ServicesData/ServicesData";

const Services = () => {
  return (
    <section className="py-10 px-[3%] flex flex-col m-auto gap-16">
      <TitleHeader
        redTitle="Services"
        subtitle="Services"
        title="We Do Offer Awesome"
        text="Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem."
      />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,300px))] gap-3 justify-center">
        {Data.bigCardData.map((bigCard) => (
          <article
            key={bigCard.id}
            className="flex flex-col items-center gap-4 px-5 py-10 rounded-[10px] shadow-xl z-0 relative before:absolute before:content[''] before:left-0 before:top-[100%] before:hover:top-0 before:duration-500 before:bg-red-600 before:w-full before:h-full before:-z-10 overflow-hidden group"
          >
            <i className="text-[2.5rem] text-red-600 group-hover:text-white">
              {bigCard.icon}
            </i>
            <h3 className="nunitoFonte font-semibold text-normalText group-hover:text-white">
              {bigCard.subtitle}
            </h3>
            <p className="text-normalSmallText text-center group-hover:text-white">
              {bigCard.text}
            </p>
          </article>
        ))}
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,230px))] justify-center gap-5">
        {Data.smallCardData.map((smallCard) => (
          <article
            key={smallCard.id}
            className="flex items-center gap-4 hover:text-red-600 shadow-xl py-5 pl-5 rounded-[10px]"
          >
            <i className="text-red-400 text-[2rem]">{smallCard.icon}</i>
            <p className="font-semibold">{smallCard.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
