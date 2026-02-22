import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import Button from "@mui/material/Button";
const Header = ({changeState}) => {
  return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{backgroundColor:'white'}}>
                <Toolbar>
                
                <Button onClick={()=>changeState("mainscreen")}>
                    <HomeIcon/>
                </Button>
                
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 , color:'black'}}>
                    GDHelper
                </Typography>
                
                </Toolbar>
            </AppBar>
        </Box>
  )
}

export default Header