import TitleHeader from "../../Global/TitleHeader/TitleHeader";
import Data from "./Data/Details";
import { IoIosArrowDown } from "react-icons/io";

const FrequentQuestions = () => {
  return (
    <div className="flex flex-col px-4 sm:px-[14%] py-20 gap-10">
      <TitleHeader
        subtitle="F.A.Q"
        title="Frequently Asked"
        redText="Questions"
      />
      <section className="flex flex-col ">
        {Data.map((detailsItem) => (
          <details
            key={detailsItem.id}
            className="py-4 border-b-2 nunitoFont marker group flex"
          >
            <summary
              className="hover:text-red-500 cursor-pointer focus:text-red-500 clamp flex gap-2"
              style={{
                "--min": "1rem",
                "--default": "3vw",
                "--max": "1.2rem",
              }}
            >
              <IoIosArrowDown
                className="transition-transform group-open:-rotate-180"
                style={{ fontSize: "1.2rem", flexShrink: "0" }}
              />
              {detailsItem.summary}
            </summary>
            <p
              className="clamp pt-3 pl-7"
              style={{
                "--min": ".8rem",
                "--default": "3vw",
                "--max": "1rem",
              }}
            >
              {detailsItem.text}
            </p>
          </details>
        ))}
      </section>
    </div>
  );
};

export default FrequentQuestions;
