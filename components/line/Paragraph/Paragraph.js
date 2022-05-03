import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './Paragraph.module.css'
import { options } from './constants'

export const Paragraph = ({
  children,
  color = 'base',
  size = 'md',
  weight = 'normal',
  isStriked,
  isInline,
  isMonospace,
  isCentered,
}) => {
  return (
    <p
      className={classNames(
        styles.paragraph,
        styles[color],
        styles[size],
        styles[weight],
        styles[isStriked],
        styles[isInline],
        styles[isMonospace],
        styles[isCentered])}
    >
      {children}
    </p>
  )
}

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(options.colors),
  size: PropTypes.oneOf(options.sizes),
  weight: PropTypes.oneOf(options.weights),
  className: PropTypes.string,
  isStriked: PropTypes.bool,
  isInline: PropTypes.bool,
  isCentered: PropTypes.bool,
  isMonospace: PropTypes.bool,
}

export default Paragraph
