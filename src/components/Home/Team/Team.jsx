import TeamData from "./TeamData/TeamData";
import TitleHeader from "../../Global/TitleHeader/TitleHeader";

const Team = () => {
  return (
    <section className="flex flex-col gap-10 py-10 px-[3%] items-center">
      <TitleHeader
        redTitle="Team"
        subtitle="Team"
        title="Our Hardworking"
        text="Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem."
      />
      <div className="grid gap-3 grid-cols-[repeat(1,_minmax(200px,_300px)] sm:grid-cols-[repeat(2,_minmax(200px,_300px))] md:grid-cols-[repeat(4,_minmax(200px,_300px))]">
        {TeamData.map((card) => (
          <article
            key={card.id}
            className="rounded-[10px] overflow-hidden shadow-lg flex flex-col items-center gap-2 nunitoFont pb-2"
          >
            <img src={card.img} className="w-full" />
            <h4 className="font-bold">{card.name}</h4>
            <p className="text-[.8rem] text-gray-400">{card.jobApplication}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Team;
