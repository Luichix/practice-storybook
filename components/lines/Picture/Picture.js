import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './Picture.module.css'

export const Picture = ({
  src,
  width,
  height = 'auto',
  isRounded,
  withBorder = false,
}) => (
  <picture
    className={classNames(styles.picture, {
      [styles.isRounded]: isRounded,
      [styles.withBorder]: withBorder,
    })}
  >
    <img src={src} style={{ height, maxWidth: width }} />
  </picture>
)

Picture.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  isRounded: PropTypes.bool,
  withBorder: PropTypes.bool,
}

export default Picture
