
import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function BasicAlerts(props) {

 console.log('alert', props.alert,  props.alert)


  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
   
      <Alert severity={props.alert.type}>{props.alert.message}</Alert>
    
    </Stack>
  );
}
