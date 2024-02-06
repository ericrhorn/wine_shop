import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

function Home() {
  return (
    <div style={{ width: '90%', margin: '0 auto' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', border: 'solid black 1px' }}>
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
          <Grid item xs={8}>
            <h1 style={{ textAlign: 'center', fontSize: '50px' }}>The Wine Club</h1>
            <p style={{lineHeight: '2', fontSize: '20px'}}>Sed quid ages tandem, si utilitas ab amicitia, ut fit saepe, defecerit? Hoc enim constituto in philosophia constituta sunt omnia. Quamquam te quidem video minime esse deterritum. Sic enim censent, oportunitatis esse beate vivere. Quid enim tanto opus est instrumento in optimis artibus comparandis? Omnium enim rerum principia parva sunt, sed suis progressionibus usa augentur nec sine causa; Hoc Hieronymus summum bonum esse dixit.</p>
          </Grid>
        </Grid>
      </Box>
      
    </div>
  )
}

export default Home