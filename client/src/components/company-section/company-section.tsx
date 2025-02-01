import { Company, CompanyFilters } from '@/types'
import styles from './company-section.module.scss'

const companies: Company[] = [
    {
        id: 1,
        name: 'Samsung Electronics HCMC CE Complex',
        logo: '/companies/samsung.webp',
        location: 'Ho Chi Minh',
        tags: ['Embedded', 'Android', 'ReactJS', 'OOP', 'C++', 'Python'],
        jobCount: 4,
        size: 'large',
        rating: 4.8
    },
    {
        id: 2,
        name: 'Hitachi Digital Services',
        logo: '/companies/hitachi.webp',
        location: 'Ha Noi - Ho Chi Minh - Da Nang',
        tags: ['C++', 'Python', 'DevOps', 'Java', 'Golang', 'Japanese'],
        jobCount: 5,
        size: 'medium',
        rating: 4.5
    },
    {
        id: 3,
        name: 'MB Bank',
        logo: '/companies/mb.webp',
        location: 'Ha Noi',
        tags: ['Java', 'JavaScript', 'Python', 'Oracle', 'AngularJS', 'ReactJS'],
        jobCount: 10,
        size: 'large',
        rating: 4.2
    },
]

interface CompanySectionProps {
    filters?: CompanyFilters;
    onPageChange?: (page: number) => void;
}

export function CompanySection({ filters, onPageChange }: CompanySectionProps) {
    // Thêm logic lọc và phân trang ở đây
    const filteredCompanies = companies
        .filter(company => {
            if (filters && filters.location !== 'all' && company.location !== filters.location) return false;
            if (filters && filters.size !== 'all' && company.size !== filters.size) return false;
            if (filters && filters.search && !company.name.toLowerCase().includes(filters.search.toLowerCase())) return false;
            return true;
        })
        .sort((a, b) => {
            switch (filters?.sortBy) {
                case 'rating':
                    return (b.rating ?? 0) - (a.rating ?? 0);
                case 'jobs':
                    return b.jobCount - a.jobCount;
                case 'name':
                    return a.name.localeCompare(b.name);
                default:
                    return 0;
            }
        });

    const itemsPerPage = 9;
    const totalPages = Math.ceil(filteredCompanies.length / itemsPerPage);
    const currentCompanies = filteredCompanies.slice(
        ((filters?.page || 1) - 1) * itemsPerPage,
        (filters?.page || 1) * itemsPerPage
    );

    return (
        <section className={styles.companySection}>
            <div className={styles.container}>
                <h2 className={styles.title}>Nhà tuyển dụng hàng đầu</h2>

                <div className={styles.companies}>
                    {currentCompanies.map((company) => (
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

                <div className={styles.pagination}>
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i + 1}
                            className={`${styles.pageButton} ${filters?.page === i + 1 ? styles.active : ''}`}
                            onClick={() => onPageChange?.(i + 1)}
                        >
                            {i + 1}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
} 