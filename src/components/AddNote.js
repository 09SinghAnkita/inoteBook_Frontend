import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import noteContext from "../context/notes/noteContext";
import Button from '@mui/material/Button';
import { useContext } from 'react';


export default function BasicTextFields(props) {
  
    const context = useContext(noteContext);
    const {addNotes} = context;

    const [note, setNote] = React.useState({title: '', description : '', tag : ''})
    const onChange = (e)=>{
      setNote({...note, [e.target.name]: e.target.value})    
  }

    const handleClick = (e)=>{
        e.preventDefault()
        addNotes(note.title, note.description, note.tag )
        setNote({title: '', description : '', tag : ''})
        props.showAlert("Added Sucessfully", "success")

    }

  return (
    <>
    <Box style={{display: 'flex', flexDirection: 'column', alignItems :'center'}}
      component="form"
      sx={{  '& > :not(style)': { m: 1, width: '100ch' },}}
      noValidate
      autoComplete="off"
    > 
  

       <div style={{textAlign: 'center', fontFamily : 'monospace' , fontSize : '1rem'}}> Welcome to inotebook enter your notes here</div>
      <TextField id="title" label="Title"  name="title" variant="outlined"  value={note.title}  minLength={5} onChange={onChange} required/>
      <TextField id="description" label="Description" name="description"  value={note.description} variant="outlined" minLength={5} onChange={onChange} required/>
      <TextField id="tag" label="Tag" name="tag"  onChange={onChange} value={note.tag} variant="outlined" />
      <Button variant="outlined"  style={{display: 'flex',  alignItems :'center', width: '20ch'}}
    disabled={note.title.length<5 || note.description.length<5}
     onClick={handleClick}>Add Note</Button>
    
    </Box>
  
    </>
  );
}