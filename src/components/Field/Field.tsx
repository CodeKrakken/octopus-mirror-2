import { updateField } from "../Inputs/Inputs.functions";
import { Atom } from "../shared.types";
import { VoiceType } from "../Voice/Voice.types";

export default function Field ({

  attrName,
  i,
  voices,
  setVoices

} : {

  attrName: string,
  i: number,
  voices: VoiceType[],
  setVoices: React.Dispatch<React.SetStateAction<VoiceType[]>>

}) {

  const voice = voices[i]
  
  const props = {
    className: 'textbox',
    'data-voice': i,
    'data-attribute': {attrName},
    type: 'number',
    value: voice[attrName as Atom],
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => updateField(e, attrName as Atom, voices, i, setVoices)
  }

  return <div className="row">
    <input {...props} />
  </div>
}