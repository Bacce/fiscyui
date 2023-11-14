import React from "react";
import Styles from './Button.module.css';

export interface ButtonProps {
  label: string;
  onClick: ()=>void;
}

const Button = ({label, onClick}: ButtonProps) => {
  return <button className={Styles.container} onClick={onClick}>{label}</button>;
};

export default Button;