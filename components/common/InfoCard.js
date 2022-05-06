import React from 'react'
import PropTypes from 'prop-types'

const InfoCard = ({ Icon, title, text }) =>  {
  return (
    <div className={style.infoCard}>
      <Icon  className={style.icon}/>
      <h6 className={style.title}> {title} </h6>
      <p className={style.text}>{text}</p>
    </div>
  )
}

export default InfoCard

const style = {
  infoCard: 'p-4 border rounded-md',
  icon: 'text-pr w-7 h-7',
  title: 'font-medium text-gray-800 text-xl py-2',
  text: 'text-gray-500 text-sm'
}

InfoCard.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.array.isRequired,
}

