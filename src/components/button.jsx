import { FaArrowUp } from "react-icons/fa";

const Button = ({ label }) => {
  return (
    <button className="flex text-black rounded-lg p-2 bg-white hover:bg-white">
      {label}
      <FaArrowUp className="ml-2 mt-1 text-black text-sm font-sans rotate-45" />
    </button>
  );
};

export default Button;
