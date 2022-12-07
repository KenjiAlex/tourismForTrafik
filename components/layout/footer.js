import styles from '../../styles/Footer.module.scss'
import Logo from '../logo'
import {FiStar, FiPrinter} from 'react-icons/fi'

export default function Footer() {
  return(
    <div className={styles.main}>
      <div className={styles.first}>
        <Logo />
        <div className={styles.info}>
          <h4>Телефоны:</h4>
          <p>+7 (495) 888-88-88 (Канцелярия)</p>
          <p>+7 (495) 888-88-88 (доб. 000000)</p>
        </div>
        <div className={styles.info}>
          <h4>Адрес:</h4>
          <p>Россия, 125039, Москва,</p>
          <p>Пресненская наб., д. 10, стр. 2</p>
        </div>
      </div>
      <div className={styles.second}>
        <div className={styles.functions}>
          <span><FiPrinter />Печать</span>
          <span><FiStar />Избранное</span>
        </div>
        <div className={styles.links}>
          <p><a>О Ростуризме</a></p>
          <p><a>Деятельность</a></p>
          <p><a>Пресс-служба</a></p>
          <p><a>Документы</a></p>
        </div>
      </div>
      <div className={styles.third}>
        <div className={styles.contacts}>
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
        </div>
        <div className={styles.links}>
          <p><a>О сайте</a></p>
          <p><a>Подать обращение</a></p>
          <p><a>Пользавотельское обращение</a></p>
          <p><a>Условия использования</a></p>
          <p><a>Открытые данные</a></p>
          <p><a>Карта сайта</a></p>
          <p><a>Сообщить об ошибке</a></p>
          <p><a>Контасты</a></p>
        </div>
      </div>
    </div>
  )
}