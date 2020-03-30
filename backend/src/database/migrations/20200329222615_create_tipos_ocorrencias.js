
exports.up = function(knex) {
    return knex.schema.createTable('tipos_ocorrencias',function(table){
        table.int('cod_tipo_ocorrencias').increments().primary();

        table.string('descricao',25).notNullable();
        table.int('inativo').notNullable();
        table.int('cod_usuario').notNullable();
        table.datetime('data_hora_cancelamento',{precision: 6}).defaultTo(knex.fn.now(6));

        table.foreign('cod_usuario').references('cod_usuario').inTable('usuarios');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('tipos_ocorrencias');
};
