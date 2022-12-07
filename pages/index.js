import styles from '../styles/Home.module.scss'
import Banner from '../components/banner'
import Info from '../components/info'
import Actual from '../components/actual'

export default function Home() {
  return (
    <div className={styles.main}>
      <Banner />
      <Info />
      <Actual />
    </div>
  )
}
