import TitleHeader from "./../../Global/TitleHeader/TitleHeader";
import Map from "./Map/Map";
import ContactData from "./ContactData/ContactData";

const Contact = () => {
  return (
    <section className="px-[7%] flex flex-col gap-10 py-20">
      <TitleHeader
        title="Contact"
        redTitle="Us"
        subtitle="Contact"
        text="Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem."
      />
      <Map />
      <div className="flex flex-col md:flex-row gap-10">
        <ul className="flex flex-col gap-5">
          {ContactData.map((item) => (
            <li
              key={item.id}
              className="flex items-center gap-4 nunitoFont group"
            >
              <i className="text-[2rem] text-red-600 bg-red-200 rounded-full p-2 group-hover:bg-red-600 group-hover:text-white duration-150">
                {item.icon}
              </i>
              <div>
                <h4 className="font-bold text-[1.4rem]">{item.title}</h4>
                <p className="text-[.9rem]">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
        <form className="formGrid">
          <input
            type="text"
            className="name border-2 rounded-[5px] pl-4 h-[50px] focus:border-red-200 focus:outline-none focus:placeholder:text-red-400"
            placeholder="Your name"
          />
          <input
            type="email"
            className="email border-2 rounded-[5px] pl-4 h-[50px] focus:border-red-200 focus:outline-none focus:placeholder:text-red-400"
            placeholder="Your email"
          />
          <input
            type="text"
            className="subject border-2 rounded-[5px] pl-4 h-[50px] focus:border-red-200 focus:outline-none focus:placeholder:text-red-400"
            placeholder="Subject"
          />
          <textarea
            placeholder="Message"
            className="message border-2 rounded-[5px] pl-4 focus:border-red-200 focus:outline-none focus:placeholder:text-red-400 pt-2 resize-none h-[150px]"
          ></textarea>
          <button className="button bg-red-600 text-white nunitoFont m-auto rounded-full px-10 py-2 hover:bg-red-500 duration-300">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
