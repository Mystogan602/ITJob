import { SearchSection } from '@/components/search-section/search-section'
import { JobList } from '@/components/job-list/job-list'
import { Footer } from '@/components/footer/footer'
import { useState } from 'react'
import styles from './jobs.module.scss'

interface Job {
    id: number;
    title: string;
    company: string;
    location: string;
    companyLogo?: string;
    description?: string;
    requirements?: string[];
    benefits?: string[];
    tags: string[];
    type: string;
    postedAt: string;
    isHot?: boolean;
}

const suggestedTags = ['NodeJS', 'ReactJS', 'Java', 'Python', 'AWS']

export default function JobsPage() {
    const [selectedJob, setSelectedJob] = useState<Job | null>(null)

    return (
        <main className={styles.main}>
            <SearchSection totalJobs={722} suggestedTags={suggestedTags} />
            <div className={styles.container}>
                <div className={styles.jobListWrapper}>
                    <div className={styles.filters}>
                        <div className={styles.filterGroup}>
                            <h3>Cấp bậc</h3>
                            <div className={styles.filterOptions}>
                                <label className={styles.filterOption}>
                                    <input type="checkbox" />
                                    <span>Fresher</span>
                                </label>
                                <label className={styles.filterOption}>
                                    <input type="checkbox" />
                                    <span>Junior</span>
                                </label>
                                <label className={styles.filterOption}>
                                    <input type="checkbox" />
                                    <span>Senior</span>
                                </label>
                                <label className={styles.filterOption}>
                                    <input type="checkbox" />
                                    <span>Leader</span>
                                </label>
                            </div>
                        </div>

                        <div className={styles.filterGroup}>
                            <h3>Hình thức</h3>
                            <div className={styles.filterOptions}>
                                <label className={styles.filterOption}>
                                    <input type="checkbox" />
                                    <span>Toàn thời gian</span>
                                </label>
                                <label className={styles.filterOption}>
                                    <input type="checkbox" />
                                    <span>Bán thời gian</span>
                                </label>
                                <label className={styles.filterOption}>
                                    <input type="checkbox" />
                                    <span>Từ xa</span>
                                </label>
                            </div>
                        </div>

                        <div className={styles.filterGroup}>
                            <h3>Mức lương</h3>
                            <div className={styles.filterOptions}>
                                <label className={styles.filterOption}>
                                    <input type="checkbox" />
                                    <span>Dưới $1000</span>
                                </label>
                                <label className={styles.filterOption}>
                                    <input type="checkbox" />
                                    <span>$1000 - $2000</span>
                                </label>
                                <label className={styles.filterOption}>
                                    <input type="checkbox" />
                                    <span>$2000 - $3000</span>
                                </label>
                                <label className={styles.filterOption}>
                                    <input type="checkbox" />
                                    <span>Trên $3000</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className={styles.jobList}>
                        <JobList onSelectJob={setSelectedJob} selectedJobId={selectedJob?.id ?? null} />
                    </div>
                </div>

                <div className={styles.jobDetail}>
                    {selectedJob ? (
                        <div className={styles.jobContent}>
                            <div className={styles.jobHeader}>
                                <div className={styles.companyLogo}>
                                    <img src={selectedJob.companyLogo} alt={selectedJob.company} />
                                </div>
                                <h1>{selectedJob.title}</h1>
                                <div className={styles.companyName}>{selectedJob.company}</div>
                            </div>

                            <div className={styles.jobInfo}>
                                <div className={styles.infoItem}>
                                    <span className={styles.label}>Địa điểm:</span>
                                    <span>{selectedJob.location}</span>
                                </div>
                                <div className={styles.infoItem}>
                                    <span className={styles.label}>Mức lương:</span>
                                    <span className={styles.salary}>$1000 - $3000</span>
                                </div>
                                <div className={styles.infoItem}>
                                    <span className={styles.label}>Kinh nghiệm:</span>
                                    <span>2 năm</span>
                                </div>
                            </div>

                            <div className={styles.description}>
                                <h2>Mô tả công việc</h2>
                                <div className={styles.content}>
                                    {selectedJob.description}
                                </div>
                            </div>

                            <div className={styles.requirements}>
                                <h2>Yêu cầu ứng viên</h2>
                                <ul>
                                    {selectedJob.requirements?.map((req, index) => (
                                        <li key={index}>{req}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className={styles.benefits}>
                                <h2>Quyền lợi</h2>
                                <ul>
                                    {selectedJob.benefits?.map((benefit, index) => (
                                        <li key={index}>{benefit}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className={styles.actions}>
                                <button className={styles.applyButton}>
                                    Ứng tuyển ngay
                                </button>
                                <button className={styles.saveButton}>
                                    Lưu tin
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className={styles.emptyState}>
                            <img src="/empty-state.svg" alt="Empty state" />
                            <p>Vui lòng chọn một công việc để xem chi tiết</p>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </main>
    )
}