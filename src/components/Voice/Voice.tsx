import { VoiceProps } from './Voice.types'
import DeleteButton   from '../DeleteButton/DeleteButton'
import TextField from '../TextField/TextField'
import { doubleSliders, singleSliders } from '../../content/data'
import Input from '../Input/Input'

export default function Voice(
  {
    i, 
    voices,  
    handleDelete,
    setVoices,
    dataAttribute
  }: VoiceProps
) {
  
  return (
<div className="voice">

  <div className="row">
    <div className="label block">Label</div>
    <div className="single block">BPM</div>
    <div className="single block">Rest</div>
    <div className="delete block">X</div>
  </div>

  <div className="row">
    <div className="double block">Length</div>
    <div className="double block">Offset</div>
    <div className="double block">Detune</div>
  </div>

  <div className="row">
    <div className="double block">Level</div>
    <div className="double block">Attack</div>
    <div className="double block">Decay</div>
  </div>

  <div className="notes block">Notes</div>

  <div className="octaves block">Octaves</div>

  <div className="bottom">
    <div className="sounds block">Sounds</div>
    <div className="intervals block">Intervals</div>
  </div>

</div>
    // <div 
    //   className="voice" 
    //   data-voice={i}
    //   data-attribute={dataAttribute}
    // >
    //   <div className="row">
    //     <DeleteButton
    //       handleDelete={handleDelete}
    //       i={i}
    //     />

    //     <TextField 
    //       attrName  = {'label'}
    //       i         = {i}
    //       voices    = {voices}
    //       setVoices = {setVoices}
    //     />

    //     {
    //       Object.keys(singleSliders).map(attrName => (
    //         <Input 
    //           attrName={attrName}
    //           i={i}
    //           voices={voices}
    //           setVoices={setVoices}
    //         />
    //       ))
    //     }
    //   </div>

    //   <div className="row">
    //     <div className="column">
    //       {
    //         Object.keys(doubleSliders).map(attrName => (
    //           <Input 
    //             attrName={attrName}
    //             i={i}
    //             voices={voices}
    //             setVoices={setVoices}
    //           />
    //         ))
    //       }
    //     </div>
    //   </div>
    // </div>
  )
}