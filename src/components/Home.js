import React from 'react';
import Notes from './Notes';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';


const Home = (props) => {
 
  const {showAlert} = props


  return (
    <div>
     {localStorage.getItem('token') ?
       <Notes showAlert={showAlert}></Notes> : 
       <Stack sx={{ width: '100%' }} spacing={2}>
   
       <Alert severity='error' 
       sx = {{textAlign: 'center', fontFamily : 'monospace' , fontSize : '1rem'}}
       >Login  or  SignUp  first</Alert>
     
     </Stack>   
          }
    </div>
  )
}

export default Home
