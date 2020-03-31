const connection = require('../database/connection');

module.exports = {

    async index (request,response){
        const {page =1} = request.query; // passado por get . Ex: /incidents?page=4

        
        const flagrantes = await connection('flagrantes') // retorna com paginação 5 por página
        .where('inativo',0)
        .limit(5)
        .offset((page-1)*5)
        .select('*');
        
        return response.json(flagrantes);
    },


    async create(request,response){
        const flagrante_descricao = request.body;

        await connection('flagrantes').insert(flagrante_descricao);
      
        return response.status(204).send();  
    },

    async delete(request,response){
        const {cod_flagrante} = request.params;
  
        const flagrante = await connection('flagrantes')
        .where('cod_flagrante',cod_flagrante)
        .select('*')
        .first();     

        if(flagrante.cod_flagrante != cod_flagrante){
            return response.status(401).json({error: 'Operação não permitida'}); // status -  não autorizado
        }
        flagrante.inativo = 1;
        
        await connection('flagrantes').where('cod_flagrante',cod_flagrante).update(flagrante);

        return response.status(204).send(); // resposta sucesso mas sem conteúdo.
    }
    
};