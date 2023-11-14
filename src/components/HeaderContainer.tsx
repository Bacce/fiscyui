import React, { PropsWithChildren } from 'react';
import Styles from './HeaderContainer.module.css';

const HeaderContainer = ({children}:PropsWithChildren) => {
    return (<div className={Styles.container}>
        {children}
    </div>)
}

export default HeaderContainer;