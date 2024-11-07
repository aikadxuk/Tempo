const Subtitle = ({ subtitle }) => {
  return (
    <span
      className="text-red-600 bg-red-200 px-4 py-1 rounded-full uppercase clamp m-auto nunitoFont"
      style={{
        "--min": ".5rem",
        "--default": "2vw",
        "--max": ".8rem",
      }}
    >
      {subtitle}
    </span>
  );
};

export default Subtitle;
