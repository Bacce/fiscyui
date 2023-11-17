import React, { PropsWithChildren } from "react";
import Styles from './Table.module.css';

const Table = ({children}:PropsWithChildren) => {
    return (<table className={Styles.table}>{children}</table>)
}

export default Table;