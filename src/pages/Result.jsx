import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import ReactMarkdown from "react-markdown";

const Result = ({ topic, changeState, aiResponse, generatedTranscript }) => {
  const feedback = aiResponse?.feedback || "";

  return (
    <Box
      sx={{
        backgroundColor: "#CFD2D5",
        minHeight: "100vh",
        padding: 4,
      }}
    >
      <Box
        sx={{
          maxWidth: "900px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: 4,
        }}
      >
       
        <Typography variant="h4" fontWeight="bold">
          Speech Evaluation Report
        </Typography>

       
        <Paper elevation={3} sx={{ padding: 3 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Transcript
          </Typography>

          <Typography sx={{ lineHeight: 1.7 }}>
            {generatedTranscript}
          </Typography>
        </Paper>

       
        <Paper elevation={3} sx={{ padding: 3 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            AI Feedback
          </Typography>

          <Divider sx={{ mb: 2 }} />

          <ReactMarkdown
            components={{
              h3: ({ node, ...props }) => (
                <Typography
                  variant="subtitle1"
                  fontWeight="bold"
                  sx={{ mt: 2 }}
                  {...props}
                />
              ),
              p: ({ node, ...props }) => (
                <Typography sx={{ mb: 1, lineHeight: 1.7 }} {...props} />
              ),
              li: ({ node, ...props }) => (
                <li style={{ marginBottom: "6px" }} {...props} />
              ),
            }}
          >
            {feedback}
          </ReactMarkdown>
        </Paper>
      </Box>
    </Box>
  );
};

export default Result;