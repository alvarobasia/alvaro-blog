import React, {useState, ReactElement} from 'react';

interface ButtonProps {
  text: string;
  variant: 'primary' | 'secondary';
  onClick: () => void;
  icon: ReactElement;
}

const Variants = {
  primary: ' p-2 bg-blue-500 hover:bg-blue-700 text-xl transition-all',
  secondary:
    'p-2 border-2 border-blue-500 hover:border-blue-700 hover:bg-blue-700  hover:text-white text-blue-500 text-xl transition-all',
};

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const [isOnMouseOver, setIsOnMouseOver] = useState(false);
  const newIconColor = React.cloneElement(props.icon, {
    color: isOnMouseOver ? 'white' : 'black',
  });
  return (
    <button
      onMouseOver={() => setIsOnMouseOver(true)}
      onMouseLeave={() => setIsOnMouseOver(false)}
      onClick={props.onClick}
      className={
        Variants[props.variant] +
        ' flex flex-row items-center gap-2 rounded group w-40 font-light justify-evenly'
      }
    >
      {newIconColor}
      <p className="group-hover:font-serif group-hover:italic group-hover:text-white">
        {props.text}
      </p>
    </button>
  );
};

export default Button;
