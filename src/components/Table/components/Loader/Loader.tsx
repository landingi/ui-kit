import LoaderDefault from '@components/Loader'
import { FC } from 'react'

interface LoaderProps {
  colSpan: number
}

export const Loader: FC<LoaderProps> = ({ colSpan }) => (
  <div>
    <div>
      <div /* colSpan={colSpan} */>
        <LoaderDefault />
      </div>
    </div>
  </div>
)
