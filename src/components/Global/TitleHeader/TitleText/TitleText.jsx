const TitleText = ({ text }) => {
  return (
    <p
      className="nunitoFont font-semibold text-center max-w-[600px] clamp"
      style={{
        "--min": ".7rem",
        "--default": "4vw",
        "--max": ".9rem",
      }}
    >
      {text}
    </p>
  );
};

export default TitleText;
