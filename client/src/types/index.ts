export interface NavItem {
  label: string
  href: string
}

export interface SearchProps {
  totalJobs: number
  suggestedTags: string[]
}

export interface ToolCard {
  icon: string
  title: string
  description: string
  badge?: string
}

export interface CompanyFilters {
  location: string
  size: string
  sortBy: string
  search: string
  page: number
}

export interface Company {
  id: number
  name: string
  logo: string
  location: string
  tags: string[]
  jobCount: number
  size?: string
  rating?: number
}

