import { IoLocationOutline } from "react-icons/io5";
import { FaEnvelope } from "react-icons/fa";
import { LuSmartphone } from "react-icons/lu";

const Data = [
  {
    id: 1,
    title: "Location:",
    text: "A108 Adam Street, New York, NY 535022",
    icon: <IoLocationOutline />,
  },
  {
    id: 2,
    title: "Email:",
    text: "info@example.com",
    icon: <FaEnvelope />,
  },
  {
    id: 3,
    title: "Call",
    text: "+1 5589 55488 55s",
    icon: <LuSmartphone />,
  },
];

export default Data;