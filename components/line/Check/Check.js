import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Icon from '../Icon'
import styles from './Check.module.css'

export const Check = ({ isChecked }) => {
  return isChecked ? (
    <Icon name="checkCircle" color="muted" isClickable />
  ) : (
    <span className={classNames(styles.check)} />
  )
}

Check.propTypes = {
  isChecked: PropTypes.bool,
}

export default Check
