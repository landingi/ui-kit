Normal
```jsx
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
```

Exceeded info
```jsx
  <ProgressBar 
    variant='success'
    quantity={90} 
    limit={100} 
    limitExceededInfo
    limitText='statistics.unique-users'/>
```

Limit
```jsx
  <ProgressBar 
    variant='success'
    quantity={90} 
    limit={100} 
    showColorNumber />
```
Limit dropdown
```jsx
  <ProgressBar 
    variant='success'
    quantity={90} 
    limit={100} 
    barSize='small'
    showDropdownResult
    limitText='statistics.unique-users' />
```
