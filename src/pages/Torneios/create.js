import React from 'react'
import ResponsiveDrawer from '../components/MynavBar';
import { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';


const TorneiosCreate = () => {
  const [nome, setNome] = useState("");
  const [response, setReponse] = useState([])

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

 const handleSubmit = async (event) => {
  event.preventDefault();
 const config =  {headers: {
  'Authorization': `Bearer ${localStorage.getItem('token')}`
    }};

    const data = { nome };

  try {
    const response =  axios.post("http://localhost:8080/api/v1/torneio/create", data, config ).then(response => {
      setReponse(response)
    }).catch(response => {
      console.log(response)
    }
    )
  }
  catch(erro){
    console.log(erro)
  }
 }





  return (
    <div>
      <ResponsiveDrawer>
        <h1>Cadastro de Torneios</h1>
        <Form onSubmit={handleSubmit}>
        <Label htmlFor="nome">Nome:</Label>
          <Input
        id="nome"
        value={nome}
        onChange={(event) => setNome(event.target.value)}
       />
     <Button type="submit">Cadastrar</Button>

          </Form>
        </ResponsiveDrawer>
    </div>
  )

 }


export default TorneiosCreate;
