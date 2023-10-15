import { FC } from "react";

interface Props {
  text: string;
  onClick: () => void;
}

const Button: FC<Props> = ({ text, onClick }) => {
  return (
    <button
      className="bg-primary text-white font-bold py-3 px-16 rounded focus:outline-none focus:shadow-outline"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
