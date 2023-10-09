import axios from "axios";
import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const togglePageHandler = () => {
    setIsLogin(!isLogin)
  }

  const handleSignup = async() => {
    const authUrl =
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAsIfm2Cj65I3bpkMyPcBl0UPLsYBgBeF0";
 
      const autData = {
        email:email,
        password: password,
        returnSecureToken: true,
      };
    
     if(password === confirmPassword) {
      try {
        const response = await axios.post(authUrl,autData);
        console.log(response);
        
      } catch (error) {
        console.log(error);
      }
      
    
     }else {
      alert('Password Not Match');
     }
    };
  
 

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ margin: "5rem" }}
    >
      <Card style={{ width: "35%" }}>
        <Card.Body>
          <h1 className="text-center">{isLogin ? "Login" : 'Sign Up'}</h1>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={handleEmailChange}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
            </Form.Group>

            {!isLogin && <Form.Group controlId="formBasicConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />
            </Form.Group>}

            <Button
              variant="primary"
              type="button"
              onClick={handleSignup}
              className="w-100 mt-4"
            >
             {isLogin ? 'Login' : 'Sign Up'}
            </Button>

            <Button className="w-100 mt-4" variant="dark" onClick={togglePageHandler}>
              {isLogin ? "Don't Have an Account ? Sign Up"  :'Have an account? Login' }
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;
