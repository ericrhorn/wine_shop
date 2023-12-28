import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



function Store() {
  return (
    <div style={{margin: '100px 100px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Box sx={{ flexGrow: 1}}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Item>xs=8</Item>
          </Grid>
        <Grid item xs={12} md={8} lg={6}>
          <Item>xs=6 md=8</Item>
        </Grid>
        <Grid item xs={12} md={8} lg={6}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid item xs={12} md={8} lg={6}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid item xs={10} md={8} lg={6}>
          <Item>xs=6 md=8</Item>
        </Grid>
        </Grid>
      </Box>
    </div>
      )
}

export default Store