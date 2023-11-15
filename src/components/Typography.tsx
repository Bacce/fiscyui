import React from 'react';
import Styles from './Typography.module.css';

export enum typoTypeEnum {
    title = "title",
    subtitle = "subtitle",
    default = "default",
}

export interface TypographyProps {
    type: typoTypeEnum,
    children: string,
}

const Typography = ({type=typoTypeEnum.default, children}:TypographyProps) => {
    return (<span className={Styles[type]}>{children}</span>)
}

export default Typography;