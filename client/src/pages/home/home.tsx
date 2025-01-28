import { SearchSection } from '@/components/search-section/search-section'
import { ToolSection } from '@/components/tool-section/tool-section'
import { CompanySection } from '@/components/company-section/company-section'
import { JobList } from '@/components/job-list/job-list'
import styles from './home.module.scss'
import { BlogSection } from '@/components/blog-section/blog-section'
import { Footer } from '@/components/footer/footer'
const suggestedTags = ['NodeJS', 'ReactJS']

export default function HomePage() {
  return (
    <main className={styles.main}>
      <SearchSection totalJobs={722} suggestedTags={suggestedTags} />
      <JobList />
      <ToolSection />
      <CompanySection />
      <BlogSection />
      <Footer />
    </main>
  )
}
