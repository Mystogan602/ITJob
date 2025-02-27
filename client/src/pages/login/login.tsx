import { Link } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'
import styles from './login.module.scss'

export default function LoginPage() {
    return (
        <div className={styles.loginPage}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1 className={styles.title}>Đăng nhập</h1>
                    <p className={styles.subtitle}>
                        Chào mừng bạn quay trở lại với ITJob
                    </p>
                </div>

                <form className={styles.form}>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Email</label>
                        <input
                            type="email"
                            className={styles.input}
                            placeholder="Nhập địa chỉ email"
                            required
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label}>Mật khẩu</label>
                        <input
                            type="password"
                            className={styles.input}
                            placeholder="Nhập mật khẩu"
                            required
                        />
                    </div>

                    <div className={styles.forgotPassword}>
                        <Link to="/forgot-password">Quên mật khẩu?</Link>
                    </div>

                    <button type="submit" className={styles.loginButton}>
                        Đăng nhập
                    </button>
                </form>

                <div className={styles.divider}>
                    <span>Hoặc đăng nhập với</span>
                </div>

                <div className={styles.socialLogin}>
                    <button type="button" className={styles.socialButton}>
                        <FcGoogle size={20} />
                        Google
                    </button>
                    <button type="button" className={styles.socialButton}>
                        <FaGithub size={20} />
                        Github
                    </button>
                </div>

                <div className={styles.register}>
                    Chưa có tài khoản? <Link to="/register">Đăng ký ngay</Link>
                </div>
            </div>
        </div>
    )
}