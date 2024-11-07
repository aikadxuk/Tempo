import { FaDribbble, FaDatabase } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";
import { BiSolidTachometer, BiWorld } from "react-icons/bi";
import {
  RiStoreLine,
  RiPaintBrushLine,
  RiGradienterLine,
  RiFileList3Line,
  RiPriceTag2Line,
  RiAnchorLine,
  RiDiscLine,
  RiBaseStationLine,
} from "react-icons/ri";
import { LuCalendarDays } from "react-icons/lu";
import { MdOutlineInsertChart } from "react-icons/md";
import { HiMiniFingerPrint } from "react-icons/hi2";

const bigCardData = [
  {
    id: 1,
    icon: <FaDribbble />,
    subtitle: "Lorem Ipsum",
    text: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi",
  },
  {
    id: 2,
    icon: <FiFileText />,
    subtitle: "Sed ut perspiciatis",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
  },
  {
    id: 3,
    icon: <BiSolidTachometer />,
    subtitle: "Magni Dolores",
    text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia",
  },
  {
    id: 4,
    icon: <BiWorld />,
    subtitle: "Nemo Enim",
    text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
  },
];

const smallCardData = [
  {
    id: 1,
    icon: <RiStoreLine />,
    text: "Lorem Ipsum",
  },
  {
    id: 2,
    icon: <MdOutlineInsertChart />,
    text: "Dolor Sitema",
  },
  {
    id: 3,
    icon: <LuCalendarDays />,
    text: "Sed perspiciatis",
  },
  {
    id: 4,
    icon: <RiPaintBrushLine />,
    text: "Magni Dolores",
  },
  {
    id: 5,
    icon: <FaDatabase />,
    text: "Nemo Enim",
  },
  {
    id: 6,
    icon: <RiGradienterLine />,
    text: "Eiusmod Tempor",
  },
  {
    id: 7,
    icon: <RiFileList3Line />,
    text: "Midela Teren",
  },
  {
    id: 8,
    icon: <RiPriceTag2Line />,
    text: "Pira Neve",
  },
  {
    id: 9,
    icon: <RiAnchorLine />,
    text: "Dirada Pack",
  },
  {
    id: 10,
    icon: <RiDiscLine />,
    text: "Moton Ideal",
  },
  {
    id: 11,
    icon: <RiBaseStationLine />,
    text: "Verdo Park",
  },
  {
    id: 12,
    icon: <HiMiniFingerPrint />,
    text: "Flavor Nivelanda",
  },
];

export default { bigCardData, smallCardData };
