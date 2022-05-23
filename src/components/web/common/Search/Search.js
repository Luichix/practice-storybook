import React from 'react'
import styles from './Search.module.css'

function Search() {
  return (
    <div className={styles.search}>
      <input type="text" placeholder="Search..." />
      <a href="##" className={styles.icon}>
        <i>Icon</i>
      </a>
    </div>
  )
}

export default Search
