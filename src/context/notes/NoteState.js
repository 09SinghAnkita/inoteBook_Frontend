
import NoteContext from "./noteContext";
import React from "react";

const NoteState = (props) => {

  const host = "https://inotebook-backend-4ul1.onrender.com"



    const notesInitial = []
    const [notes, setNotes] = React.useState(notesInitial);
 
      const getNotes = async () => {
        const response = await fetch (`${host}/api/notes/fetchallnotes`,{
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token'),
          },  
        });
        const json =  await response.json();
        setNotes(json);
      
      }

      // Add notes
      const addNotes = async (title, description, tag) => {
        const response = await fetch (`${host}/api/notes/addnote`,{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'auth-token':  localStorage.getItem('token'),
          },
          body:JSON.stringify({title, description, tag})
        });
        const noteadd = await response.json();
        setNotes(notes.concat(noteadd))
      }
       
      //Edit Notes
      const editNotes = async(id,title, description, tag) => {     
        const response = await fetch (`${host}/api/notes/updatenote/${id}`,{
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'auth-token':  localStorage.getItem('token'),
          },
          body:JSON.stringify({title, description , tag})
        });
        const json =  response.json();

        let newnotes = JSON.parse(JSON.stringify(notes))
        for(let i=0; i<newnotes.length;i++){
          const element = newnotes[i]
          if(element._id===id){
            newnotes[i] = title;
            newnotes[i] = description;
            newnotes[i] = tag; 
            break; 
          }  
          setNotes(newnotes)
        }
      }

      // Delete Notes
      const deleteNotes = async(id) => {
        const response = await fetch (`${host}/api/notes/deletenote/${id}`,{
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'auth-token':  localStorage.getItem('token'),
          },
        });
         const json =  await response.json();
        const newNotes = notes.filter((note)=>{return note._id!==id})
        setNotes(newNotes)
      }





  return (
   <NoteContext.Provider value={{notes,setNotes,getNotes, addNotes, editNotes, deleteNotes}}>
    {props.children}
   </NoteContext.Provider>
  )
}

export default NoteState;
