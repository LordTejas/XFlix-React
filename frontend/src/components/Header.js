import './Header.css';
import Avatar from '@mui/material/Avatar';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import XflixLogo from "../assets/logo.png";

const Header = ({ children, handleOpenUploadForm, showUploadButton}) => {

    const Logo = () => (
      <Avatar
      alt="XFlix" 
      src={XflixLogo} 
      variant="square"
      style={{height: "3rem", width: "3rem"}}
      aria-label="menu"
      sx={{ mr: 2 }}
      />
    );
  

    const UploadButton = () => (
      <Button
      sx={{
        color: 'button.contrastText',
        bgcolor: 'button.main',
        "&:hover": {
          bgcolor: 'button.dark',
        },
      }}
      className="install-button"
      startIcon={<FileUploadIcon />}
      variant="text"
      type="button"
      aria-label="menu"
      // style={{color: "white", backgroundColor: "lime"}}
      onClick={handleOpenUploadForm}
      >
        Upload
      </Button>
    );
  
    // const userDashBoard = (
    //   <Stack direction="row" alignItems="center" spacing={1}>
    //     <AboutButton />
    //     <Avatar src="./avatar.png" alt={localStorage.getItem("username")} />
    //     <p className="username-text">{localStorage.getItem("username")}</p>
    //     <Button variant="text" type="button" onClick={logoutUser}>Logout</Button>
    //   </Stack>
    // );
  
      return (
        <Box 
        sx={{ 
          flexGrow: 1,
          bgcolor: 'primary.main', 
        }}
        className="main-header"
        >
          <AppBar position="static">
            <Toolbar
            // disableGutters
            >
              
              <Logo
              edge="start"
              />

              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{textAlign: "left"}}>
                XFlix
              </Typography>

              {children}

              {showUploadButton && <UploadButton />}
            
            </Toolbar>

          </AppBar>
      </Box>
      );
  };
  
  export default Header;