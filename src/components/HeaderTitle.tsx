import React from 'react';
import Styles from './HeaderTitle.module.css';

export interface HeaderTitleProps {
    label: string;
}

const HeaderTitle = ({label}:HeaderTitleProps) => {

    return (<div className={Styles.container}>{label}</div>)
}

export default HeaderTitle;