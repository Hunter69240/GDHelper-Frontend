import React from 'react'

const GenerateSummary = ({state,changeState}) => {
  return (
    <div>GenerateSummary
        <button onClick={()=>changeState("result")}>Change</button>
    </div>
  )
}

export default GenerateSummary