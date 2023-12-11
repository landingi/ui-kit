import { useUpdateEffect } from '@helpers/hooks/useUpdateEffect'
import { createContext, FC, useContext, useState } from 'react'

const useTab = ({
  initialValue,
  changeTabValue
}: {
  initialValue: string
  changeTabValue: string
}) => {
  const [activeTab, changeTab] = useState(initialValue)

  useUpdateEffect(() => {
    if (changeTabValue !== '') {
      changeTab(changeTabValue)
    }
  }, [changeTabValue])

  return {
    activeTab,
    changeTab
  }
}

type ProviderProps = {
  children: React.ReactNode
  initialValue: string
  changeTabValue: string
}

type TabContextType = ReturnType<typeof useTab>

const TabContext = createContext<TabContextType | null>(null)

export const TabProvider: FC<ProviderProps> = ({
  children,
  initialValue,
  changeTabValue
}) => {
  const value = useTab({ initialValue, changeTabValue })

  return <TabContext.Provider value={value}>{children}</TabContext.Provider>
}

export const useTabContext = () => {
  const value = useContext(TabContext)

  if (!value) {
    throw new Error('useTabContext must be used inside TabProvider')
  }

  return value
}
