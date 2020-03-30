
exports.up = function(knex) {
    return knex.schema.createTable('flagrantes', function(table){
        table.increments('cod_flagrante');
        table.string('descricao',60).notNullable();
        table.int('inativo').notNullable();

        table.int('cod_usuario').notNullable();
        table.datetime('data_hora_cancelamento',{precision: 6});

        table.foreign('cod_usuario').references('cod_usuario').inTable('usuarios');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('flagrantes');
};
