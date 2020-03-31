const connection = require('../database/connection');

module.exports = {

    async index (request,response){
        const {page =1} = request.query; 

        // const [count] = await connection('unidade_policial').where('inativo', 0).count(); // total de casos

        const departamentos = await connection('unidade_policial') // retorna com paginação 5 por página
        .join('cidades', 'cidades.cod_cidade', '=', 'unidade_policial.cod_cidade')
        .join('estados','estados.cod_estado','=', 'cidades.cod_estado')
        .limit(5)
        .offset((page-1)*5)
        //.select('*');
        .select(['unidade_policial.*','cidades.cidade_nome','estados.uf']);

        //response.header('X-Total-Count', count['count(*)']);    // retorna pro header do respose o total de casos
        return response.json(departamentos);
    },

    async create(request,response){
        const {cod_cidade, nome_fantasia, razao_social, cnpj, ie, logradouro, numero, cep, bairro, telefone} = request.body;
            
        await connection('unidade_policial').insert({ 
            cod_cidade, 
            nome_fantasia, 
            razao_social, 
            cnpj, 
            ie,
            logradouro,
            numero,
            cep,
            bairro,
            telefone,
        })
      
        return response.status(204).send();  
    }
    
};