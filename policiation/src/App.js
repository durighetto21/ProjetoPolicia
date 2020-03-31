import React from 'react';
import Table from './Table';

import './global.css';

import Routes from './routes';
/*
function App() {
  return (
    <Routes/>
  );
}
*/

function App() {
  const data = [
    {id:1, name: 'Douglas1', last: 'Durighetto1', campo1: "legal", campo2:"ruim"},
    {id:2, name: 'Douglas2', last: 'Durighetto2', campo1: "legal", campo2:"ruim"},
    {id:3, name: 'Douglas3', last: 'Durighetto3',campo1: "legal", campo2:"ruim"}
  ]
  const data1 =  data.map(record => {
    return {id: record.id, name: record.name, last:record.last};
  });


  const head ={
    id: 'Ident.',
    name: 'Nome',
    last: 'Sobrenome',
  
  }
 

  return (
    
      <Table data={data1} head={head}/>  
  );
}
export default App;


  /* Exemplo tabela
  const data = [
    {id:1, name: 'Douglas1', last: 'Durighetto1'},
    {id:2, name: 'Douglas2', last: 'Durighetto2'},
    {id:3, name: 'Douglas3', last: 'Durighetto3'}
  ]

  const head ={
    id: 'Ident.',
    name: 'Nome',
    last: 'Sobrenome'
  }
 

  return (
    <div>
        <Table data={data} head={head}/> 

    </div>
  );
*/



