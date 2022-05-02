import React from 'react'
import PropTypes from 'prop-types'
import styles from './button.module.css'
import classNames from 'classnames'

/**
 * Button component
 */

const Button = ( { type, size = 'medium' , children }) => {
  return (
    <button
      className={ classNames(styles.button, styles[type], styles[size] ) }
    >
      {children}
    </button>
  )
}

export default Button

Button.propTypes = {
  type: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  children: PropTypes.node.isRequired,
}
