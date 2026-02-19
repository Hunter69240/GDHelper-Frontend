import React from 'react'

const StartRecording = ({state,changeState}) => {
  return (
    <div>StartRecording
        <button onClick={()=>changeState("generatesummary")}>Change</button>
    </div>
  )
}

export default StartRecording