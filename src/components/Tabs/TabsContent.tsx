import { cloneElement, FC, ReactElement } from 'react'

import { useTabContext } from './context'

interface TabsContentProps {
  children: ReactElement
}

export const TabsContent: FC<TabsContentProps> = ({ children }) => {
  const { changeTab } = useTabContext()

  return cloneElement(children, { changeTab })
}

TabsContent.displayName = 'TabsContent'
