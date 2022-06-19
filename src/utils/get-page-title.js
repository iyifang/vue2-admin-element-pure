import defaultSettings from '@/settings'

const title = defaultSettings.title || 'vue2 Admin Element prue'

export default function getPageTitle (pageTitle) {
  if (pageTitle)
  {
    return `${pageTitle}-${title}`
  }
  return `${title}`
}