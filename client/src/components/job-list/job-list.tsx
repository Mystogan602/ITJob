import { MapPin, Building2, Clock, ArrowRight } from 'lucide-react'
import styles from './job-list.module.scss'

const jobs = [
    {
        id: 1,
        title: 'Senior Fullstack Developer (NodeJS, ReactJS)',
        company: 'FWD PTE VTC',
        location: 'Ho Chi Minh',
        tags: ['NodeJS', 'AWS', 'ReactJS'],
        type: 'Làm tại văn phòng',
        postedAt: '3 ngày trước',
        isHot: true,
    },
    {
        id: 2,
        title: 'Fullstack Developer (NodeJS/ReactJS) Up to $2000',
        company: 'SHOPSTACK VIETNAM',
        location: 'Ha Noi',
        tags: ['NodeJS', 'AWS', 'ReactJS'],
        type: 'Tại văn phòng',
        postedAt: '4 ngày trước',
        isHot: true,
    },
    {
        id: 3,
        title: 'Team Lead - Fullstack Developer (ReactJS, NodeJS)',
        company: 'Designveloper (DSV)',
        location: 'Ho Chi Minh',
        tags: ['ReactJS', 'JavaScript', 'NodeJS'],
        type: 'Tại văn phòng',
        postedAt: '15 ngày trước',
        isHot: true,
    },
]

export function JobList() {
    return (
        <section className={styles.jobList}>
            <div className={styles.container}>
                <h2 className={styles.title}>
                    94 Việc làm IT cho Developer "Chất"
                </h2>

                <div className={styles.jobGrid}>
                    {jobs.map((job) => (
                        <div key={job.id} className={styles.jobCard}>
                            <div className={styles.jobHeader}>
                                <h3 className={styles.jobTitle}>{job.title}</h3>
                                {job.isHot && <span className={styles.hotBadge}>HOT</span>}
                            </div>

                            <div className={styles.companyInfo}>
                                <Building2 size={18} />
                                <span>{job.company}</span>
                            </div>

                            <div className={styles.jobDetails}>
                                <div className={styles.detail}>
                                    <MapPin size={18} />
                                    <span>{job.location}</span>
                                </div>
                                <div className={styles.detail}>
                                    <Clock size={18} />
                                    <span>{job.postedAt}</span>
                                </div>
                            </div>

                            <div className={styles.tags}>
                                {job.tags.map((tag) => (
                                    <span key={tag} className={styles.tag}>
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className={styles.jobType}>{job.type}</div>

                            <button className={styles.applyButton}>
                                Đăng nhập để xem mức lương
                            </button>
                        </div>
                    ))}
                </div>

                <div className={styles.viewMore}>
                    <button className={styles.viewMoreButton}>
                        Xem thêm 86 công việc khác
                        <ArrowRight size={18} />
                    </button>
                </div>
            </div>
        </section>
    )
} 