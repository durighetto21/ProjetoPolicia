import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { FaUser,FaKey } from 'react-icons/fa'

import './styles.css';
import logoImg from '../../assets/logo.png';

export default function Login() {

    const[user,setUser] = useState('');
    const[pass,setPass] = useState('');

    async function handleLogin(e){
        e.preventDefault();
        try{
            // const response = await api.post('sessions', {id});
            // localStorage.setItem('cod_usuario', response.data.cod_usuario);
            // localStorage.setItem('nomue_completo', response.data.nome_completo);
            // localStorage.setItem('cod_usuario', response.data.cod_usuario);
            // localStorage.setItem('cod_usuario', response.data.cod_usuario);

        }catch(err){
            alert('Falha no login, tente novamente');
        }
    }

    return (
        <div className="container">
            <div className="d-flex justfy-content-left ">
                <img src={logoImg} alt="Policia Federal" />
                <span className="border border-white"></span>
            </div>
            <section className="form">
                <Card className="card">
                    <Card.Header className="card-header"><h3>Login</h3></Card.Header>
                    <Card.Body>
                        <form onSubmit={() => { }}>
                            <div className="input-group form-group">

                                <div className="input-group-prepend">
                                    <span className="input-group-text"><FaUser dize={16} /></span>
                                </div>

                                <input className="form-control" placeholder="Usuário"
                                value={user}
                                onChange={e => setUser(e.target.value)}
                                />

                            </div>

                            <div className="input-group form-group">

                                <div className="input-group-prepend">
                                    <span className="input-group-text"><FaKey dize={16} /></span>
                                </div>

                                <input type="password" className="form-control" placeholder="Senha"
                                value={pass}
                                onChange={e => setPass(e.target.value)}
                                />

                            </div>

                            <div className="form-group">
                                <button type="submit" className="btn float-right login_btn">Login</button>
                            </div>

                        </form>
                    </Card.Body>
                </Card>

            </section>
        </div>

    );
}
