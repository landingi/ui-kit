import LoaderDefault from '@components/Loader'
import { FC } from 'react'

interface LoaderProps {
  colSpan: number
}

export const Loader: FC<LoaderProps> = ({ colSpan }) => (
  <tbody>
    <tr>
      <td colSpan={colSpan}>
        <LoaderDefault />
      </td>
    </tr>
  </tbody>
)
