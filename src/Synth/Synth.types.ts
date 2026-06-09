import { VoiceType } from "../components/Voice/Voice.types"

type VoicesRef = { current: VoiceType[] }

type OscGain = {
  oscillator  : OscillatorNode, 
  gain        : GainNode
}

export type {
  VoicesRef,
  OscGain
}