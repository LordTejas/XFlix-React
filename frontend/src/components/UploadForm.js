import "./UploadForm.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function UploadForm({open, handleClose, videos, setVideos}) {

    const genres = ["Education", "Sports", "Movies", "Comedy", "Lifestyle"];
    const ratings = ["Anyone", "7+", "12+", "16+", "18+"];

    const genrateUuid = () => {
      return new Date()
    }

    const [formData, setFormData] = useState({
      id: uuidv4(),
      title: "",
      videoLink: "",
      previewImage: "",
      genre: "",
      contentRating: "Anyone",
      releaseDate: new Date().toLocaleDateString('en-GB', {
        day: 'numeric', month: 'short', year: 'numeric'
      }),
      "votes": {
        "upVotes": 0,
        "downVotes": 0,
        },
    });


    const updateFormData = (data) => {
        let newData = {...formData, ...data};
        // console.log(newData);
        setFormData(newData);
    }

    const handleGenreChange = (e) => {
        updateFormData({"genre": e.target.value});
    }

    const handleContentRatingChange = (e) => {
        updateFormData({"contentRating": e.target.value});
    }

    const handleVideoLinkChange = (e) => {
      updateFormData({"videoLink": e.target.value});
    }

    const handlePreviewImageChange = (e) => {
      updateFormData({"previewImage": e.target.value});
    }

    const handleTitleChange = (e) => {
      updateFormData({"title": e.target.value});
    }

    const handleReleaseDateChange = (e) => {
      console.log(e.target.value);
      updateFormData({"releaseDate": e.target.value});
    }

    function handleUploadFormEvent() {
      setVideos([...videos, formData]);
      handleClose();
    }
    
    const SelectGenres = () => (
    <FormControl>
        <InputLabel id="select-genre-label">Genre</InputLabel>
        <Select
        labelId="select-genre-label"
        id="select-genre"
        value={formData.genre}
        label="Genre"
        onChange={handleGenreChange}
        >
        <MenuItem value="">
            <em>None</em>
        </MenuItem>
        {genres.map((g) => (<MenuItem value={g} key={g}>{g}</MenuItem>))}
        </Select>
        <FormHelperText>Select Genre type of video</FormHelperText>
    </FormControl>
    );

    const SelectContentRating = () =>(
        <FormControl>
        <InputLabel id="select-rating-label">Content Rating</InputLabel>
        <Select
        labelId="select-rating-label"
        id="select-rating"
        value={formData.contentRating}
        label="Content Rating"
        onChange={handleContentRatingChange}
        >
        {ratings.map((r) => (<MenuItem value={r} key={r}>{r}</MenuItem>))}
        </Select>
        <FormHelperText>Select Content Rating for video</FormHelperText>
    </FormControl>
    );

    const SelectReleaseDate = () => (
      <TextField
      required
      id="outlined-basic"
      label="Date"
      variant="outlined"
      helperText="The Date of the video"
      value={formData.releaseDate}
      />
    );


  return (
    <Dialog open={open} onClose={handleClose} className="upload-form">
      
      <DialogContent>
        <Box display="flex" justifyContent="space-between">
          {/* <Typography variant="h6" display="inline" gutterBottom>
            Upload Video
          </Typography> */}

          <DialogTitle>Upload Video</DialogTitle>

          <Button
            display="inline"
            sx={{
              color: "common.white",
              bgcolor: "button.main",
              "&:hover": {
                bgcolor: "button.dark",
              },
            }}
            onClick={handleClose}
          >
            <CloseIcon />
          </Button>
        </Box>

        <Box display="flex" flexDirection="column" justifyContent="space-between">
            <TextField
            required
            id="outlined-basic"
            label="Video Link"
            variant="outlined"
            helperText="The link will be used to derive the video"
            sx={{
                color: "common.white",
                borderColor: "common.white",
            }}
            value={formData.videoLink}
            onChange={handleVideoLinkChange}
            />

            <TextField
            required
            id="outlined-basic"
            label="Thumbnail Image Link"
            variant="outlined"
            helperText="The link will be used to get preview Image"
            value={formData.previewImage}
            onChange={handlePreviewImageChange}
            />

            <TextField
            required
            id="outlined-basic"
            label="Title"
            variant="outlined"
            helperText="The title of the video"
            value={formData.title}
            onChange={handleTitleChange}
            />

            <SelectGenres />

            <SelectContentRating />

            <SelectReleaseDate />

        </Box>
      </DialogContent>
      
      <DialogActions>
        <Box display="flex" justifyContent="flex-start">
          <Button
            display="inline"
            sx={{
              marginRight: "1rem",
              color: "common.white",
              bgcolor: "button.success.main",
              "&:hover": {
                bgcolor: "button.success.dark",
              },
            }}
            onClick={handleUploadFormEvent}
          >
            UPLOAD VIDEO
          </Button>

          <Button
            display="inline"
            sx={{
              marginRight: "1rem",
              color: "common.white",
              bgcolor: "button.danger.main",
              "&:hover": {
                bgcolor: "button.danger.dark",
              },
            }}
            onClick={handleClose}
          >
            CANCEL
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
}
