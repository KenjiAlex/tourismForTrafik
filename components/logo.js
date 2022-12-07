import {GiEagleEmblem} from 'react-icons/gi'
import styles from '../styles/Logo.module.scss'

export default function Logo() {
  return(
    <div className={styles.main}>
      <GiEagleEmblem />
      <span>
      <p>
        Федеральное
      </p>
      <p>
      агенство по туризму
      </p>
      </span>
    </div>
  )
}