import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, FormGroup, Input, Button } from "reactstrap";

const SignUp = () => {
  const [signUpFormData, setSignUpFormData] = useState({
    username: "",
    password: "",
    confirmPassword: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setSignUpFormData({ ...signUpFormData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign Up Form Data:", signUpFormData);
    navigate("/apartmentindex");
  };

  return (
    <>
      <h3>Sign Up</h3>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Input
            id="username"
            name="username"
            placeholder="Username"
            type="text"
            value={signUpFormData.username}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Input
            id="password"
            name="password"
            placeholder="Password"
            type="password"
            value={signUpFormData.password}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm Password"
            type="password"
            value={signUpFormData.confirmPassword}
            onChange={handleChange}
          />
        </FormGroup>
        <Button type="submit">Sign Up</Button>
      </Form>
    </>
  );
};

export default SignUp;
