
exports.up = function(knex) {
    return knex.schema.createTable('tipos_ocorrencias',function(table){
        table.increments('cod_tipo_ocorrencias');

        table.string('tipo_ocorrencia_descricao',25).notNullable();
        table.int('inativo').default(0);
        table.int('usuario_cancelamento').notNullable();
        table.datetime('data_hora_cancelamento',{precision: 6});

        table.foreign('usuario_cancelamento').references('cod_usuario').inTable('usuarios');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('tipos_ocorrencias');
};
