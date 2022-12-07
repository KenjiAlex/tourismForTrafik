import styles from '../styles/Actual.module.scss'

import ActualCard from './actualCard'

export default function Actual() {
  return(
    <div className={styles.main}>
      <h1>Актуальное организациям</h1>
      <div className={styles.cardLine}><ActualCard /><ActualCard /><ActualCard /></div>
      <div className={styles.cardLine}><ActualCard /><ActualCard /><ActualCard /></div>
    </div>
  )
}