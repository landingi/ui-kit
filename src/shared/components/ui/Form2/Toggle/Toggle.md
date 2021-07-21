Without label
```jsx
import { Toggle } from './Toggle'
import React, { useState } from 'react'
const [checked, setChecked] = useState(false)

;<Toggle checked={checked} onChange={() => setChecked(!checked)} />
```
Disabled checked
```jsx
import { Toggle } from './Toggle'
import React from 'react'

;<Toggle checked={true} disabled/>
```
Disabled unchecked
```jsx
import { Toggle } from './Toggle'
import React from 'react'

;<Toggle checked={false} disabled/>
```