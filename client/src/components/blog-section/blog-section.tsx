import { ArrowRight } from 'lucide-react'
import styles from './blog-section.module.scss'

const blogs = [
    {
        id: 1,
        title: 'Các kiểu dữ liệu trong Java A-Z: Định nghĩa và Cách sử dụng',
        image: '/blog/java.webp',
        link: '/blog/java-data-types'
    },
    {
        id: 2,
        title: 'Lộ trình học Git chi tiết từ Cơ bản đến Nâng cao',
        image: '/blog/git.webp',
        link: '/blog/git-learning-path'
    },
    {
        id: 3,
        title: 'Top 40+ câu hỏi phỏng vấn Tester thường gặp nhất',
        image: '/blog/tester.webp',
        link: '/blog/tester-interview-questions'
    },
    {
        id: 4,
        title: 'NextJS TypeScript: Cách tạo dự án NextJS với TypeScript',
        image: '/blog/nextjs.webp',
        link: '/blog/nextjs-typescript'
    }
]

export function BlogSection() {
    return (
        <section className={styles.blogSection}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Bài viết nổi bật</h2>
                    <a href="/blog" className={styles.viewAll}>
                        Xem tất cả
                        <ArrowRight size={18} />
                    </a>
                </div>

                <div className={styles.blogGrid}>
                    {blogs.map((blog) => (
                        <a key={blog.id} href={blog.link} className={styles.blogCard}>
                            <div className={styles.image}>
                                <img src={blog.image} alt={blog.title} />
                            </div>
                            <div className={styles.content}>
                                <h3 className={styles.blogTitle}>{blog.title}</h3>
                                <div className={styles.readMore}>
                                    Bắt đầu đọc
                                    <ArrowRight size={16} />
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
} 