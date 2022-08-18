import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import image from './image.png';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
export default function About() {
  return (
    <div className='container mt-5 '>
    <Box sx={{ width: '100%' }}>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      
      <Grid item xs={6}>
      <Typography variant="h4" color="red" component="div">
      Welcome to my Portfolio
        </Typography>
        <Typography variant="h6" color="" component="div" >
        I am Rhinston Jones. A professional photographer. I currently reside at beveryly Hills, North-carolina.

Of course, I love taking  and I have won multiple awards and acquired many certificates

All necessary reference files and documents are available for download
</Typography>
<div className='mt-5 '>
<a href='' ><FacebookRoundedIcon className='ms-5'/></a>
<a href=''><InstagramIcon className='ms-5'/></a>

<a href=''><YouTubeIcon className='ms-5'/></a>
</div>


      </Grid>
      <Grid item xs={6}>
      <img src={image} alt="Logo" className='h-50'/>
      </Grid>
    </Grid>
  </Box>
  </div>
  );
}
