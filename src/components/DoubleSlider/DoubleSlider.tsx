import { Atom } from "../shared.types";  
import { VoiceType } from "../Voice/Voice.types";  
import RangeSlider from 'react-range-slider-input';  
import 'react-range-slider-input/dist/style.css';  
    
export default function DoubleSlider ({  

  attrName,  
  i,  
  voices,  
  setVoices  

}: {  
  
  attrName: string,  
  i: number,  
  voices: VoiceType[],  
  setVoices: React.Dispatch<React.SetStateAction<VoiceType[]>>,

}) {  
  
  const voice = voices[i]  
    
  type RangeValue = [number, number]
  
  const rangeValue: RangeValue = [
    voice[`min${attrName}` as Atom], 
    voice[`max${attrName}` as Atom]
  ]
    
  const handleRangeInput = (values: RangeValue) => {  
    const updatedVoices = [...voices];  
    updatedVoices[i][`min${attrName}` as Atom] = values[0];  
    updatedVoices[i][`max${attrName}` as Atom] = values[1];  
    setVoices(updatedVoices);  
  };  
  
  return (  
    <div className="slider">  
      <RangeSlider  
        value={rangeValue}  
        onInput={handleRangeInput}  
      />   
    </div>  
  )  
}