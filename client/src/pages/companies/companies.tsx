import { useState } from 'react'
import { CompanySection } from '@/components/company-section/company-section'
import { Footer } from '@/components/footer/footer'
import { Header } from '@/components/header/header'
import { SearchSection } from '@/components/search-section/search-section'
import { Building2, Users, MapPin, Search } from 'lucide-react'
import { CompanyFilters } from '@/types'
import styles from './companies.module.scss'

const suggestedTags = ['Java', 'JavaScript', 'Python', 'ReactJS', 'NodeJS', 'AWS']

export default function CompaniesPage() {
    const [filters, setFilters] = useState<CompanyFilters>({
        location: 'all',
        size: 'all',
        sortBy: 'rating',
        search: '',
        page: 1
    })

    const handleFilterChange = (key: keyof CompanyFilters, value: string | number) => {
        setFilters(prev => ({
            ...prev,
            [key]: value,
            page: 1 // Reset trang khi thay đổi bộ lọc
        }))
    }

    return (
        <main className={styles.main}>
            <Header />
            <SearchSection totalJobs={722} suggestedTags={suggestedTags} />

            <div className={styles.filterSection}>
                <div className={styles.container}>
                    <div className={styles.filterGroup}>
                        <MapPin size={20} />
                        <select
                            value={filters.location}
                            onChange={(e) => handleFilterChange('location', e.target.value)}
                        >
                            <option value="all">Tất cả địa điểm</option>
                            <option value="hanoi">Hà Nội</option>
                            <option value="hcm">TP. HCM</option>
                            <option value="danang">Đà Nẵng</option>
                        </select>
                    </div>

                    <div className={styles.filterGroup}>
                        <Building2 size={20} />
                        <select
                            value={filters.size}
                            onChange={(e) => handleFilterChange('size', e.target.value)}
                        >
                            <option value="all">Tất cả quy mô</option>
                            <option value="small">Dưới 50 nhân viên</option>
                            <option value="medium">50-300 nhân viên</option>
                            <option value="large">Trên 300 nhân viên</option>
                        </select>
                    </div>

                    <div className={styles.filterGroup}>
                        <Users size={20} />
                        <select
                            value={filters.sortBy}
                            onChange={(e) => handleFilterChange('sortBy', e.target.value)}
                        >
                            <option value="rating">Đánh giá cao nhất</option>
                            <option value="jobs">Số lượng việc làm</option>
                            <option value="name">Tên công ty</option>
                        </select>
                    </div>

                    <div className={styles.searchGroup}>
                        <input
                            type="text"
                            placeholder="Tìm kiếm công ty..."
                            value={filters.search}
                            onChange={(e) => handleFilterChange('search', e.target.value)}
                        />
                        <button className={styles.searchButton}>
                            <Search size={20} />
                        </button>
                    </div>
                </div>
            </div>

            <CompanySection filters={filters} onPageChange={(page) => handleFilterChange('page', page)} />
            <Footer />
        </main>
    )
}