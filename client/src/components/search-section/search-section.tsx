import type { SearchProps } from "@/types"
import { MapPin, Search } from "lucide-react"
import styles from "./search-section.module.scss"

export function SearchSection({ totalJobs, suggestedTags }: SearchProps) {
  return (
    <section className={styles.searchSection}>
      <div className={styles.container}>
        <h1 className={styles.title}>{totalJobs} Việc làm IT cho Developer "Chất"</h1>

        <div className={styles.searchBox}>
          <div className={styles.locationSelect}>
            <MapPin size={20} />
            <select defaultValue="all">
              <option value="all">Tất cả thành phố</option>
              <option value="hanoi">Hà Nội</option>
              <option value="hcm">TP. HCM</option>
            </select>
          </div>

          <div className={styles.searchInput}>
            <input type="text" placeholder="Nhập từ khoá theo kỹ năng, chức vụ, công ty..." />
            <button type="button" className={styles.searchButton}>
              <Search size={20} />
              Tìm Kiếm
            </button>
          </div>
        </div>

        <div className={styles.tags}>
          <span>Gợi ý cho bạn:</span>
          {suggestedTags.map((tag) => (
            <button key={tag} className={styles.tag}>
              {tag}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

