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

  
const Categorias = () => {
  const [response, setResponse] = useState(null)
    React.useEffect(() => {
      try {
        axios.get("http://localhost:8080/api/v1/categoria", { 
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
  return (
    <div>
      <ResponsiveDrawer>
        <h2>Categoria</h2>
      <Table>
  <THead>
    <TRow>
      <TH>Id</TH>
      <TH>Nome</TH>
    </TRow>
  </THead>
  <TBody>
    {
      response && response.map((item, index) => {
        return (
          <TRow key={index}>
            <TD>{item.id}</TD>
            <TD>{item.nome}</TD>
          </TRow>
        )
      })
      
    }
    
  </TBody>
</Table>
        </ResponsiveDrawer>
    </div>
  )

 }

export default Categorias;