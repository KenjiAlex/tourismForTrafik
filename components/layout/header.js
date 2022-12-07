import styles from '../../styles/Header.module.scss'
import {BiSearch} from 'react-icons/bi'
import Logo from '../logo'

export default function Header() {
  return(
    <div className={styles.main}>
      <Logo />
      <div className={styles.nav}>
        <nav>
          <a><p>Деятельность</p></a>
          <a><p>Документы</p></a>
          <a><p>Реестры</p></a>
          <a><p>Туристам</p></a>
          <a><p>Прочее</p></a>
        </nav>
        <div className={styles.control}>
          <select className={styles.langSelect}>
              <option>RU</option>
              <option>EN</option>
          </select>
          <span className={styles.search}><BiSearch /></span>
        </div>
      </div>
    </div>
  )
}