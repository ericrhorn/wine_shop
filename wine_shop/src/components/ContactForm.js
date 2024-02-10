import React from 'react';
import { Box, TextField, Button } from '@mui/material';

export const ContactForm = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        style={{ border: 'solid black 1px', maxWidth: '800px', width: '100%', textAlign: 'center', padding: '20px' }}
      >
        <Box display="flex" flexDirection="row" alignItems="center">
          <div>
            <TextField
              required
              id="outlined-required"
              label="Required"
              defaultValue="Hello World"
            />
            <TextField
              disabled
              id="outlined-disabled"
              label="Disabled"
              defaultValue="Hello World"
            />
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
            />
            <TextField
              id="outlined-read-only-input"
              label="Read Only"
              defaultValue="Hello World"
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              id="outlined-number"
              label="Number"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField id="outlined-search" label="Search field" type="search" />
            <TextField
              id="outlined-helperText"
              label="Helper text"
              defaultValue="Default Value"
              helperText="Some important text"
            />
                      <div>
                        <Button variant="outlined" >Outlined</Button>

          </div>
          </div>

        </Box>
      </Box>
    </Box>
  );
};
