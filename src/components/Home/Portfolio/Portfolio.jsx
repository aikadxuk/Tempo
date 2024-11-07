import { useEffect, useState } from "react";
import TitleHeader from "../../Global/TitleHeader/TitleHeader";
import { Buttons, Images } from "./PortfolioData/PortfolioData";
import { FaXmark } from "react-icons/fa6";

const Portfolio = () => {
  const [openImageGallery, setOpenImageGallery] = useState(null);
  const [showImageType, setShowImageType] = useState(null);

  useEffect(() => {
    openImageGallery != null
      ? document.body.classList.add("overflow-hidden")
      : document.body.classList.remove("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [openImageGallery]);

  const handleOpenImage = (index) => setOpenImageGallery(index);
  const handleCloseImage = () => setOpenImageGallery(null);
  const handleShowType = (buttonItem) => {
    if (buttonItem.type === "all") {
      setShowImageType(null);
    } else {
      setShowImageType(buttonItem.type);
    }
  };
  return (
    <section className="py-12 flex flex-col items-center gap-10 px-[7%]">
      <TitleHeader
        redTitle="Portfolio"
        subtitle="Portfolio"
        title="Check Our"
        text="Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem."
      />
      <div className="grid grid-cols-4 gap-2">
        {Buttons.map((buttonItem) => (
          <button
            key={buttonItem.id}
            className="flex items-center justify-center hover:bg-red-600 px-3 py-1 border-2 border-red-600 rounded-full text-red-600 hover:text-white duration-[.3s]"
            onClick={() => handleShowType(buttonItem)}
          >
            {buttonItem.button}
          </button>
        ))}
      </div>
      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {Images.filter(
          (image) => !showImageType || image.type === showImageType
        ).map((image, index) => (
          <article
            key={image.id}
            className="group relative cursor-pointer overflow-hidden"
            onClick={() => handleOpenImage(index)}
          >
            <img
              src={image.img}
              className="group-hover:-translate-y-9 duration-500"
            />
            <div className="absolute bottom-0 left-0 bg-red-700 w-full hidden group-hover:flex flex-col gap-1 pl-4 py-2 text-white font-semibold">
              <h4>{image.text}</h4>
              <p>{image.type}</p>
            </div>
          </article>
        ))}
      </section>
      {openImageGallery != null && (
        <div className="fixed top-0 left-0 bg-black/50 flex items-center justify-center w-full h-full z-30 px-[7%]">
          <article className="relative">
            <img src={Images[openImageGallery].img} />
            <i
              className="text-red-600 text-[2rem] absolute top-4 right-4 cursor-pointer"
              onClick={handleCloseImage}
            >
              <FaXmark />
            </i>
          </article>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
