import { Facebook, Youtube, Linkedin, Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react'
import styles from './footer.module.scss'

const footerLinks = {
    about: [
        { label: 'Trang Chủ', href: '/' },
        { label: 'Về ITJob.com', href: '/about' },
        { label: 'Liên Hệ', href: '/contact' },
        { label: 'Việc Làm IT', href: '/jobs' },
        { label: 'Câu hỏi thường gặp', href: '/faq' },
    ],
    program: [
        { label: 'Chuyên IT', href: '/chuyen-it' },
        { label: 'Cuộc thi viết', href: '/cuoc-thi-viet' },
        { label: 'Việc làm IT nổi bật', href: '/viec-lam-noi-bat' },
        { label: 'Khảo sát thường niên', href: '/khao-sat' },
    ],
    terms: [
        { label: 'Quy định bảo mật', href: '/privacy' },
        { label: 'Quy chế hoạt động', href: '/terms' },
        { label: 'Giải quyết khiếu nại', href: '/complaints' },
        { label: 'Thỏa thuận sử dụng', href: '/agreement' },
        { label: 'Thông báo bảo chí', href: '/press' },
    ],
    contact: [
        {
            icon: <Phone size={16} />,
            label: 'Hồ Chí Minh',
            value: '(+84) 977 460 519',
        },
        {
            icon: <Phone size={16} />,
            label: 'Hà Nội',
            value: '(+84) 983 131 351',
        },
        {
            icon: <Mail size={16} />,
            label: 'Email',
            value: 'love@itjob.com',
        },
    ],
}

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.top}>
                    <div className={styles.brand}>
                        <img src="/favicon.jpg" alt="ITJob" className={styles.logo} />
                        <p className={styles.slogan}>IT nhưng mà chất</p>
                        <div className={styles.social}>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <Linkedin size={20} />
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <Facebook size={20} />
                            </a>
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                                <Youtube size={20} />
                            </a>
                        </div>
                    </div>

                    <div className={styles.links}>
                        <div className={styles.column}>
                            <h3>Về ITviec</h3>
                            <ul>
                                {footerLinks.about.map((link) => (
                                    <li key={link.href}>
                                        <a href={link.href}>{link.label}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className={styles.column}>
                            <h3>Chương trình</h3>
                            <ul>
                                {footerLinks.program.map((link) => (
                                    <li key={link.href}>
                                        <a href={link.href}>{link.label}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className={styles.column}>
                            <h3>Điều khoản chung</h3>
                            <ul>
                                {footerLinks.terms.map((link) => (
                                    <li key={link.href}>
                                        <a href={link.href}>{link.label}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className={`${styles.column} ${styles.contact}`}>
                            <h3>Liên hệ để đăng tin tuyển dụng tại:</h3>
                            <ul>
                                {footerLinks.contact.map((item, index) => (
                                    <li key={index}>
                                        <span className={styles.contactLabel}>
                                            {item.icon}
                                            {item.label}:
                                        </span>
                                        <span className={styles.contactValue}>{item.value}</span>
                                    </li>
                                ))}
                            </ul>
                            <a href="/contact" className={styles.contactButton}>
                                Gửi thông tin liên hệ
                                <ArrowUpRight size={16} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>Copyright © IT Job JSC | MST: 0312192258</p>
                </div>
            </div>
        </footer>
    )
} 