import Link from "next/link";
import styles from '../styles/main.module.css'




export default function Home() {
  return (
    <>
      <div className={styles.home_wrapper}>
        <div>
          <div className={styles.home_info}>
            <span> Привет, ты попал на <Link href={''} className={styles.home_link}>мой проект</Link> который основан на 2 крупных фреймворках Nest.js и Next.js </span>
          </div>
          <div className={styles.home_info}>
            <span> Что бы подробнее ознакомиться с моим проектом <Link href={''} className={styles.home_link}>зарегистрируйтесь</Link> в системе </span>
          </div>
        </div>
      </div>
    </>
  )
}
