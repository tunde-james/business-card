import styles from './main.module.css'

export default function Main() {
  return (
    <main className={styles.main}>
      <About />
      <Interest />
    </main>
  )
}

function About() {
  return (
    <div>
      <h2 className={styles.main__header}>About</h2>
      <p className={styles.main__text}>
        I am an efficient and confident sales executive with demonstarted
        experience of working in the logistics and supply chain industry. My
        experience has helped me develop expert knowledge of sales processes. I
        am highly motivated to continue learning and improving my craft.
      </p>
    </div>
  )
}

function Interest() {
  return (
    <div>
      <h2 className={styles.main__header}>Interests</h2>
      <p className={styles.main__text}>
        Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
        Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
      </p>
    </div>
  )
}
