import { attributes } from "../../content/data";
import { InputProps } from "../Input/Input.types";
import { updateField } from "../Inputs/Inputs.functions";
import { Atom } from "../shared.types";
import { VoiceType } from "../Voice/Voice.types";

type FieldProps = {
  fieldName: string,
  i: number,
  voices: VoiceType[],
  setVoices: React.Dispatch<React.SetStateAction<VoiceType[]>>
}

export default function Field ({
  fieldName,
  i,
  voices,
  setVoices
}: FieldProps) {

  const voice = voices[i]

  const f = attributes[fieldName as keyof typeof attributes]
  
  const props: InputProps = {
    className: 'textbox',
    'data-voice': i,
    'data-attribute': `${f.value}`,
    type: 'number',
    value: voice[f.value as Atom],
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => updateField(e, f.value as Atom, voices, i, setVoices)
  }

  return <div className="row">
    <input {...props} />
  </div>
}