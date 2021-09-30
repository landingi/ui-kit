import { isInViewVertical } from '@helpers/position'
import { throttle } from '@helpers/events'
import { useEffect, useState } from 'react'

export default ({
  activeSectionDefault = 0,
  sectionElementRefs = []
}) => {
  const [activeSection, setActiveSection] = useState(
      activeSectionDefault
    ),
    handle = () => {
      let currentSectionId = activeSection

      sectionElementRefs.map(item => {
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
