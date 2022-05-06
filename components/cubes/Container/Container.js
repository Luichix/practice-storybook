import React from 'react'
import PropTypes from 'prop-types'
import styles from './Container.module.css'
import classNames from 'classnames'

export const Container = ({ children, isPlayground = false }) => {
  return (
    <div
      className={classNames(styles.container, {
        [styles[isPlayground]]: isPlayground,
      })}
    >
      {children}
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  isPlayground: PropTypes.bool,
}

export default Container
