import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { redirect } from "react-router-dom";
import { Link } from 'react-router-dom';



const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/v1/auth/login", { email, password });
      if (response.status === 200) {
        localStorage.setItem('token', response.data.token);
        window.location.href = "/home";
      } else {
        // O login falhou
        setError(response.data.message);
      }
    } catch (error) {
      
      console.error(error);
      setError("Ocorreu um erro ao fazer login. Por favor, tente novamente mais tarde.");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      
      <Label htmlFor="email">Endereço de e-mail:</Label>
      <Input
        type="email"
        id="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <Label htmlFor="password">Senha:</Label>
      <Input
        type="password"
        id="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <Button type="submit">Entrar</Button>
      <Link to="/signup">
    <button type="button">Criar conta</button>
  </Link>
    </Form>
  );
};

export default Signin;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 600;
`;

const Input = styled.input`
   width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;

  & + .Label {
    margin-top: 10px;
  }
`;

const Button = styled.button`
 width: 100%;
  margin-top: 20px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #0077c9;
  color: white;
  font-size: 16px;
  font-weight: 600;

  transition: all 0.2s;

  &:hover {
    background-color: #0066b3;
  }
`;

const ErrorMessage = styled.p`
  margin: 10px 0;
  padding: 10px;
  background-color: #ff0000;
  color: white;
  font-size: 16px;
  text-align: center;
`;
