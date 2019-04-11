import React from 'react'

const Grid = props => {
  return (
    <div className={props.className || null}>
      {props.children}
    </div>
  )
}

export default Grid
