import { useEffect, useRef } from "react";
import { attributes } from "../../content/data";  
import { Atom } from "../shared.types";  
import { VoiceType } from "../Voice/Voice.types";  
import RangeSlider, { ReactRangeSliderInputRef } from 'react-range-slider-input';  
import 'react-range-slider-input/dist/style.css';  
import { doubleSliders } from "../../content/data";

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

  const sliderRef = useRef<ReactRangeSliderInputRef>(null);

  useEffect(() => {     
    sliderRef.current!.thumb.lower.dataset.label = String(rangeValue[0]);  
    sliderRef.current!.thumb.upper.dataset.label = String(rangeValue[1]);  
  });
  
  const voice = voices[i]  
  const attr = attributes[attrName as keyof typeof attributes]  
  const {min, max} = doubleSliders[attrName as keyof typeof doubleSliders]

  const rangeValue = [
    voice[`min${attr.value}` as Atom], 
    voice[`max${attr.value}` as Atom]
  ] as [number, number]
  

  const handleRangeInput = ([lo, hi]: [number, number]) => {    
    
    const lowerThumb = sliderRef.current!.thumb.lower;  
    const upperThumb = sliderRef.current!.thumb.upper;  
    lowerThumb.dataset.label = String(lo);  
    upperThumb.dataset.label = String(hi);  
    
    const updatedVoices = [...voices];   

    updatedVoices[i][`min${attr.value}` as Atom] = lo;    
    updatedVoices[i][`max${attr.value}` as Atom] = hi;    
    setVoices(updatedVoices);    
  };

  const props = {
    ref: sliderRef,
    min: min,  
    max: max,    
    value: rangeValue,  
    onInput: handleRangeInput,
    'data-attribute': attrName
  }
  
  return (  
    <div className="slider">
      <RangeSlider {...props} />   
    </div>  
  )  
}