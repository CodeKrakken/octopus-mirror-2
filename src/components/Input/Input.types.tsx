import { ChangeEventHandler } from "react"

type SliderProps = {
  // className        : string  
  // 'data-voice'     : number
  // 'data-attribute' : string
  // type             : string
  defaultValue?       : [number, number]
  // onChange         : ChangeEventHandler
  // checked?         : boolean
  // key?             : string
  min?                : number
  max?                : number
}

export type { 
  SliderProps
}