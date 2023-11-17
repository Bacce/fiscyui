import React, { useState } from 'react';
import Styles from './RadioButton.module.css';

export interface RadioButtonProps {
    label: string;
    onClick: ()=>void;
}

const RadioButton = ({label, onClick}:RadioButtonProps) => {
    const [checked, setChecked] = useState(false);

    const handleOnClick=()=>{
        setChecked((prev)=>{
            return !prev;
        });
        onClick();
    }

    return (<div className={`${Styles.container} ${checked ? Styles.checked:""}`} onClick={handleOnClick}>
        <div>{label}</div>
    </div>)
}

export default RadioButton;