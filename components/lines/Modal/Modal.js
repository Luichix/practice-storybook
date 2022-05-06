import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './Modal.module.css'
import classNames from 'classnames'
import { options } from './constants'
import Icon from '../Icon'
import isEmpty from '../../../utils/isEmpty'
import useMedia from '../../../hook/useMedia'
import Container from '../../cubes/Container'

const FADE_OUT_ANIMATION_TIME = 400

const createHandlerClick = () => (event) => {
  event?.stopPropagation()
}

const createHandlerClose = ({ onClose, setOnFadeOut }) => () => {
  setOnFadeOut(true)
  setTimeout(onClose, FADE_OUT_ANIMATION_TIME)
}

const handleSecondaryAction = ({ onSecondaryAction }) => () => {
  onSecondaryAction()
}

export const Modal = ({
  onClose,
  secondaryAction,
  children,
  type = 'primary',
  isPlayground,
}) => {
  const isDesktop = useMedia(['(min-width: 992px)'], [true])
  const [onFadeOut, setOnFadeOut] = useState(false)

  const handleClose = createHandlerClose({ onClose, setOnFadeOut })

  return (
    <div
      className={classNames(styles.backdrop, {
        [styles[isPlayground]]: isPlayground,
        [styles[onFadeOut]]: onFadeOut,
      })}
      onClick={handleClose}
    >
      <div
        className={classNames(styles.modal, [styles[type]])}
        onClick={createHandlerClick()}
      >
        <div className={styles.header}>
          {!!onClose && (
            <Icon
              color={isDesktop && type === 'secondary' ? 'primary' : 'inverted'}
              name={isDesktop ? 'cross' : 'angleLeft'}
              background={isDesktop ? 'transparent' : 'muted'}
              onClick={handleClose}
              size={isDesktop ? 'lg' : 'md'}
            />
          )}
          {secondaryAction && !isEmpty(secondaryAction) && (
            <Icon
              color="inverted"
              name={secondaryAction?.icon}
              background="muted"
              onClick={handleSecondaryAction({
                onSecondaryAction: secondaryAction?.handler,
              })}
            />
          )}
        </div>
        <Container>{children}</Container>
      </div>
    </div>
  )
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func,
  secondaryAction: PropTypes.shape({
    icon: PropTypes.string,
    handler: PropTypes.func,
  }),
  type: PropTypes.oneOf(options.types),
  isPlayground: PropTypes.bool,
}

export default Modal
