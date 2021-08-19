import { Playground, Props } from 'docz'
import ProgressBar from '@components/ui/ProgressBar'

# ProgressBar

<Props of={ProgressBar} />

## Normal

<Playground>
  <ProgressBar 
    variant='success' 
    quantity={90} 
    limit={100} />
  <ProgressBar 
    variant='warning' 
    quantity={100} 
    limit={100} />
  <ProgressBar 
    variant='alert' 
    quantity={110} 
    limit={100} />
</Playground>

## Exceeded info

<Playground>
  <ProgressBar 
    variant='success'
    quantity={90} 
    limit={100} 
    limitExceededInfo
    limitText='statistics.unique-users'/>
</Playground>

## Limit

<Playground>
  <ProgressBar 
    variant='success'
    quantity={90} 
    limit={100} 
    showColorNumber />
</Playground>

## Limit dropdown

<Playground>
  <ProgressBar 
    variant='success'
    quantity={90} 
    limit={100} 
    barSize='small'
    showDropdownResult
    limitText='statistics.unique-users' />
</Playground>
