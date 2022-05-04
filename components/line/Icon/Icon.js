import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './Icon.module.css'
import { options, iconsMap } from './constants'
import { mapSize } from './helpers'

export const Icon = ({
  id,
  name,
  size= 'md',
  color= 'base',
  background= 'transparent',
  isClickable= false,
  handleClick,
}) => {
  const icon = iconsMap[name]
  const mappedSize = mapSize(size)

  return (
    <div
      id={id}
      className={classNames(
        styles.icon,
        styles[color],
        styles[size],
        styles[background], {
          [styles.isClickable]: isClickable,
        })}
      style={{ width: mappedSize, height: mappedSize }}
      onClick={handleClick}
    >
      <svg
        viewBox={icon.viewBox}
        xmlns="http://www.w3.org/2000/svg"
        width={mappedSize}
        height={mappedSize}
      >
        {icon.svg}
      </svg>
    </div>
  )
}

Icon.propTypes = {
  name: PropTypes.oneOf(options.names).isRequired,
  handleClick: PropTypes.func,
  size: PropTypes.oneOf(options.sizes),
  color: PropTypes.oneOf(options.colors),
  background: PropTypes.oneOf(options.backgrounds),
  id: PropTypes.string,
  isClickable: PropTypes.bool,
}

export default Icon