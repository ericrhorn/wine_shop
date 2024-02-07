import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import wineClub from '../assets/wine_club_2.jpeg'
import tasting from '../assets/tasting.jpeg'
import food from '../assets/food.jpeg'
import calendar from '../assets/calendar.jpeg'

function Home() {
  return (
    <div style={{padding: '10px'}}>
      <div style={{ width: '90%', margin: '0 auto' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Grid container justifyContent="center" alignItems="center" spacing={2}>
            <Grid item xs={8}>
              <h1 style={{ textAlign: 'center', fontSize: '50px', fontFamily: 'Open Sans', textTransform: 'uppercase' }}>The Wine Club</h1>
              <p style={{lineHeight: '2', fontSize: '20px'}}>Sed quid ages tandem, si utilitas ab amicitia, ut fit saepe, defecerit? Hoc enim constituto in philosophia constituta sunt omnia. Quamquam te quidem video minime esse deterritum. Sic enim censent, oportunitatis esse beate vivere. Quid enim tanto opus est instrumento in optimis artibus comparandis? Omnium enim rerum principia parva sunt, sed suis progressionibus usa augentur nec sine causa; Hoc Hieronymus summum bonum esse dixit.</p>
            </Grid>
          </Grid>
        </Box>
      </div>
      <div style={{display: 'flex', justifyContent: 'center',marginTop: '50px'}}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid justifyContent="center" alignItems="center" container spacing={0} columns={{ xs: 2, sm: 4, md: 8, lg: 12 }}>
              <Grid style={{padding: '10px', textAlign: 'center'}} item xs={12} sm={6} md={3} lg={3}>
                <div>
                  <img src={wineClub} alt="" style={{maxWidth: '150px',}} />
                </div>
                <div>
                  <h1 style={{fontFamily: 'Open Sans', textTransform: 'uppercase'}}>
                    Wine Club
                  </h1>
                  <div style={{padding: '0px 25px'}}>
                    <p>Duarum enim vitarum nobis erunt instituta capienda. Hunc vos beatum; Igitur ne dolorem quidem. Est enim effectrix multarum et magnarum voluptatum. Nec enim, dum metuit, iustus est, et certe, si metuere destiterit, non erit;</p>
                  </div>
                </div>
              </Grid>
              <Grid style={{padding: '10px',textAlign: 'center'}} item xs={12} sm={6} md={3} lg={3}>
                <div>
                  <img src={tasting} alt="" style={{maxWidth: '150px',}} />
                </div>
                <div>
                  <h1 style={{fontFamily: 'Open Sans', textTransform: 'uppercase'}}>
                    Tasting Room
                  </h1>
                  <div style={{padding: '0px 25px'}}>
                    <p>Duarum enim vitarum nobis erunt instituta capienda. Hunc vos beatum; Igitur ne dolorem quidem. Est enim effectrix multarum et magnarum voluptatum. Nec enim, dum metuit, iustus est, et certe, si metuere destiterit, non erit;</p>
                  </div>
                </div>
              </Grid>
              <Grid style={{padding: '10px',textAlign: 'center'}} item xs={12} sm={6} md={3} lg={3}>
                <div>
                  <img src={food} alt="" style={{maxWidth: '150px',}} />
                </div>
                <div>
                  <h1 style={{fontFamily: 'Open Sans', textTransform: 'uppercase'}}>
                    Cuisine
                  </h1>
                  <div style={{padding: '0px 25px'}}>
                    <p>Duarum enim vitarum nobis erunt instituta capienda. Hunc vos beatum; Igitur ne dolorem quidem. Est enim effectrix multarum et magnarum voluptatum. Nec enim, dum metuit, iustus est, et certe, si metuere destiterit, non erit;</p>
                  </div>
                </div>
              </Grid>
              <Grid style={{padding: '10px',textAlign: 'center'}} item xs={12} sm={6} md={3} lg={3}>
                <div>
                  <img src={calendar} alt="" style={{maxWidth: '150px',}} />
                </div>
                <div>
                  <h1 style={{fontFamily: 'Open Sans', textTransform: 'uppercase'}}>
                    Book Events
                  </h1>
                  <div style={{padding: '0px 25px'}}>
                    <p>Duarum enim vitarum nobis erunt instituta capienda. Hunc vos beatum; Igitur ne dolorem quidem. Est enim effectrix multarum et magnarum voluptatum. Nec enim, dum metuit, iustus est, et certe, si metuere destiterit, non erit;</p>
                  </div>
                </div>
              </Grid>
          </Grid>
        </Box>
      </div>
      <div>
        <h1>Image Caracel</h1>
      </div>
      <div>
        <h1>Questions Form</h1>
      </div>

      {/* <div>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', border: 'solid black 1px' }}>
          <Grid container justifyContent="center" alignItems="center" spacing={2}>
            <Grid item xs={8}>
              <h1>Wine Club</h1>
            </Grid>
            <Grid item xs={8}>
              <h1>Wine Club</h1>
            </Grid>
          </Grid>
        </Box>
      </div> */}
    </div>
  )
}

export default Home