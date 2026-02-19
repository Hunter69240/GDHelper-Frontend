import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const StartRecording = ({changeState,topic}) => {
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
          display:"flex",
          flexGrow:1,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap:3
        }}
      >
          <Typography>
            Topic is : {topic}
          </Typography>

          <Box
          sx={{
            display:"flex", 
            alignItems: "center",
            justifyContent: "center",
            gap:3
          }}
          >
            <Button>Start recording</Button>
            <Button>Stop recording</Button>


          </Box>
      </Box>
    </Box>
  )
}

export default StartRecording