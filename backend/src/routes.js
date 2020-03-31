const express = require('express');

const CidadeController = require('./controllers/CidadeController');
const EnderecoTelefoneController = require('./controllers/EnderecoTelefoneController');
const FlagranteController = require('./controllers/FlagranteController');
const GeneroController = require('./controllers/GeneroController');
const OcorrenciaController = require('./controllers/OcorrenciaController');
const SubTipoOcorrenciaController = require('./controllers/SubTipoOcorrenciaController');
const TiposOcorrenciaController = require('./controllers/TiposOcorrenciaController');
const UnidadePolicialController = require('./controllers/UnidadePolicialController');
const FuncionarioController = require('./controllers/FuncionarioController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();


// Rotas Usuario ( Funcionarios )
routes.get('/funcionario',FuncionarioController.index);
routes.post('/funcionario',FuncionarioController.create);
routes.delete('/funcionario/:cod_usuario', FuncionarioController.delete);

//Rotas Session
routes.post('/sessions', SessionController.create); // login - retorna usuario se existir e login e senha forem corretos.

//Rotas Unidade Policial
routes.post('/unidade_policial', UnidadePolicialController.create);
routes.get('/unidade_policial', UnidadePolicialController.index);

//Rotas Flagrante
routes.get('/flagrante',FlagranteController.index);
routes.post('/flagrante',FlagranteController.create);
routes.delete('/flagrante/:cod_flagrante', FlagranteController.delete);

//Rotas Genero
routes.get('/genero',GeneroController.index);
routes.post('/genero',GeneroController.create);
routes.delete('/genero/:cod_genero', GeneroController.delete);

//Rotas Tipo de Ocorrência
routes.get('/tipo_ocorrencia',TiposOcorrenciaController.index);
routes.post('/tipo_ocorrencia',TiposOcorrenciaController.create);
routes.delete('/tipo_ocorrencia/:cod_tipo_ocorrencia', TiposOcorrenciaController.delete);

//Rotas subTipo de Ocorrência
routes.get('/subtipo_ocorrencia',SubTipoOcorrenciaController.index);
routes.get('/subtipo_ocorrencia/:cod_tipo_ocorrencia',SubTipoOcorrenciaController.indexId);
routes.post('/subtipo_ocorrencia',SubTipoOcorrenciaController.create);
routes.delete('/subtipo_ocorrencia/:cod_sequencial', SubTipoOcorrenciaController.delete);

//Rotas Ocorrências


//Rotas Cidades

//Rotas Estado -> recebendo cod_cidade

//Rotas Telefone






module.exports = routes;