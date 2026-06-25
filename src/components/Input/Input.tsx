import { attributes } from "../../content/data"
import DoubleSlider from "../DoubleSlider/DoubleSlider"
import { Slider } from "../shared.types"
import SingleSlider from "../SingleSlider/SingleSlider"
import { VoiceType } from "../Voice/Voice.types"

export default function Input({

  slider,
  i,
  voices,
  setVoices

}: {

  slider: Slider,
  i: number,
  voices: VoiceType[],
  setVoices: React.Dispatch<React.SetStateAction<VoiceType[]>>
  
}) {

  const props = {
    slider: slider,
    i: i,
    voices: voices,
    setVoices: setVoices,
  }

  const inputType = slider.inputType

  let input

  switch(inputType) {
    case 'doubleSlider' : input = <DoubleSlider {...props} />; break;
    case 'singleSlider' : input = <SingleSlider {...props} />; break;
    default: <></>
  }

  return <>{input}</>
}