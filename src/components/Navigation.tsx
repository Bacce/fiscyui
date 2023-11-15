import React from 'react';
import Styles from './Navigation.module.css';
import NavigationButton from './NavigationButton';

export interface NavigationProps {
    config: [{
        title: string;
        onClick: (id:number)=>void;
    }],
    active: number,
}

const Navigation = ({config, active}:NavigationProps) => {
    return (<div className={Styles.container}>
        {config.map((btn, id) => (
            <NavigationButton isActive={id === active} label={btn.title} onClick={()=>{btn.onClick(id)}} />
        ))}
    </div>)
}

export default Navigation;