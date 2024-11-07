const Dropdown = () => {
  return (
    <div className="group flex flex-col relative">
      <p>DropDown</p>
      <div className="hidden group-hover:flex flex-col absolute bg-white top-[25px] text-black w-[100px] animate-upAnimation rounded-md overflow-hidden md:bg-black md:text-white border-0">
        <a
          href="#"
          className="hover:bg-black hover:text-white duration-500 p-2 md:hover:bg-white md:hover:text-black"
        >
          Item 1
        </a>
        <a
          href="#"
          className="hover:bg-black hover:text-white duration-500 p-2 md:hover:bg-white md:hover:text-black"
        >
          Item 2
        </a>
        <a
          href="#"
          className="hover:bg-black hover:text-white duration-500 p-2 md:hover:bg-white md:hover:text-black"
        >
          Item 3
        </a>
        <a
          href="#"
          className="hover:bg-black hover:text-white duration-500 p-2 md:hover:bg-white md:hover:text-black"
        >
          Item 4
        </a>
      </div>
    </div>
  );
};

export default Dropdown;
