import React from 'react'
import PropTypes from 'prop-types'
import Picture from '../Picture'
import styles from './Avatar.module.css'
import classNames from 'classnames'
import { options } from './constants'
import { mapSize } from './helpers'

export const Avatar = ({ src, size = 'md' }) => {
  return (
    <div className={classNames(styles.avatar)}>
      <Picture
        src={src}
        width={mapSize(size)}
        height={mapSize(size)}
        isRounded
        withBorder
      />
    </div>
  )
}

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  size: PropTypes.oneOf(options.sizes),
}


export default Avatar
