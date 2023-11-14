import React, { ReactNode } from 'react';
import Styles from './PageContainer.module.css';

export interface PageContainerProps {
    children?: ReactNode | undefined;
    gradient?: boolean;
}

const PageContainer = ({children, gradient=true}:PageContainerProps) => {
    return (<div className={`${Styles.container} ${gradient ? Styles.gradient:""}`}>{children}</div>)
}

export default PageContainer;