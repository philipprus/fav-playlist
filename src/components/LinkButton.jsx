import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const LinkButton = (props) => {
  const {
    to,
    size = "small",
    color = "primary",
  } = props
  return (
    <Link to={"/"+to}>
        <Button size={size} color={color}>{props.children}</Button>
    </Link>
  )
}

LinkButton.propTypes = {
  to: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired
}

export default LinkButton;