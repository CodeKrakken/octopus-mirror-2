import { VoiceType } from "../components/Voice/Voice.types"

type VoicesRef = { current: VoiceType[] }

type RunningRef = { current: boolean }

type OscGain = {
  oscillator  : OscillatorNode, 
  gain        : GainNode
}

export type {
  RunningRef, 
  VoicesRef,
  OscGain
}