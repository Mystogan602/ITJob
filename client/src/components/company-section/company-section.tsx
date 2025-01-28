import styles from './company-section.module.scss'

const companies = [
    {
        id: 1,
        name: 'Samsung Electronics HCMC CE Complex',
        logo: '/companies/samsung.webp',
        location: 'Ho Chi Minh',
        tags: ['Embedded', 'Android', 'ReactJS', 'OOP', 'C++', 'Python'],
        jobCount: 4,
    },
    {
        id: 2,
        name: 'Hitachi Digital Services',
        logo: '/companies/hitachi.webp',
        location: 'Ha Noi - Ho Chi Minh - Da Nang',
        tags: ['C++', 'Python', 'DevOps', 'Java', 'Golang', 'Japanese'],
        jobCount: 5,
    },
    {
        id: 3,
        name: 'MB Bank',
        logo: '/companies/mb.webp',
        location: 'Ha Noi',
        tags: ['Java', 'JavaScript', 'Python', 'Oracle', 'AngularJS', 'ReactJS'],
        jobCount: 10,
    },
]

export function CompanySection() {
    return (
        <section className={styles.companySection}>
            <div className={styles.container}>
                <h2 className={styles.title}>Nhà tuyển dụng hàng đầu</h2>

                <div className={styles.companies}>
                    {companies.map((company) => (
                        <div key={company.id} className={styles.company}>
                            <div className={styles.logoWrapper}>
                                <img src={company.logo} alt={company.name} />
                            </div>

                            <div className={styles.info}>
                                <h3>{company.name}</h3>
                                <p className={styles.location}>{company.location}</p>

                                <div className={styles.tags}>
                                    {company.tags.map((tag) => (
                                        <span key={tag} className={styles.tag}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className={styles.jobCount}>
                                    {company.jobCount} Việc làm
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
} 