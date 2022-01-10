import React from "react";
import { FaRegCircle, FaTimes, FaPen } from "react-icons/fa";


const Icon = ({ name }) => {
  if (name === "circle") {
    return <FaRegCircle className="icon" />;
  } else if (name === "cross") {
    return <FaTimes className="icon" />;
  } else {
    return <FaPen className="icon" />;
  }
};
export default Icon;