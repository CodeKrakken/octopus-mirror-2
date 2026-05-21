import './App.css';
import { useEffect, useRef, useState }  from 'react';
import Voice                            from './components/Voice/Voice';
import { VoiceType }                    from './components/Voice/Voice.types'
import Header                           from './components/Header/Header';
import { setUpVoice }                   from './App.functions';
import { Synth }                        from './Synth/Synth';


function App() {

  // state

  const [voices,  setVoices] = useState<VoiceType[]>([])
  const [running, setRunning] = useState<boolean>(false)

  // refs

  const runningRef = useRef(false)
  const voicesRef = useRef(voices)

  // effect

  useEffect(() => { 

    voicesRef.current = voices
    if (!voices.length) toggleRunning(false)   

  }, [voices])

  // functions

  const handleAddVoice = () => {
    const newVoice = setUpVoice(voices[voices.length - 1])
    setVoices(voices => [voices, newVoice].flat())
    Synth.add(newVoice, running, runningRef, voicesRef)
  }

  const handleDelete = (i: number) => {
    const voice = voices[i]
    voice.isActive = false
    setVoices(voices => voices.filter((voice, j) => j !== i))
    Synth.delete(i)
  }

  const handleStartStop = () => runningRef.current ? stopAll(voices) : start()

  const start = async () => {
    toggleRunning(true)
    Synth.start(runningRef, voicesRef)
  }

  const stopAll = (voices: VoiceType[]) => {
    toggleRunning(false)
    Synth.stop()
  }

  const toggleRunning = (state: boolean) => {
    runningRef.current = state
    setRunning(state)
  }

  return <>
    <br />
    <Header 
      handleStartStop = {handleStartStop}
      running         = {running}
      handleAddVoice  = {handleAddVoice}
      showStart       = {Boolean(voices.length)}
    />

    <br />
    <br />
    {
      voices.map((voice, i) => 
        <div key={i}>
          <Voice
            i             = {i} 
            setVoices     = {setVoices} 
            voices        = {voices}
            handleDelete  = {handleDelete}
            dataAttribute = "Voices"
          />
        </div>
      )
    }
  </>
}

export default App;
