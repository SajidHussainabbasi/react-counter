import React from 'react';
import './Button.css';

const Button = ({ text, className, clickHandler }) => {
  return (
    <button className={className} onClick={clickHandler}>
      {text}
    </button>
  );
};

export default Button;