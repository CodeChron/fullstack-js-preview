import React from 'react'

export const Btn = (props) =>
  <button onClick={props.handleClick}>
    {props.label}
  </button>

Btn.propTypes = {
	handleClick: React.PropTypes.func.isRequired,
	label: React.PropTypes.string.isRequired
}