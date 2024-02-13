import React from 'react';
import { Box, TextField, Button, FormControl, InputLabel, Select, MenuItem, Grid, CardHeader, CardContent, Card} from '@mui/material';
import {Form, Field } from "formik"
import Img from "../assets/vinyard.jpeg"
// import '../style/contact.css'


export const ContactForm = () => {

  

  const inquiries = [
    {value: 'Wine Club', label: 'Wine Club'},
    {value: 'Wine Club', label: 'Wine Club'},
    {value: 'Wine Club', label: 'Wine Club'},
    {value: 'Wine Club', label: 'Wine Club'},
    {value: 'Wine Club', label: 'Wine Club'}
  ]
  
  return (
    <>
   <Box
   display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      style={{
        backgroundImage: `url(${Img})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '800px', // Adjust the height as needed
        // padding: '50px 0', // Add padding to ensure content is not covered by the image
      }}
    >
      {/* <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '700px', maxWidth: '100%' },
        }}
        noValidate
        autoComplete="off"
        style={{ border: 'solid black 1px', maxWidth: '1000px', width: '100%', textAlign: 'center', padding: '20px' }}
      > */}
        <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        maxWidth="800px"
        width="100%"
        p="20px"
        bgcolor="rgba(255, 255, 255, .7)"
        >
          <div>
            <div>
              <h1>Questions?</h1>
            </div>
            <TextField
              sx={{ m: 1, width: '35ch' }}
              // required
              id="name"
              label="Name"
              // defaultValue="Hello World"
            />
            <TextField
             sx={{ m: 1, width: '35ch' }}
              // disabled
              id="email"
              label="Email"
              // defaultValue="Hello World"
            />
            <TextField
             sx={{ m: 1, width: '35ch' }}
              id="outlined-password-input"
              label="Phone Number"
              type="password"
              autoComplete="current-password"
            />
              <TextField
               sx={{ m: 1, width: '35ch' }}
                id="inquiry"
                select
                label="Inquiry"
              >
                {inquiries.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                sx={{m: 1}}
                fullWidth
                id="outlined-multiline-static"
                label="Multiline"
                multiline
                rows={6}
                defaultValue="Default Value"
              />

          </div>
          <div>
            <Button variant="outlined" >Outlined</Button>
          </div>

        </Box>
      {/* </Box> */}
    </Box>
    </>
  );
};
