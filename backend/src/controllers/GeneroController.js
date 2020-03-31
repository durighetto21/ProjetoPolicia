const connection = require('../database/connection');
const DataHora = require('../utils/RetornaDataHora');

module.exports = {
    async index (request,response){
        const {page =1} = request.query; // passado por get . Ex: /incidents?page=4

        
        const generos = await connection('generos') // retorna com paginação 5 por página
        .where('inativo',0)
        .limit(5)
        .offset((page-1)*5)
        .select('*');
        
        return response.json(generos);
    },


    async create(request,response){
        const genero_descricao = request.body;

        await connection('generos').insert(genero_descricao);
      
        return response.status(204).send();  
    },

    async delete(request,response){
        const {cod_genero} = request.params;
        const user = request.headers.user;
  
        const genero = await connection('generos')
        .where('cod_genero',cod_genero)
        .select('*')
        .first();     

        if(genero.cod_genero != cod_genero){
            return response.status(401).json({error: 'Operação não permitida'}); // status -  não autorizado
        }
        genero.inativo = 1;
        genero.usuario_cancelamento = user;
        genero.data_hora_cancelamento = DataHora();
        
        await connection('generos').where('cod_genero',cod_genero).update(genero);

        return response.status(204).send(); // resposta sucesso mas sem conteúdo.
    }
    
};