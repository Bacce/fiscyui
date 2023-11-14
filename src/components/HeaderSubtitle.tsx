import React from 'react';
import Styles from './HeaderSubtitle.module.css';

export interface HeaderSubtitleProps {
    label: string;
}

const HeaderSubtitle = ({label}:HeaderSubtitleProps) => {
    return (<div className={Styles.container}>
        <div className={Styles.labelContainer}>{label}</div>
    </div>)
}

export default HeaderSubtitle;