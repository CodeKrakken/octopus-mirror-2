import { attributes } from "../../content/data";
import { InputProps } from "../Input/Input.types";
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

  const attr = attributes[attrName as keyof typeof attributes]
  
  const props: InputProps = {
    className: 'textbox',
    'data-voice': i,
    'data-attribute': `${attr.value}`,
    type: 'number',
    value: voice[attr.value as Atom],
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => updateField(e, attr.value as Atom, voices, i, setVoices)
  }

  return <div className="row">
    <input {...props} />
  </div>
}