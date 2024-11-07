import Subtitle from "./Subtitle/Subtitle";
import Title from "./Title/Title";
import Text from "./TitleText/TitleText";

const TitleHeader = ({ redTitle, subtitle, title, text }) => {
  return (
    <header className="flex flex-col items-center gap-2">
      <Subtitle subtitle={subtitle} />
      <Title title={title} redTitle={redTitle} />
      {text && <Text text={text} />}
    </header>
  );
};

export default TitleHeader;
