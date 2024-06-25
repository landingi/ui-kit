import { Dispatch, FC, Fragment, SetStateAction } from 'react'

import { useTabContext } from './context'

interface TabsContentProps {
  children: FC<{ changeTab?: Dispatch<SetStateAction<string>> }>
}

export const TabsContent: FC<TabsContentProps> = ({ children }) => {
  const { changeTab } = useTabContext()

  return <Fragment>{children({ changeTab })}</Fragment>
}

TabsContent.displayName = 'TabsContent'
