import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

/**
 * Text message component for notify error, success, warning, info, etc.
 */

function TextMessage({
  message = null,
  type = null, }) {

  const text =  typeText({ type, message })

  return (
    <p className={text.styleText}>
      {text.icon} {text.message}
    </p>
  )
}
export default TextMessage

TextMessage.propTypes = {
  icon: PropTypes.string, // test to check if the error is valid
  message: PropTypes.string, // message to display if the error is valid
  styleText: PropTypes.string, // message to display if the error is valid
  type: PropTypes.string // type of message
}

const textDefault = {
  styleText: '',
  icon: '',
  message: ''
}

const typeText = ({ type, message }) => {
  const [text, setText] = useState(textDefault)

  useEffect(() => {
    if(type){
      setText({
        styleText: '`{{style: color: red}}`',
        icon: 'icon',
        message: message
      })
      return text
    }
  }, [type])

  return textDefault
}

<style>
  {`.red {
      color: red;
    }`}

</style>