import React, { PropsWithChildren } from "react";
import Styles from './Box.module.css';

const Box = ({children}:PropsWithChildren) => {
    return (<div className={Styles.box}>
        {children}
    </div>)
}

export const BoxInner = ({children}:PropsWithChildren) => {
    return (<div className={Styles.boxInner}>
        {children}
    </div>)
}

export default Box;