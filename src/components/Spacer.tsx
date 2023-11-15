import React from 'react';

export interface SpacerProps {
    size: number;
}

const Spacer = ({size}:SpacerProps) => {
    return (<div style={{width: size, height: size}}></div>)
}

export default Spacer;