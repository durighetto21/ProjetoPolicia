
exports.up = function(knex) {
    return knex.schema.createTable('usuarios',function(table){
        table.increments('cod_usuario');
        
        table.string('login',20).notNullable();
        table.binary('senha',90).notNullable();
        table.string('nome_completo',80).notNullable();
        table.string('email',100).notNullable();
            table.int('cod_dp').notNullable();
        table.int('usuario_delegado').default(0);
        table.int('inativo').default(0);
        table.int('usuario_cancelamento');
        table.datetime('data_hora_cancelamento',{precision: 6});
        table.string('caminho_foto',500);

        table.foreign('cod_dp').references('cod_dp').inTable('unidade_policial');
        table.foreign('usuario_cancelamento').references('cod_usuario').inTable('usuarios');
        

    });
  
};

exports.down = function(knex) {
  
};
