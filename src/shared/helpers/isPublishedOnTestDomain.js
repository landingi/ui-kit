/**
 * isPublishedOnTestDomain - check the domain is testing & published
 * @function isPublishedOnTestDomain
 * @param {bool} isPublished
 * @param {string} domain
 * @return {bool} return true or false
 */
export const isPublishedOnTestDomain = (isPublished, domain) => {
  const autoDomain = domain.includes('pagepreview.link')
  const legacyAutoDomain = domain.includes('landpage.co')
  const localAutoDomain = domain.includes('lp.landingi.it')
  const localLegacyAutoDomain = domain.includes('lp.landingi.it')
  const custreamDomain = domain.includes('custream.com')

  return isPublished && (localAutoDomain || localLegacyAutoDomain || autoDomain || legacyAutoDomain || custreamDomain)
}
