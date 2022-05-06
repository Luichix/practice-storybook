import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './Textarea.module.css'

export const Textarea = ({
  children,
  rows = 5,
  placeholder,
  handleChange,
}) => {
  return (
    <textarea
      className={classNames(styles.textarea)}
      rows={rows}
      placeholder={placeholder}
      onChange={handleChange}
    >
      {children}
    </textarea>
  )
}

Textarea.propTypes = {
  children: PropTypes.node,
  onChange: PropTypes.func.isRequired,
  rows: PropTypes.number,
  placeholder: PropTypes.string,
}

export default Textarea
