
exports.up = function(knex) {
    return knex.schema.createTable('subtipos_ocorrencias',function(table){
        table.increments('cod_sequencial');
        table.int('cod_tipo_ocorrencias').notNullable();
        table.string('subtipo_ocorrencia_descricao',25).notNullable();
        table.int('inativo').default(0);

        table.int('usuario_cancelamento');
        table.datetime('data_hora_cancelamento',{precision: 6});

        table.foreign('cod_tipo_ocorrencias').references('cod_tipo_ocorrencias').inTable('tipos_ocorrencias');
        table.foreign('usuario_cancelamento').references('cod_usuario').inTable('usuarios');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('subtipos_ocorrencias');
};
