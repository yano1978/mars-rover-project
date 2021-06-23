import React from 'react';

export default function Rover(props) {
    // console.log(props);
    const [style] = React.useState(props);

    // const [style, setStyle] = React.useState(props);
    // const setCoordinates = (x, y, e) => {
    //     console.log(e.target);
    //     return `left:${x}px;top:${y}px;`;
    // }
    
    return (
        <>
        <div
            {...style}
            // onClick={e => {
            //     const newStyle = setCoordinates(e.target.getBoundingClientRect().x, e.target.getBoundingClientRect().y, e);
            //     setStyle(newStyle);
            // }}
            className="icon rover">
        </div>
        </>
    )
}
