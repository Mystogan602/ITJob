import { Link } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'
import styles from './register.module.scss'

export default function RegisterPage() {
    return (
        <div className={styles.registerPage}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1 className={styles.title}>Đăng ký tài khoản</h1>
                    <p className={styles.subtitle}>
                        Tạo tài khoản để tìm việc làm IT tốt nhất
                    </p>
                </div>

                <form className={styles.form}>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Họ và tên</label>
                        <input
                            type="text"
                            className={styles.input}
                            placeholder="Nhập họ và tên"
                            required
                        />
                    </div>

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

                    <div className={styles.formGroup}>
                        <label className={styles.label}>Xác nhận mật khẩu</label>
                        <input
                            type="password"
                            className={styles.input}
                            placeholder="Nhập lại mật khẩu"
                            required
                        />
                    </div>

                    <div className={styles.terms}>
                        <input type="checkbox" required id="terms" />
                        <label htmlFor="terms">
                            Tôi đồng ý với <Link to="/terms">Điều khoản dịch vụ</Link> và{' '}
                            <Link to="/privacy">Chính sách bảo mật</Link>
                        </label>
                    </div>

                    <button type="submit" className={styles.registerButton}>
                        Đăng ký
                    </button>
                </form>

                <div className={styles.divider}>
                    <span>Hoặc đăng ký với</span>
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

                <div className={styles.login}>
                    Đã có tài khoản? <Link to="/login">Đăng nhập ngay</Link>
                </div>
            </div>
        </div>
    )
} 