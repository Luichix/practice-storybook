import React from 'react'
import PropTypes from 'prop-types'
import styles from './Title.module.css'
import { options } from './constants'
import classNames from 'classnames'

export const Header = ({
  children,
  color = 'base',
  size = 'md',
  weight = 'bold',
  isCentered,
  isInline,
}) => {
  return (
    <h1
      className={classNames(
        styles.title,
        styles[color],
        styles[size],
        styles[weight],
        {
          [styles.isCentered]: isCentered,
          [styles.isInline]: isInline,
        }
      )}
    >
      {children}
    </h1>
  )
}

Header.propTypes = {
  children: PropTypes.string.isRequired,
  isInline: PropTypes.bool,
  isCentered: PropTypes.bool,
  color: PropTypes.oneOf(options.colors),
  size: PropTypes.oneOf(options.sizes),
  weight: PropTypes.oneOf(options.weights),
}

export default Header
