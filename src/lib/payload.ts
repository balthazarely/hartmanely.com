const PAYLOAD_API_URL = process.env.PAYLOAD_API_URL || 'https://hei-cms.vercel.app'

function resolveImageUrl(url: string): string {
  if (!url) return url
  if (url.startsWith('http')) return url
  // Strip "undefined/" prefix produced when CMS S3_BASE_URL env var is missing
  const path = url.replace(/^undefined\//, '/')
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return `${PAYLOAD_API_URL}${normalizedPath}`
}

export interface PayloadImage {
  url: string
  width?: number
  height?: number
  alt?: string
}

export interface Project {
  id: string
  title: string
  slug: string
  type: string
  location?: string
  tagline?: string
  heroImage: PayloadImage
  thumbnail?: PayloadImage
  logo?: PayloadImage
  completedDate?: string
  size?: string
  projectType?: string
  showSidePanel?: boolean
  description?: any
  awards?: { awardName: string; link?: string }[]
  media?: { mediaName: string; link?: string }[]
  gallery?: { image: PayloadImage; title?: string; description?: string }[]
  meta?: { title?: string; description?: string }
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const res = await fetch(
    `${PAYLOAD_API_URL}/api/projects?where[slug][equals]=${slug}&depth=2&limit=1`
  )
  if (!res.ok) return null
  const data = await res.json()
  const project: Project = data.docs?.[0] ?? null
  if (!project) return null
  project.heroImage.url = resolveImageUrl(project.heroImage.url)
  if (project.logo?.url) project.logo.url = resolveImageUrl(project.logo.url)
  project.gallery?.forEach((g) => {
    g.image.url = resolveImageUrl(g.image.url)
  })
  return project
}

export interface HomePage {
  hero: {
    image: PayloadImage
    eyebrow?: string
    heading: string
    ctaLabel?: string
    ctaLink?: string
  }
  mission: {
    statement: string
  }
  about: {
    image: PayloadImage
    heading: string
    body: string
  }
  portfolio: {
    categories: {
      image: PayloadImage
      heading: string
      body: string
      link: string
    }[]
  }
  meta?: { title?: string; description?: string }
}

export async function getHomePage(): Promise<HomePage | null> {
  const res = await fetch(`${PAYLOAD_API_URL}/api/globals/home-page?depth=2`)
  if (!res.ok) return null
  const data: HomePage = await res.json()
  data.hero.image.url = resolveImageUrl(data.hero.image.url)
  data.about.image.url = resolveImageUrl(data.about.image.url)
  data.portfolio.categories.forEach((cat) => {
    cat.image.url = resolveImageUrl(cat.image.url)
  })
  return data
}

export interface AboutPage {
  heroImage: PayloadImage
  heading: string
  subheading?: string
  body?: any
  team?: {
    name: string
    photo: PayloadImage
    bio: string
    linkedInLink?: string
  }[]
  meta?: { title?: string; description?: string }
}

export async function getAboutPage(): Promise<AboutPage | null> {
  const res = await fetch(`${PAYLOAD_API_URL}/api/globals/about-page?depth=2`)
  if (!res.ok) return null
  const data: AboutPage = await res.json()
  data.heroImage.url = resolveImageUrl(data.heroImage.url)
  data.team?.forEach((member) => {
    member.photo.url = resolveImageUrl(member.photo.url)
  })
  return data
}

export interface CategoryPages {
  allProjects?: { heroImage?: PayloadImage }
  redevelopment?: { heroImage?: PayloadImage }
  consulting?: { heroImage?: PayloadImage }
  renewableEnergy?: { heroImage?: PayloadImage }
}

export async function getCategoryPages(): Promise<CategoryPages | null> {
  const res = await fetch(`${PAYLOAD_API_URL}/api/globals/category-pages?depth=2`)
  if (!res.ok) return null
  const data: CategoryPages = await res.json()
  if (data.allProjects?.heroImage?.url) data.allProjects.heroImage.url = resolveImageUrl(data.allProjects.heroImage.url)
  if (data.redevelopment?.heroImage?.url) data.redevelopment.heroImage.url = resolveImageUrl(data.redevelopment.heroImage.url)
  if (data.consulting?.heroImage?.url) data.consulting.heroImage.url = resolveImageUrl(data.consulting.heroImage.url)
  if (data.renewableEnergy?.heroImage?.url) data.renewableEnergy.heroImage.url = resolveImageUrl(data.renewableEnergy.heroImage.url)
  return data
}

export interface SiteSettings {
  logo?: PayloadImage
}

export async function getSiteSettings(): Promise<SiteSettings | null> {
  const res = await fetch(`${PAYLOAD_API_URL}/api/globals/site-settings?depth=2`)
  if (!res.ok) return null
  const data: SiteSettings = await res.json()
  if (data.logo?.url) data.logo.url = resolveImageUrl(data.logo.url)
  return data
}

export interface NavSubmenuItem {
  name: string
  link: string
  location: string
}

export interface NavCategory {
  title: string
  submenu: NavSubmenuItem[]
}

export async function getNavProjects(): Promise<NavCategory[]> {
  const res = await fetch(
    `${PAYLOAD_API_URL}/api/projects?depth=0&limit=100&sort=order`
  )
  if (!res.ok) return []
  const data = await res.json()

  const categories: Record<string, { title: string; items: NavSubmenuItem[] }> = {
    redevelopment: { title: 'Redevelopment', items: [] },
    consulting: { title: 'Consulting', items: [] },
    'renewable-energy': { title: 'Renewable Energy', items: [] },
  }

  for (const p of data.docs) {
    if (!categories[p.type]) continue
    categories[p.type].items.push({
      name: p.title,
      link: `/${p.type}/${p.slug}`,
      location: p.location || '',
    })
  }

  return Object.values(categories).map(({ title, items }) => ({
    title,
    submenu: items,
  }))
}

export interface ProjectGridItem {
  name: string
  thumbnail: string
  type: string
  link: string
}

export async function getProjectsForGrid(type?: string): Promise<ProjectGridItem[]> {
  const typeFilter = type ? `&where[type][equals]=${type}` : ''
  const res = await fetch(
    `${PAYLOAD_API_URL}/api/projects?depth=1&limit=100&sort=order${typeFilter}`
  )
  if (!res.ok) return []
  const data = await res.json()
  return data.docs.map((p: any) => {
    const imgUrl = p.thumbnail?.url || p.heroImage?.url || ''
    return {
      name: p.title,
      thumbnail: resolveImageUrl(imgUrl),
      type: p.type,
      link: `/${p.type}/${p.slug}`,
    }
  })
}

export async function getProjectSlugsByType(type: string): Promise<string[]> {
  const res = await fetch(
    `${PAYLOAD_API_URL}/api/projects?where[type][equals]=${type}&depth=0&limit=100`
  )
  if (!res.ok) return []
  const data = await res.json()
  return data.docs.map((p: { slug: string }) => p.slug)
}
