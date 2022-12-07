import styles from '../styles/ActualCard.module.scss'
import {HiOutlineChip} from 'react-icons/hi'

export default function ActualCard() {
  return(
    <div className={styles.main}>
      <div className={styles.content}>
        <div className={styles.icon}>
          <HiOutlineChip />
        </div>        
        <p>Электронная путевка</p>
      </div>
      <span><a><p className={styles.link}>Смотреть</p></a></span>
    </div>
  )
}