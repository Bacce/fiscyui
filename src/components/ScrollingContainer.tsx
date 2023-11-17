import React, { PropsWithChildren, useCallback, useRef, useState } from 'react';
import Styles from './ScrollingContainer.module.css';

const ScrollingContainer = ({children}:PropsWithChildren) => {
    const [height, setHeight] = useState<number>();
    
    const selfRef = useCallback((node:HTMLDivElement|null)=>{
        if (node !== null) {
            setHeight(undefined);
            setTimeout(()=>{
                setHeight(node.getBoundingClientRect().height);
            }, 200);
        }
    }, []);

    return (<div ref={selfRef} className={Styles.container}>
        <div className={Styles.content} style={{display: height !==undefined ? "block":"none", height: height}}>
            {children}
        </div>
    </div>)
}

export default ScrollingContainer;