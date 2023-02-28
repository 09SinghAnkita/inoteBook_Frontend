import React, { useState } from "react";
import {
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  Link,
} from "@material-ui/core";
//import FormControlLabel from "@material-ui/core/FormControlLabel";
//import Checkbox from "@material-ui/core/Checkbox";
import { useNavigate } from "react-router-dom";


const Login = (props) => {
 
  //CSS
  const paperStyle = {
    padding: 20,
    height: "50vh",
    width: 280,
    margin: "20px auto",
  };
  const formStyle = { marginBottom: "15px" };
  const btnstyle = { margin: "8px 0" };
  const textStyle = { margin: "20px 0" };
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  //Logic
  let navigate = useNavigate();

  //On Submit send the existing user credentials and redirect to home page
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    
    if (json.success) {
      localStorage.setItem("token", json.authtoken);
      props.showAlert("Login Successful", "success");
      navigate("/home");
    } else {
      props.showAlert("Invalid Credentials", "error");
    }
  };
  
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <h2>Login In</h2>
          </Grid>
          <TextField
            style={formStyle}
            label="Username"
            placeholder="Enter username"
            value={credentials.email}
            onChange={onChange}
            name="email"
            variant="outlined"
            fullWidth
            required
          />
          <TextField
            style={textStyle}
            label="Password"
            placeholder="Enter password"
            type="password"
            value={credentials.password}
            onChange={onChange}
            name="password"
            variant="outlined"
            fullWidth
            required
          />
          {/* <FormControlLabel
            control={<Checkbox name="checkedB" color="primary" />}
            label="Remember me"
          /> */}
          <Button
            type="submit"
            color="error"
            variant="contained"
            style={btnstyle}
            fullWidth
          >
            Login in
          </Button>
          {/* <Typography>
            <Link href="#">Forgot password ?</Link>
          </Typography>
          <Typography>
            {" "}
            Do you have an account ?<Link href="#">Sign Up</Link>
          </Typography> */}
        </Paper>
      </Grid>
    </form>
  );
};

export default Login;
