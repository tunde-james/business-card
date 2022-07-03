import styles from './App.module.css'
import { Info, Main, Footer } from './components'

function App() {
  return (
    <div className={styles.app__container}>
      <div className={styles.card__container}>
        <Info />
        <Main />
        <Footer />
      </div>
    </div>
  )
}

export default App
