import './UploadForm.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import CloseIcon from '@mui/icons-material/Close';
import { useState, useEffect } from 'react';
import {useLocation, useParams} from "react-router-dom";
import Select, { SelectChangeEvent } from '@mui/material/Select';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';

export default function UploadForm(setUploadForm) {


    const formStyle = {
        color: 'common.white',
    };


    return (
        <Box
        component="form"
        className="upload-form"
        sx={{
            color: 'common.white',
            bgcolor: 'secondary.main',
        }}
        >

            <Box
            display="flex"
            justifyContent="space-between"
            >
                <Typography 
                variant="h6"
                display="inline"
                gutterBottom
                >
                    Upload Video
                </Typography>

                <Button
                display="inline"
                sx={formStyle}
                onClick={() => {
                    setUploadForm(false);
                }}
                >
                    <CloseIcon />
                </Button>
            </Box>
            

            <TextField
            required
            id="outlined-required"
            defaultValue="Video Title"
            helperText="The link will be used to derive the video"
            />

            <TextField
            required
            color="common.white"
            id="outlined-required"
            defaultValue="Thumbnail Image Link"
            helperText="The link will be used to derive the video"
            />

            <TextField
            required
            color="common.white"
            id="outlined-required"
            defaultValue="Title"
            helperText="The link will be used to derive the video"
            />

            <TextField
            required
            color="common.white"
            id="outlined-required"
            defaultValue="Genre"
            helperText="The link will be used to derive the video"
            />

<InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={null}
          label="Age"
          onChange={console.log(5)}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
            
        </Box>
    );
}