import React from 'react'
import { AiFillCloseCircle, AiFillCheckCircle } from 'react-icons/ai'
import TextError from './TextError'
import PropTypes from 'prop-types'
import { useValid } from '../../hooks/useValid'

function InputGroup({ name, state, text , message, children  }) {
  const validLabel = useValid('success', state.valid, style.labelSuccess, style.labelError, style.labelNormal)
  const validIcon = useValid('success', state.valid, icon.success, icon.error, icon.normal)
  return (
    <div className={style.labelGroup} >
      <label htmlFor={name} className={validLabel}> {text} </label>
      <div className={style.inputGroup}>
        {children}
        <div className={style.iconPlace}>
          {validIcon}
        </div>
      </div>
      <TextError test={state.valid} message={message} />
    </div>
  )
}

export default InputGroup

const icon = {
  success: [<i key='check' className='text-pr'><AiFillCheckCircle /></i>],
  error: [<i key='close' className='text-red-500'> <AiFillCloseCircle /></i>],
  normal: null
}

const style = {
  labelGroup: 'flex flex-col gap-2 pt-6 transition-all duration-300 ease-linear',
  labelNormal: 'text-gray-500',
  labelError: 'text-red-500',
  labelSuccess: 'text-pr',
  inputGroup: 'flex',
  iconPlace: 'w-4 px-2 right-0 grow-0 self-center'
}

InputGroup.propTypes = {
  name: PropTypes.string.isRequired,
  state: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
}