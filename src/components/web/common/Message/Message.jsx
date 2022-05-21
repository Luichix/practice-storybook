import React from 'react'
import PropTypes from 'prop-types'
import styles from './Message.module.css'
import classNames from 'classnames'
/**
 * Text message component for notify error, success, warning, info, etc.
 */

function Message({
  children,
  type = 'info' }) {

  return (
    <p className={classNames(styles[type])}>
      {children}
    </p>
  )
}
export default Message

Message.propTypes = {
  children: PropTypes.node, // message to display
  type: PropTypes.oneOf['error, warn, success, info '] // type of message
}