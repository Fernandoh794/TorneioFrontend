import React from 'react'
import ResponsiveDrawer from '../components/MynavBar'
import axios from 'axios'
import { useState } from 'react'
import styled from 'styled-components'

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const THead = styled.thead`
  background-color: #333;
  color: white;
`;

const TBody = styled.tbody`
`;

const TRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TH = styled.th`
  padding: 8px;
  text-align: left;
  border: 1px solid #ddd;
`;

const TD = styled.td`
  padding: 8px;
  text-align: left;
  border: 1px solid #ddd;
`;

  
const Torneios = () => {
  const [response, setResponse] = useState(null)
    const baseUrl = "http://localhost:8080/api/v1/torneios"
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
    React.useEffect(() => {
      try {
        axios.get("http://localhost:8080/api/v1/torneio", { 
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        }).then(response => {
          setResponse(response.data)      
          });
      } catch (error) {
        console.log(error)
      }
    }, [])
        console.log(response) 
  return (
    <div>
      <ResponsiveDrawer>
        <h2>Torneios</h2>
      <Table>
  <THead>
    <TRow>
      <TH>ID</TH>
      <TH>Nome</TH>
    </TRow>
  </THead>
  <TBody>
    {
      response && response.map((torneio) => (
        <TRow key={torneio.id}>
          <TD>{torneio.id}</TD>
          <TD>{torneio.nome}</TD>
        </TRow>
      ))
    }
  </TBody>
</Table>
        </ResponsiveDrawer>
    </div>
  )

 }

export default Torneios;