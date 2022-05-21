import React from 'react'
import style from '../../styles/modules/load.module.css'

const Load = () => {
  return (
    <div className={style.container}>
      <div className={style.wrapper} >
        <div className={style.loader}>
          <div className={style.inner} >
          </div>
        </div>
      </div>
    </div>
  )
}

export default Load