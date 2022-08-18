import React from 'react';
import Typography from '@mui/material/Typography';
import EmailIcon from '@mui/icons-material/Email';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';

export default function Contact() {
  return (
    <>
    <div className='container mt-5 mb-5'>
      <div className='row'>
        <div className='col-lg-6'>
        <Typography variant="h4" color="red" component="div">
        Have a question or project in mind? Just send me a message
        </Typography>
        <Typography className='mt-3' variant="h6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, magnam. Lorem ipsum dolor sit amet consectetur adipisicing, elit. Ad fuga, quisquam adipisci facilis ea soluta, deserunt id nemo.
        </Typography>
        <div className='row mt-5'>
        <div className='col-2'>
          <PhoneInTalkIcon/>
       

</div>
<div className='col-10'>
<Typography >
Call me now

        </Typography>
        <Typography  >
        +1-202-555-1934
        </Typography>

</div>
        </div>
        <div className='row mt-3'>
        <div className='col-2'>
        <EmailIcon/>

</div>
<div className='col-10'>
<Typography >
Chat with me
        </Typography>
        <Typography  >
        rhinstonjones@gmail.com
        </Typography>

</div>
        </div>

        </div>
        <div className='col-lg-6'>
        <Typography variant="h4" color="red" >
        Just say Hi 👋
        </Typography>
          <form className='mt-3'>
            <div className='row'>
              <div className='col'>
<input type='text' className='form-control' placeholder='Full Name'/>
              </div>
              <div className='col'>
              <input type='email'  className='form-control'placeholder='Email'/>
</div>

            </div>
            <input type='text'  className='form-control mt-4'placeholder='Subject'/>
<textarea className='form-control mt-4' rows={5} cols={50} placeholder='Message'>

</textarea>
<button className='btn btn-danger py-2 px-4 mt-3'>Send Message</button>
          </form>

        </div>

      </div>

    </div>
    
    </>
  );
}
