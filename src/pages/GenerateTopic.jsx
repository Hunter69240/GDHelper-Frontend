import React from 'react'

const GenerateTopic = ({state,changeState}) => {
  return (
    <div>
        GenerateTopic
        <button onClick={()=>changeState("startrecording")}>Change</button>
    </div>
  )
}

export default GenerateTopic