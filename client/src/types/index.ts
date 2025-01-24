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
  
  