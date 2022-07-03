import styles from './footer.module.css'
import {
  FaTwitterSquare,
  FaLinkedin,
  FaFacebookSquare,
  FaGithubSquare,
} from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.social__icon}>
        <FaTwitterSquare />
      </p>
      <p className={styles.social__icon}>
        <FaFacebookSquare />
      </p>
      <p className={styles.social__icon}>
        <FaLinkedin />
      </p>
      <p className={styles.social__icon}>
        <FaGithubSquare />
      </p>
    </footer>
  )
}
