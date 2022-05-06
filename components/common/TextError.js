import React from 'react'
import { BiMessageAltError } from 'react-icons/bi'
import PropTypes from 'prop-types'
import { useValid } from '../../hooks/useValid'

function TextError({ test = null, message }) {
  const iconValid = useValid('success', test, '', icon, '')
  const textValid = useValid('success', test, '', message, '')
  return (
    <p className={style.textGroup}>
      {iconValid} {textValid}
    </p>
  )
}
export default TextError

const icon = [<BiMessageAltError key='error' className='self-center mr-1'/>]
const style = { textGroup: 'text-sm text-red-500 flex' }

TextError.propTypes = {
  test: PropTypes.string, // test to check if the error is valid
  message: PropTypes.string // message to display if the error is valid
}
