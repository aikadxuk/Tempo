import TitleHeader from "../../Global/TitleHeader/TitleHeader";
import PricingCardsData from "./PricingCardsData/PricingCardsData";

const Pricing = () => {
  return (
    <section className="flex flex-col items-center gap-14 py-14 px-[7%]">
      <TitleHeader
        redTitle="Prices"
        subtitle="Pricing"
        title="Our Competing"
        text="Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[repeat(3,_minmax(200px,_300px))] gap-4">
        {PricingCardsData.map((card, listIndex) => {
          const Itemflex = listIndex === 0 || listIndex === 2;
          return (
            <article
              key={card.id}
              className={`flex flex-col gap-4 ${
                Itemflex && "justify-end"
              } border-2 border-red-300 rounded-[10px] py-10 px-10`}
            >
              <header className="flex flex-col gap-4 items-center">
                {card.recommended ? (
                  <span className="bg-red-300 text-center rounded-full text-red-600 text-[.8rem] m-auto px-3">
                    {card.recommended}
                  </span>
                ) : (
                  <span>{""}</span>
                )}
                <h4 className="font-semibold nunitoFont text-[1.3rem]">
                  {card.subtitle}
                </h4>
                <p className="text-red-600 text-[2.4rem]">
                  {card.price}{" "}
                  <span className="text-gray-400 text-[1rem]">
                    {card.monthtext}
                  </span>
                </p>
              </header>
              <ul className="flex flex-col items-center text-[.9rem] nunitoFont">
                {card.list.map((itemlist, index) => {
                  const CustomizedList =
                    (listIndex === 0 && (index === 3 || index === 4)) ||
                    (listIndex === 1 && index === 4);
                  return (
                    <li
                      key={itemlist.id}
                      className={`${
                        CustomizedList ? "line-through text-gray-400" : ""
                      }`}
                    >
                      {itemlist.text}
                    </li>
                  );
                })}
              </ul>
              <button className="border-2 border-red-500 text-red-500 hover:bg-red-500 mx-auto rounded-full px-5 py-2 hover:text-white nunitoFont ">
                {card.button}
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Pricing;
