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

  function changeState(newState){
    setState(newState)
  }
  return (
    <>
      <Header/>
      {state === "mainscreen" && <MainScreen state={state} changeState={changeState}/>}
      {state === "generatetopic" && <GenerateTopic state={state} changeState={changeState}/>}
      {state === "startrecording" && <StartRecording state={state} changeState={changeState}/>}
      {state === "generatesummary" && <GenerateSummary state={state} changeState={changeState}/>}
      {state === "result" && <Result state={state} changeState={changeState}/>}
      
    </>
  )
}

export default App
