import React,{useState} from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import api from '../services/api';
const GenerateSummary = ({topic,state,changeState,responseData,setAiResponse,setGeneratedTranscript}) => {
  const [error,setError]=useState("")
  const [loading,setLoading]=useState(false)
  

  const transcript = responseData?.transcript?.text || ""
  
  const generateAiSummary = async ()=>{
    try{
      setError("")
        setLoading(true)
        
        const payload={
          "topic":topic,
          transcript:{
            "text":transcript
          },
          "layer2":responseData.layer_2,
          "layer3":responseData.layer_3,
          "layer4":responseData.layer_4
        }

        const response=await api.post("/ollama",payload)
        setAiResponse(response.data)
        setGeneratedTranscript(transcript)
        if (response.data){
          changeState("result")
        }
        console.log(payload)
    }catch(err){
      setError(err.response?.data?.error || "Error generating AI Summary")
    }finally{
      setLoading(false)
      
    }
  }
  return (
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
          display: "flex",
          flexGrow: 1,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 3,
      }}
      >
        {error && <Typography>{ error}</Typography>}
        <Typography>Transcript:{transcript}</Typography>

        <Button onClick={generateAiSummary} disabled={loading} loading={loading}>Generate AI Summary</Button>
       
      </Box>
    </Box>
  )
}

export default GenerateSummary