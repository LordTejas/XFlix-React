import "./Header.css";
import Avatar from "@mui/material/Avatar";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import XflixLogo from "../assets/X.png";

const Header = ({ children, handleOpenUploadForm, showUploadButton }) => {
  const Logo = () => (
    <Link
    href="/">
      <Stack direction="row" justifyContent="center">
        <Avatar
          alt="XFlix"
          src={XflixLogo}
          variant="square"
          style={{ height: "3.2rem", width: "3.2rem" }}
          aria-label="menu"
        />
        <Typography component="div" variant="h3" color="white">
          FLIX
        </Typography>
      </Stack>
    </Link>
  );

  const UploadButton = () => (
    <Button
      id="upload-btn"
      sx={{
        color: "button.contrastText",
        bgcolor: "button.main",
        "&:hover": {
          bgcolor: "button.dark",
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
        bgcolor: "primary.main",
      }}
      className="main-header"
    >
      <Stack direction="row" justifyContent="space-between" padding={2}>
        <Logo edge="start" />

        {children}

        {showUploadButton && <UploadButton />}
      </Stack>
    </Box>
  );
};

export default Header;
