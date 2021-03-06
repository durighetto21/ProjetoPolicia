const connection = require('../database/connection');
const DataHora = require('../utils/RetornaDataHora');

module.exports = {
    
    async index (request,response){
        const {page =1} = request.query; // passado por get . Ex: /incidents?page=4

        
        const subtipos = await connection('tipo_ocorrencias_sequencial') // retorna com paginação 5 por página
        .where('inativo',0)
        .limit(5)
        .offset((page-1)*5)
        .select('*');
        
        return response.json(subtipos);
    },

    async indexId (request,response){
        const {cod_tipo_ocorrencia} = request.params;
        const {page =1} = request.query; // passado por get . Ex: /incidents?page=4

        
        const subtipos = await connection('tipo_ocorrencias_sequencial') // retorna com paginação 5 por página
        .where('inativo',0)
        .andWhere('cod_tipo_ocorrencia',cod_tipo_ocorrencia)
        .limit(5)
        .offset((page-1)*5)
        .select('*');
        
        return response.json(subtipos);
    },


    async create(request,response){
        const {subtipo_descricao, cod_tipo_ocorrencia} = request.body;

        await connection('tipo_ocorrencias_sequencial').insert({
            subtipo_descricao,
            cod_tipo_ocorrencia,
        });
      
        return response.status(204).send();  
    },

    async delete(request,response){
        const {cod_sequencial} = request.params;
        const user = request.headers.user;
  
        const subtipos = await connection('tipo_ocorrencias_sequencial')
        .where('cod_sequencial',cod_sequencial)
        .select('*')
        .first();     

        if(subtipos.cod_sequencial != cod_sequencial){
            return response.status(401).json({error: 'Operação não permitida'}); // status -  não autorizado
        }
        subtipos.inativo = 1;
        subtipos.usuario_cancelamento = user;
        subtipos.data_hora_cancelamento = DataHora();
        
        await connection('tipo_ocorrencias_sequencial').where('cod_sequencial',cod_sequencial).update(subtipos);

        return response.status(204).send(); // resposta sucesso mas sem conteúdo.
    }
};