import React from 'react'


const Head = ({keys, head}) => {
    // Precisamos checar se head existe, pode ter tabelas que não mandam head, caso não mande não irá funcionar.
    const tableHead = head || {}// se nã tiver head pega objeto vazio
    //
    return (
        <thead>
            <tr>
                {
                    keys.map(key => <th key={key}>{tableHead[key] || key}</th>) // se existe head[key] usa se não usa [key]
                }  
            </tr>
        </thead>
    )
}
const Row = ({record}) => {
    const keys = Object.keys(record)

    return (
        <tr key ={record.id}>
            {
                keys.map(key => <td key={key}>{record[key]}</td>)
            }
        </tr> 
    )
}

const Table = ({data, head}) => {
    const keys = Object.keys(data[0])

    return (
        <table>
            <Head keys={keys} head={head}/>
            <tbody>
                { data.map(record => <Row record={record}/>)  }  
            </tbody>
        </table>
    )
}

export default Table