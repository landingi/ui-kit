import { useState, useEffect } from 'react'
import { throttle } from 'shared/helpers/events'
import { isInViewVertical } from 'shared/helpers/position'

export default ({
  activeSectionDefault = 0,
  sectionElementRefs = []
}) => {
  const [activeSection, setActiveSection] = useState(activeSectionDefault)
  const handle = () => {
    let currentSectionId = activeSection

    sectionElementRefs.map((item) => {
      const section = sectionElementRefs[item].current

      if (isInViewVertical(section)) {
        currentSectionId = item
      }
    })

    setActiveSection(currentSectionId)
  }

  useEffect(() => {
    window.addEventListener('scroll', throttle(handle, 500))

    return () => {
      window.removeEventListener('scroll', handle)
    }
  }, [sectionElementRefs])

  return activeSection
}
