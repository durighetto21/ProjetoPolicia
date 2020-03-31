const connection = require('../database/connection');
const cripty = require('md5');

module.exports = {
    async create (request,response){
        const { login, senha } = request.body;
        const pass = cripty(senha);

        //Dúvida e se a dp estiver inativa ??

        const user = await connection('usuarios')
        .join('unidade_policial','unidade_policial.cod_dp','=','usuarios.cod_dp')
        .where('login',login)
        .andWhere('senha',pass)
        .andWhere('usuarios.inativo',0)
        .select('*')
        .first();

        if(!user){
            return response.status(400).json({error: 'Usuário ou senha inválido!'});
        }
        return response.json(user);
    }
};