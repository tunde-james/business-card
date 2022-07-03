import { MdEmail } from 'react-icons/md'
import styles from './info.module.css'

export default function Info() {
  return (
    <header>
      <div>
        <div className={styles.img}></div>
        <h1 className={styles.profile__name}>Blessing Uduh</h1>
        <p className={styles.profile__title}>Sales Executive</p>
        <a href="https://read.cv/tundejames20" className={styles.website__url}>
          buduh.website
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
