import { VoiceType } from "./components/Voice/Voice.types"
import { waveforms } from "./content/data"

type OscGain = {
  oscillator  : OscillatorNode, 
  gain        : GainNode
}

type VoicesRef = { current: VoiceType[] }

type RunningRef = { current: boolean }

type Waveform = typeof waveforms[number]

export type {
  Waveform,
  OscGain,
  RunningRef, 
  VoicesRef
}