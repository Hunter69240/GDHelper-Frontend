import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import api from '../services/api';
const GenerateTopic = ({state,changeState,topic,setNewTopic}) => {
  const [error,setError] = useState("")

  const fetchTopic = async () =>{
    setError("")
    try{
        const response = await api.get("/topic")
        setNewTopic(response.data.Topic)
        changeState("startrecording")
    }catch(err){
        setError(err.response?.data?.error || "Error generating topic")
    }
  }
  return (
    <div>
        <Box
        sx={{
          backgroundColor: "#CFD2D5",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
        >
          <Box
            sx={{
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection:'column',
            gap:3
          }}
          >
              {error && <Typography>{error}</Typography>}
              <Typography>{topic || "Click on the button to generate a topic"}</Typography>
              <Button
              variant="contained"
              size="large"
              sx={{
                px: 6,
                py: 1.8,
                fontSize: 18,
                fontWeight: 600,
                borderRadius: 2,
                textTransform: "none",
              }}
              onClick={fetchTopic}
            >
              Generate topic
            </Button>
          </Box>
          
        </Box>
    </div>
  )
}

export default GenerateTopic