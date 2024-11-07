const Title = ({ title, redTitle }) => {
  return (
    <h2
      className="font-medium nunitoFont text-center clamp w-full"
      style={{
        "--min": "1.5rem",
        "--default": "3vw",
        "--max": "2rem",
      }}
    >
      {title}
      <b className="text-red-600 pl-2 md:pl-3">{redTitle}</b>
    </h2>
  );
};

export default Title;
