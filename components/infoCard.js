import styles from '../styles/infoCard.module.scss'
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'

export default function InfoCard() {
  return(
    <div className={styles.main}>
      <span className={styles.navigate}>
        <p>ВАЖНОЕ</p>
        <div className={styles.arrows}>
          <AiOutlineArrowLeft />
          <AiOutlineArrowRight />
        </div>
      </span>
      <p className={styles.text}>
        В Нижнем Новгороде подвели итоги Третьего Всероссийского конкурса детских туристских проектов Ростуризма
      </p>
      <p className={styles.date}>14.10.2022 18:37</p>
    </div>
  )
}