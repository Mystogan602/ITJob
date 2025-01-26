import { Link } from 'react-router-dom'
import type { NavItem } from "@/types"
import styles from "./header.module.scss"

const navItems: NavItem[] = [
    { label: "Việc Làm IT", href: "/jobs" },
    { label: "Top Công ty IT", href: "/companies" },
    { label: "Blog", href: "/blog" },
]

export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link to="/" className={styles.logo}>
                    <img src="/favicon.jpg" alt="ITviec" style={{ width: '50px' }} />
                </Link>

                <nav className={styles.nav}>
                    {navItems.map((item) => (
                        <Link key={item.href} to={item.href} className={styles.navItem}>
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <div className={styles.auth}>
                    <Link to="/employer" className={styles.employerLink}>
                        Nhà Tuyển Dụng
                    </Link>
                    <Link to="/login" className={styles.loginButton}>
                        Đăng Nhập/Đăng Ký
                    </Link>
                    <div className={styles.langSwitch}>
                        <button>EN</button>
                        <span>|</span>
                        <button>VI</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

