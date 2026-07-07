import { MouseEventHandler, useEffect, useState } from 'react'
import { title, addLabel } from '../../content/data'
import { VoiceType } from '../Voice/Voice.types'
import './Header.css'

export default function Header ({

  handleAddVoice,
  handleStartStop,
  disableButtons,
  running,
  voices,
  loadVoices

} : {

  handleAddVoice    : React.MouseEventHandler<HTMLButtonElement>,
  handleStartStop   : React.MouseEventHandler<HTMLButtonElement>,
  disableButtons    : Boolean,
  running           : Boolean,
  voices            : VoiceType[],
  loadVoices        : MouseEventHandler<HTMLButtonElement>
}) {

  const [disableLoad, setDisableLoad] = useState(false)

  useEffect(() => {
    console.log('using effect')
    if (localStorage.voices) {
      setDisableLoad(false)
    } else {
      setDisableLoad(true)
    }
  }, [])

  const font = (string: string, height: string = "40px") => {

    const imageArray = string.split('').map(letter => 
      /^[A-Z0-9]*$/.test(letter.toUpperCase()) ? require(`../../content/font-images/${letter.toUpperCase()}.png`) : letter
    )

    return (
      <div>
        {
          imageArray.map(image => 
            <img alt="" src={image} height={height} />
          )
        }
      </div>
    )
  }

  const handleSave = () => {
    localStorage.voices = JSON.stringify(voices)
  }

  const buttonLabelHeight = "20px"

  return (
      <div className="column">
        <div className="header">

        {font(title, '50px')}
        <div>
          <button 
            value={addLabel}
            onClick={handleAddVoice}
          >
            {font(addLabel, buttonLabelHeight)}
          </button>
              
          <button 
            onClick={handleStartStop}
            disabled={disableButtons as boolean}
          >
            {font(running ? 'Stop' : 'Start', buttonLabelHeight)}
          </button>

          <button
            onClick={handleSave}
            disabled={disableButtons as boolean}
          >
            <div style={{"margin": "auto auto;"}}></div>
            {font('Save', buttonLabelHeight)}
          </button>
          <button
            onClick={loadVoices}
            disabled={disableLoad as boolean}
          >
            {font('Load', buttonLabelHeight)}
          </button>
        </div>
        
      </div>
    </div>
  )
}