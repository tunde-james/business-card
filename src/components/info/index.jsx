import { MdEmail } from 'react-icons/md'
import styles from './info.module.css'

export default function Info() {
  return (
    <header className={styles.profile}>
      <div className={styles.container}>
        <div className={styles.img}></div>
        <h1 className={styles.profile__name}>Tunde James</h1>
        <p className={styles.profile__title}>Frontend Developer</p>
        <a href="https://read.cv/tundejames20" className={styles.website__url}>
          tundejames.website
        </a>
        <p>
          <a href="" className={styles.email}>
            <span>
              <MdEmail />
            </span>
            <span className={styles.email__text}>Email</span>
          </a>
        </p>
      </div>
    </header>
  )
}
