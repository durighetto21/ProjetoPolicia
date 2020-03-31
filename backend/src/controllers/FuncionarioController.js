const connection = require('../database/connection');
const DataHora = require('../utils/RetornaDataHora');
const cripty = require('md5');

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
        const {login, pass, nome_completo, email,usuario_delegado} = request.body;
        const cod_dp = request.headers.authorization;
        const senha = cripty(pass);

/*         Verificar a questão da dp estar ativa ou não, pois se estou cadastrando nessa dp, teoricamente ela está ativa
            então por enquanto não farei nenhuma verificação do tipo, isso assumindo que um usuário de 1 dp só em acesso
            e poderá apenas criar/modificar/excluir um usuário daquela respectiva dp.
        
        const unidade_policial = await connection('unidade_policial')
        .where('cod_dp',cod_dp)
        .andWhere('inativo',0)
        .select('*')
        .first();     //verifica se o usuario existe, depois se o cod_dp é igual o da Unidade Logada

        if(unidade_policial.length() === 0){
            return response.status(401).json({error: 'Operação não permitida'}); // status -  não autorizado
        }
*/
        // Atualmente ao chamar essa rota ela insere um novo usuário 
        // Poderá ser implementado mais adiante a regra de negócio para inserir, se usuário tem permissão etc..

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