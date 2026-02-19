import React from 'react'

const MainScreen = ({state,changeState}) => {
  return (
    <div>
        MainScreen

        <button onClick={()=>changeState("generatetopic")}>Change</button>
    </div>
  )
}

export default MainScreen