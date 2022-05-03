import React from 'react'
import PropTypes from 'prop-types'

import styles from './Picture.module.css'
import withStyles from '../../hocs/withStyles'

export const Picture = ({
  getStyles = () => {},
  src,
  width,
  height = 'auto',
  isRounded,
  withBorder = false,
}) => (
  <picture
    className={getStyles('picture', {
      'is-rounded': isRounded,
      'with-border': withBorder,
    })}
  >
    <img src={src} style={{ height, maxWidth: width }} />
  </picture>
)

Picture.propTypes = {
  src: PropTypes.string.isRequired,
  getStyles: PropTypes.func.isRequired,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  isRounded: PropTypes.bool,
  withBorder: PropTypes.bool,
}

export default withStyles(styles)(Picture)
