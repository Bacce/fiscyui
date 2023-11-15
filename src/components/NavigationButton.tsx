import React from 'react';
import Styles from './NavigationButton.module.css';

interface NavigationButtonProps {
    label: string;
    onClick: ()=>void;
    isActive?: boolean;
}

const NavigationButton = ({label, onClick, isActive=false}:NavigationButtonProps) => {
    return (<button className={`${Styles.button} ${isActive ? Styles.active:""}`} onClick={onClick}>{label}</button>)
}

export default NavigationButton;