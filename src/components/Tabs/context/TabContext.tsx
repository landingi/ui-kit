import { createContext, FC, useContext, useState } from 'react'

const useTab = ({ initialValue }: { initialValue: string }) => {
  const [activeTab, changeTab] = useState(initialValue)

  return {
    activeTab,
    changeTab
  }
}

type ProviderProps = {
  children: React.ReactNode
  initialValue: string
}

type TabContextType = ReturnType<typeof useTab>

const TabContext = createContext<TabContextType | null>(null)

export const TabProvider: FC<ProviderProps> = ({ children, initialValue }) => {
  const value = useTab({ initialValue })

  return <TabContext.Provider value={value}>{children}</TabContext.Provider>
}

export const useTabContext = () => {
  const value = useContext(TabContext)

  if (!value) {
    throw new Error('useTabContext must be used inside TabProvider')
  }

  return value
}
