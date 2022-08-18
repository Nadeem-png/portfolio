import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function About() {
  return (
    <div className='container mt-5 mb-5'>
    <Box sx={{ width: '100%' }}>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      
      <Grid item xs={6}>
      <Typography variant="h4" color="red" component="div">
      Welcome to my Portfolio
        </Typography>
        <Typography variant="h6" color="" component="div">
        I am Rhinston Jones. A professional photographer. I currently reside at beveryly Hills, North-carolina.

Of course, I love taking  and I have won multiple awards and acquired many certificates

All necessary reference files and documents are available for download
</Typography>
      </Grid>
      <Grid item xs={6}>
        4
      </Grid>
    </Grid>
  </Box>
  </div>
  );
}
