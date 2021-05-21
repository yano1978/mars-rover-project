import React from 'react';

export default function Square(props) {
  const classes = `grid-square color-${props.color}`
  return <div className={classes} />
}