import { Link } from 'react-router-dom'
import { Home } from 'lucide-react'
import styles from './404.module.scss'

export default function NotFoundPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.errorCode}>404</h1>
      <h2 className={styles.title}>Oops! Trang không tồn tại</h2>
      <p className={styles.description}>
        Có vẻ như trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển.
      </p>

      <img
        src="/404-illustration.svg"
        alt="404 Illustration"
        className={styles.illustration}
      />

      <Link to="/" className={styles.homeButton}>
        <Home size={20} />
        Về Trang Chủ
      </Link>
    </div>
  )
}
