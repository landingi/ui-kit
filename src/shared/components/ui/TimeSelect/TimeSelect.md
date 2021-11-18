import { Playground, Props } from 'docz'
import TimeSelect from '@components/ui/TimeSelect'

# Time Select

<Props of={TimeSelect} />

<Playground>
  <TimeSelect label="Example of time select" value="12:00" onChange={value => console.log(value)} />
</Playground>