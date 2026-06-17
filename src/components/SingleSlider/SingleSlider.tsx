import { attributes } from "../../content/data";  
import { Atom } from "../shared.types";  
import { VoiceType } from "../Voice/Voice.types";  
import RangeSlider from 'react-range-slider-input';  
import 'react-range-slider-input/dist/style.css';  
import { useState } from "react";
import "./SingleSlider.css";
  
type SingleSliderProps = {  
  attrName: string,  
  i: number,  
  voices: VoiceType[],  
  setVoices: React.Dispatch<React.SetStateAction<VoiceType[]>>,
}  
  
export default function SingleSlider ({  
  attrName,  
  i,    
  voices,  
  setVoices,
}: SingleSliderProps) {  
  
  const [val, setVal] = useState(voices[i][attrName as Atom]);
        
  const handleInput = (values: [number, number]) => {  
    const updatedVoices = [...voices];  
    updatedVoices[i][attrName as Atom] = values[1];  
    setVoices(updatedVoices);
    setVal(values[1])  
  };  
  
  return <div className="single slider">    
    <RangeSlider  
      min={0}  
      max={100}  
      value={[0, val]}  
      thumbsDisabled={[true, false]}  
      rangeSlideDisabled={true}  
      onInput={handleInput}  
    />
  </div>
}