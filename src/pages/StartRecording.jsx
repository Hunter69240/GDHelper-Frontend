import React, { useState, useRef } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import api from "../services/api"
import CircularProgress from "@mui/material/CircularProgress";

const StartRecording = ({ changeState, topic,setResponseData }) => {
  const [recording, setRecording] = useState(false);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const [loading,setLoading]=useState(false)
  const [showButtons,setShowButtons]=useState(true)

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, {
          type: "audio/webm",
        });

        uploadAudio(audioBlob);
        audioChunksRef.current = [];
      };

      mediaRecorder.start();
      setRecording(true);
    } catch (error) {
      console.error("Microphone access denied:", error);
    }
  };

  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    setRecording(false);
    
  };

  const uploadAudio = async (audioBlob) => {
  try {
    setLoading(true); 
    setShowButtons(false)
    const formData = new FormData();
    formData.append("audio", audioBlob, "speech.webm");
    formData.append("topic", topic);

    const response = await api.post("/audio", formData);

    setResponseData(response.data);

    if (response.data) {
      changeState("generatesummary");
    }

  } catch (err) {
    console.error("Upload failed:", err);
  } finally {
    setLoading(false);  
  }
};

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
        <Typography>Topic is: {topic}</Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 3,
          }}
        >
           {!recording ? (
            <Button variant="contained" onClick={startRecording} loading={loading} disabled={loading}>
              Start Recording
            </Button>
          ) : (
            <Button variant="contained" color="error" onClick={stopRecording} loading={loading} disabled={loading}>
              Stop Recording
            </Button>
          )}

          
        </Box>
      </Box>
    </Box>
  );
};

export default StartRecording;