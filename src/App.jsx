import { useState } from 'react'
import './App.css'
import MainScreen from './pages/MainScreen'
import GenerateTopic from './pages/GenerateTopic'
import StartRecording from './pages/StartRecording'
import GenerateSummary from './pages/GenerateSummary'
import Result from './pages/Result'
import Header from './components/Header'


function App() {
  
  const [state,setState] = useState("mainscreen")
  const [topic,setTopic]=useState("")

  function changeState(newState){
    setState(newState)
  }

  function setNewTopic(newTopic){
    setTopic(newTopic)
  }
  return (
    <>
      <Header/>
      {state === "mainscreen" && <MainScreen state={state} changeState={changeState}/>}
      {state === "generatetopic" && <GenerateTopic state={state} changeState={changeState} topic={topic} setNewTopic={setNewTopic}/>}
      {state === "startrecording" && <StartRecording  changeState={changeState} topic={topic}/>}
      {state === "generatesummary" && <GenerateSummary  changeState={changeState} topic={topic}/>}
      {state === "result" && <Result  changeState={changeState}/>}
      
    </>
  )
}

export default App
