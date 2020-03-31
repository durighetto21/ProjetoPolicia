import React from 'react'
import { FaPlus } from 'react-icons/fa'

import './styles.css';

const Head = ({ keys, head }) => {
    // Precisamos checar se head existe, pode ter tabelas que não mandam head, caso não mande não irá funcionar.
    const tableHead = head || {}// se nã tiver head pega objeto vazio
    //
    return (
        <thead className="thead-dark">
            <tr>
                {
                    keys.map(key => <th key={key}>{tableHead[key] || key}</th>) // // se existe head[key] usa se não usa [key]
        
                }
            </tr>
        </thead>
    )
}
const Row = ({ record }) => {
   const keys = Object.keys(record);
    
    return (
        <tr key={record.id} > 
            {
                keys.map(key =>  <th key={key}>{record[key]}</th>)           
            }
        </tr>
    )
}

const Table = ({ data, head }) => {
    const keys = Object.keys(data[0])
   

    return (
        <div className="mx-auto" >
            <div className="container">
                <table className="table table-bordered">
                    <thead className="thead-dark">
                        <tr>
                            <th scoope="cool">
                                <button className="btn btn-danger" title="Clique para cadastrar" > <FaPlus dize={16} /></button>
                            </th>
                            <th scoope="cool">
                                <input className="form-control" type="text" id="mySearchTable" placeholder="Consultar" />
                            </th>
                        </tr>
                    </thead>
                </table>
            </div><br></br>
            <div className="container">
                <table className="table table-hover">
                    <Head keys={keys} head={head} />
                    <tbody>
                    {data.map(record => <Row record={record} />)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table

/*
{data.map(record => <Row record={record} />)}

     <th scoope="cool">
                <button  className="btn btn-danger" title="Clique para cadastrar" > <FaPlus dize={16} /></button>
            </th>
            <th scoope="cool">
                <input className="form-control" type="text" id="mySearchTable"  placeholder="Consultar"/>
            </th>
*/