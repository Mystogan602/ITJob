import { BlogSection } from '@/components/blog-section/blog-section'
import { Footer } from '@/components/footer/footer'
import { Header } from '@/components/header/header'
import styles from './blog.module.scss'

export default function BlogPage() {
    return (
        <main className={styles.main}>
            <Header />

            <div className={styles.hero}>
                <div className={styles.container}>
                    <h1 className={styles.title}>ITJob Blog - Ý tưởng phát triển sự nghiệp IT của bạn</h1>
                    <div className={styles.searchBox}>
                        <input
                            type="text"
                            placeholder="Nhập từ khóa tìm kiếm..."
                            className={styles.searchInput}
                        />
                        <button className={styles.searchButton}>
                            Tìm kiếm
                        </button>
                    </div>
                </div>
            </div>

            <div className={styles.categories}>
                <div className={styles.container}>
                    <div className={styles.grid}>
                        <div className={styles.category}>
                            <h3>Công ty IT tốt nhất Việt Nam</h3>
                            <p>Những công ty IT tốt nhất Việt Nam có gì đặc biệt? Họ đã phát triển như thế nào sau mỗi năm? Cùng khám phá những công ty tuyệt vời này nhé!</p>
                        </div>

                        <div className={styles.category}>
                            <h3>Sự nghiệp IT</h3>
                            <p>Không bao giờ là quá muộn để trở nên xuất sắc trong ngành IT. Tự tin mình thực sự, khám phá con đường sự nghiệp IT cho riêng bạn.</p>
                        </div>

                        <div className={styles.category}>
                            <h3>Ứng tuyển & Thăng tiến</h3>
                            <p>Từ cách viết CV cho phỏng vấn, deal lương. Tận dụng lời khuyên từ người thật, việc thật. Sẵn sàng "pro", chốt luôn công việc IT tuyệt vời nhé!</p>
                        </div>

                        <div className={styles.category}>
                            <h3>Chuyên môn IT</h3>
                            <p>Cập nhật kiến thức về các ngành lập trình, công nghệ ngành IT và tự học với 100+ tài liệu IT sau đây. Khám phá ngay!</p>
                        </div>
                    </div>
                </div>
            </div>

            <BlogSection />
            <Footer />
        </main>
    )
}
