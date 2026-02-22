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

  const [responseData,setResponseData]=useState(null)

  const [aiResponse,setAiResponse]=useState("")
  const [generatedTranscript,setGeneratedTranscript]=useState("")
  function changeState(newState){
    setState(newState)
  }

  function setNewTopic(newTopic){
    setTopic(newTopic)
  }
  return (
    <>
      <Header changeState={changeState}/>
      {state === "mainscreen" && <MainScreen state={state} changeState={changeState}/>}
      {state === "generatetopic" && <GenerateTopic state={state} changeState={changeState} topic={topic} setNewTopic={setNewTopic}/>}
      {state === "startrecording" && <StartRecording  changeState={changeState} topic={topic} setResponseData={setResponseData}/>}
      {state === "generatesummary" && <GenerateSummary  changeState={changeState} topic={topic} responseData={responseData} setGeneratedTranscript={setGeneratedTranscript} setAiResponse={setAiResponse}/>}
      {state === "result" && <Result  changeState={changeState} aiResponse={aiResponse} topic={topic} generatedTranscript={generatedTranscript}/>}
      
    </>
  )
}

export default App
