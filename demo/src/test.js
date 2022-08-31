import React from 'react'
import PropsValue from './propsvalue';
export const Test = () => {
    const name="React js";
    return ( 
        <>
        <h1>Heyyyy</h1>
        <PropsValue value={name}/>
        </>
     );
}

export const Two = () => {
    return ( 
        <h1>Vanakam da mapla from the function Two :)</h1>
     );
}
