const connection = require('../database/connection');
const DataHora = require('../utils/RetornaDataHora');

module.exports = {

    async index (request,response){
        const {page =1} = request.query; // passado por get . Ex: /incidents?page=4

        
        const tipos = await connection('tipo_ocorrencias') // retorna com paginação 5 por página
        .where('inativo',0)
        .limit(5)
        .offset((page-1)*5)
        .select('*');
        
        return response.json(tipos);
    },


    async create(request,response){
        const tipo_descricao = request.body;

        await connection('tipo_ocorrencias').insert(tipo_descricao);
      
        return response.status(204).send();  
    },

    async delete(request,response){
        const {cod_tipo_ocorrencia} = request.params;
        const user = request.headers.user;
  
        const tipos = await connection('tipo_ocorrencias')
        .where('cod_tipo_ocorrencia',cod_tipo_ocorrencia)
        .select('*')
        .first();     

        if(tipos.cod_tipo_ocorrencia != cod_tipo_ocorrencia){
            return response.status(401).json({error: 'Operação não permitida'}); // status -  não autorizado
        }
        tipos.inativo = 1;
        tipos.usuario_cancelamento = user;
        tipos.data_hora_cancelamento = DataHora();
        
        await connection('tipo_ocorrencias').where('cod_tipo_ocorrencia',cod_tipo_ocorrencia).update(tipos);

        return response.status(204).send(); // resposta sucesso mas sem conteúdo.
    }
    
};