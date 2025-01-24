import { SearchSection } from '@/components/search-section/search-section'
import '@styles/_variables.scss'

const suggestedTags = ['NodeJS', 'ReactJS']

export default function HomePage() {
  return (
    <main>
      <SearchSection totalJobs={722} suggestedTags={suggestedTags} />
    </main>
  )
}
