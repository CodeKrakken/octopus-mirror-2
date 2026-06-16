import { attributes } from "../../content/data";  
import { InputProps } from "../Input/Input.types";  
import { updateField } from "../Inputs/Inputs.functions";  
import { Atom } from "../shared.types";  
import { VoiceType } from "../Voice/Voice.types";  
import RangeSlider from 'react-range-slider-input';  
import 'react-range-slider-input/dist/style.css';  
  
type FieldProps = {  
  fieldName: string,  
  i: number,  
  voices: VoiceType[],  
  setVoices: React.Dispatch<React.SetStateAction<VoiceType[]>>,
  defaultValue: [number, number]  
}  
  
export default function Slider ({  
  fieldName,  
  i,  
  voices,  
  setVoices  
}: FieldProps) {  
  
  const voice = voices[i]  
  const a = attributes[fieldName as keyof typeof attributes]  
  
  const props: InputProps = {  
    className: 'textbox',  
    'data-voice': i,  
    'data-attribute': `${a.value}`,  
    type: 'number',  
    value: voice[a.value as Atom],  
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => updateField(e, a.value as Atom, voices, i, setVoices)  
  }  
  
  // For range inputs, extract min and max values from voice  
  const rangeValue = [
    voice[`min${a.value}` as Atom], 
    voice[`max${a.value}` as Atom]
  ] as [number, number]  
  
  console.log(rangeValue)
  
  const handleRangeInput = (values: [number, number]) => {  
    // Update both min and max values when slider changes  
    const updatedVoices = [...voices];  
    updatedVoices[i][`min${a.value}` as Atom] = values[0];  
    updatedVoices[i][`max${a.value}` as Atom] = values[1];  
    setVoices(updatedVoices);  
  };  
  
  return <>  
    <div className="slider">  
      <RangeSlider  
        value={rangeValue}  
        onInput={handleRangeInput}  
      />   
    </div>  
  </>  
}