import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const MainScreen = ({ state, changeState }) => {
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
          flexGrow: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container maxWidth="md">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: 600 }}>
              Improve Your Speaking Intelligence
            </Typography>

            <Typography
              variant="subtitle1"
              sx={{ mt: 3, mb: 4, color: "text.secondary" }}
            >
              Analyze delivery, topic focus, and reasoning structure.
            </Typography>

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
              onClick={()=>changeState("generatetopic")}
            >
              Continue
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default MainScreen;
