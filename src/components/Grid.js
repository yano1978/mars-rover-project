import React from 'react'
import Square from './Square';

export default function Grid(props) {

    const grid = []
    for (let row = 0; row < 20; row ++) {
        grid.push([])
        for (let col = 0; col < 10; col ++) {
            grid[row].push(<Square key={`${col}${row}`} color="0" />)
        }
    }

    return (
        <div className='grid-board'>
            {grid}
        </div>
    )
}