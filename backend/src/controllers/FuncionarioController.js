const connection = require('../database/connection');
const DataHora = require('../utils/RetornaDataHora');

// tabela Usuario

module.exports = {

    //cadastro: nome completo, login, senha, e-mail, unidade_policial
    // exclusão
    //listar todos

    // Cadastro de Delegado: colocar checkBox para saber se é delegado
    async index (request,response){
        const {page =1} = request.query; // passado por get . Ex: /incidents?page=4

        const unidade_Policial = request.headers.authorization;
        
        const usuarios = await connection('usuarios') // retorna com paginação 5 por página
        .where('cod_dp',unidade_Policial)
        .limit(5)
        .offset((page-1)*5)
        .select('*');
        
        return response.json(usuarios);
    },


    async create(request,response){
        const {login, senha, nome_completo, email, cod_dp,usuario_delegado} = request.body;

        await connection('usuarios').insert({ 
            login,
            senha,
            nome_completo,
            email,
            cod_dp,
            usuario_delegado,
        })
      
        return response.status(204).send();  
    },
    async delete(request,response){
        const {cod_usuario} = request.params;
        const unidade_Policial = request.headers.authorization;
        const user = request.headers.user;

        

        const usuario = await connection('usuarios')
        .where('cod_usuario',cod_usuario)
        .select('*')
        .first();     //verifica se o usuario existe, depois se o cod_dp é igual o da Unidade Logada

        if(usuario.cod_dp != unidade_Policial){
            return response.status(401).json({error: 'Operação não permitida'}); // status -  não autorizado
        }
        usuario.inativo = 1;
        usuario.usuario_cancelamento = user;
        usuario.data_hora_cancelamento = DataHora();
        await connection('usuarios').where('cod_usuario',cod_usuario).update(usuario);

        return response.status(204).send(); // resposta sucesso mas sem conteúdo.
    }
    
};