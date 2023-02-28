import React, { useState } from "react";
import { Grid, Paper, TextField, Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
const Signup = (props) => {

  //CSS
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto",
  };
  const formStyle = { marginBottom: "15px" };
  const btnstyle = { margin: "8px 0" };

  //Logic

  let navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cPass: "",
  });

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

//On Submit send the new user credentials and redirect to home page
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`https://inotebook-backend-4ul1.onrender.com/api/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();

    if (json.success) {
      localStorage.setItem("token", json.authtoken);
      navigate("/home");
      props.showAlert("Account Created Sucessfully", "success");
    } else {
      props.showAlert("Invalid Details", "error");
    }
  };

  

  return (
    <form onSubmit={handleSubmit}>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <h2>Sign Up</h2>
          </Grid>
          <TextField
            style={formStyle}
            label="Name"
            placeholder="Enter Name"
            value={credentials.name}
            onChange={onChange}
            name="name"
            variant="outlined"
            fullWidth
            required
          />
          <TextField
            style={formStyle}
            label="Email"
            placeholder="Enter Email"
            value={credentials.email}
            onChange={onChange}
            name="email"
            variant="outlined"
            fullWidth
            required
          />
          <TextField
            style={formStyle}
            label="Password"
            placeholder="Enter password"
            type="password"
            value={credentials.password}
            onChange={onChange}
            name="password"
            variant="outlined"
            minLength={5}
            fullWidth
            required
          />
          <TextField
            label="Confirm Password"
            placeholder="Confirm Password"
            value={credentials.cPass}
            onChange={onChange}
            name="cPass"
            variant="outlined"
            minLength={5}
            fullWidth
            required
          />
          <Button
            type="submit"
            color="error"
            variant="contained"
            style={btnstyle}
            fullWidth
          >
            Sign Up
          </Button>
        </Paper>
      </Grid>
    </form>
  );
};

export default Signup;
