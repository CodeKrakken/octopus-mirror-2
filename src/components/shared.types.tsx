import { ranges } from "../content/data"

type Range = typeof ranges[number]

type Atom = 
  'bpm'
| 'restChance'
| `min${Range}`
| `max${Range}`

type CheckboxGroupType = 
  'Notes' 
| 'Octaves' 
| 'Intervals'
| 'Sounds' 

export type {
  Atom,
  Range,
  CheckboxGroupType
}