import { fields } from "../../content/data";  
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
  const f = fields[fieldName as keyof typeof fields]  
  
  const props: InputProps = {  
    className: 'textbox',  
    'data-voice': i,  
    'data-attribute': `${f.value}`,  
    type: 'number',  
    value: voice[f.value as Atom],  
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => updateField(e, f.value as Atom, voices, i, setVoices)  
  }  
  
  // For range inputs, extract min and max values from voice  
  const rangeValue = f.input === 'range'   
    ? [voice[`min${f.value}` as Atom], voice[`max${f.value}` as Atom]] as [number, number]  
    : undefined;  
  
  const handleRangeInput = (values: [number, number]) => {  
    // Update both min and max values when slider changes  
    const updatedVoices = [...voices];  
    updatedVoices[i][`min${f.value}` as Atom] = values[0];  
    updatedVoices[i][`max${f.value}` as Atom] = values[1];  
    setVoices(updatedVoices);  
  };  
  
  return <>  
    <div className="row">  
      <div className="label">{f.label}</div>  
      {  
        f.input === 'range' ? <>  
          <RangeSlider  
            value={rangeValue}  
            onInput={handleRangeInput}  
          />  
        </> : <>  
          <input {...props} />  
        </>  
      }  
    </div>  
  </>  
}