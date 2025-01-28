import { FileText, BookOpen, FileEdit } from 'lucide-react'
import styles from './tool-section.module.scss'

export function ToolSection() {
    return (
        <section className={styles.toolSection}>
            <div className={styles.container}>
                <h2 className={styles.title}>Công cụ tốt nhất cho hành trang ứng tuyển của bạn</h2>

                <div className={styles.tools}>
                    <div className={styles.tool}>
                        <div className={styles.iconWrapper}>
                            <FileText size={24} />
                        </div>
                        <h3>Hồ sơ cá nhân</h3>
                        <p>Kiến tạo hồ sơ ITviec với cấu trúc chuẩn mực cùng các gợi ý chi tiết</p>
                        <a href="#" className={styles.toolButton}>Cập nhật hồ sơ</a>
                    </div>

                    <div className={styles.tool}>
                        <div className={styles.iconWrapper}>
                            <FileEdit size={24} />
                        </div>
                        <h3>Mẫu CV</h3>
                        <p>Nâng cấp CV với các mẫu CV IT chuyên nghiệp - được nhà tuyển dụng đề xuất</p>
                        <a href="#" className={styles.toolButton}>Xem mẫu CV</a>
                    </div>

                    <div className={styles.tool}>
                        <div className={styles.iconWrapper}>
                            <BookOpen size={24} />
                        </div>
                        <h3>Blog về IT</h3>
                        <p>Cập nhật thông tin lương thưởng, nghề nghiệp và kiến thức ngành IT</p>
                        <a href="#" className={styles.toolButton}>Khám phá blog</a>
                    </div>
                </div>
            </div>
        </section>
    )
} 