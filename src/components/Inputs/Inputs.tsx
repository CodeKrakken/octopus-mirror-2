import { checkboxGroups, attributes }  from "../../content/data";
import { InputsProps } from "./Inputs.types";
import CheckboxGroup               from "../CheckboxGroup/CheckboxGroup";
import SingleSlider from "../SingleSlider/SingleSlider";
import "./Inputs.css";
import Field from "../Field/Field";
import DoubleSlider from "../DoubleSlider/DoubleSlider";

export default function Inputs(
  { 
    i,
    voices,
    setVoices
  }: InputsProps) {

  return <>
    <div className="column">
      <div className="row">
        <div className="column">
          {
            Object.keys(attributes).map(attrName => <div className="row">
              <div className="label">{attributes[attrName as keyof typeof attributes].label}</div>
                {  
                  attributes[attrName as keyof typeof attributes].inputType === 'rangeSlider' 
                    ?
                      <DoubleSlider
                        attrName={attrName}
                        i={i}
                        voices={voices}
                        setVoices={setVoices}
                        key={attrName}      
                      />
                    :
                  attributes[attrName as keyof typeof attributes].inputType === 'singleValueSlider'
                    ?
                      <SingleSlider
                        attrName={attrName}
                        i={i}
                        voices={voices}
                        setVoices={setVoices}
                        key={attrName}
                      />
                    :
                  attributes[attrName as keyof typeof attributes].inputType === 'textbox'
                    ?
                      <Field
                        attrName={attrName}
                        i={i}
                        voices={voices}
                        setVoices={setVoices}
                        key={attrName}
                      />
                    :
                  <></>
                }
            </div>)
          }
        </div>
      </div>
      <div className="row">
        <div className="column">
          {
            Object.keys(checkboxGroups).map(checkboxGroup =>
              <CheckboxGroup 
                groupName={checkboxGroup}
                voices={voices}
                i={i}
                setVoices={setVoices}
                key={checkboxGroup}
              />
            )
          }
        </div>
      </div>
    </div>
  </>
}