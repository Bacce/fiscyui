import React, { PropsWithChildren } from 'react';
import Styles from './Footer.module.css';

const Footer = ({children}:PropsWithChildren) => {
    return (<div className={Styles.container}>{children}</div>)
}

export default Footer;