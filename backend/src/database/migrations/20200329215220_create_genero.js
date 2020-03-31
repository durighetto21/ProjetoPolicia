
exports.up = function(knex) {
    return knex.schema.createTable('generos',function(table){
        table.increments('cod_genero');
        table.string('genero_descricao',25).notNullable();
        table.int('inativo').default(0);

        table.int('usuario_cancelamento');
        table.datetime('data_hora_cancelamento',{precision: 6});
        

        table.foreign('usuario_cancelamento').references('cod_usuario').inTable('usuarios');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('generos');
};
