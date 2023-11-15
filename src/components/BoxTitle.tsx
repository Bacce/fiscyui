import React from 'react';
import Styles from './BoxTitle.module.css';

export interface BoxTitleProps {
    label: string;
}

const BoxTitle = ({label}:BoxTitleProps) => {
    return (
    <div className={Styles.container}>
        {label}
    </div>
    )
}

export default BoxTitle;