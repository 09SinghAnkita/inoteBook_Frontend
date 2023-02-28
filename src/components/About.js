import React from 'react'
import "./style.css"




const About = () => {
 
  return (
    <div >
     <h2 className="welcome">Welcome to inotebook</h2>
     <p> 
      <div className="card">

      <span > inotebook is notebook on the cloud. It is build using MERN stack, i.e MongoDB for the database,
       ExpressJS for the API's, ReactJS for the client site and lastly Node JS for the JavaScript Runtime environment.
      </span>
      <span>The webapp is build so that user can login/Sign Up  to access their personal notes, 
        upon successful login the user can
        create, edit and delete the notes.
      </span>
      </div>
  
      <span>
        <div className="card">
        <h3>Backend and Database</h3>
        <div>Mongoose has been used on top of MongoDB for the seamless connection of Database with the application. 
        Two schema's have been created, one for user(authentication) and the another for their notes.
        For authentication three API endpoints have been created. First one to create the user with email, password and name.
        Second for an already existing user to login with correct credentials(email and password).
        Third, to get the details of the users upon login including their notes.
        All the API endpoints are successfully validated using the Express Validator library.
        Bcrypt js library is used to generate password hash and vice-versa to get the password back for authentication,
        Upon successful authentication of the user the API responds with a JWT containing userId and the JWT secret.
        For Notes four API end points are created, to add, update, delete and fetch the notes of the respective user.</div>
        </div>
   
       
       <div className="card">

       <h3>Frontend </h3>
      <div>
      Entire Frontend is made using React. 
        For navigation React Router DOM is used, and to maintain the global state context API is used.
        Reusable components like, Sign up ,Login, Home, Navabar,
         Alert are being created which can be reused by passing the props from parent to the child component.
         Inside the context API the logic to add, update, delete and fetch noted have been written, 
         which is imported in the individual component and used accordingly.
         Material UI is used to create the design layouts.
        </div>

       </div>

     
         </span> 


     </p>
    </div>
  )
}

export default About
