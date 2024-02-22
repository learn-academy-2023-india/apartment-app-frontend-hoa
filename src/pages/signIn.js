import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Form, FormGroup, Input, Button } from "reactstrap"

const SignIn = () => {
  const [signInFormData, setSignInFormData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setSignInFormData({ ...signInFormData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign In Form Data:", signInFormData);
    navigate("/apartmentindex");
  }

  return (
    <>
      <h3>Sign In</h3>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Input
              id="username"
              name="username"
              placeholder="Username"
              type="text"
              value={signInFormData.username}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Input
              id="password"
              name="password"
              placeholder="Password"
              type="password"
              value={signInFormData.password}
              onChange={handleChange}
            />
          </FormGroup>
          <Button type="submit">Sign In</Button>
        </Form>
    </>
  )
}

export default SignIn
