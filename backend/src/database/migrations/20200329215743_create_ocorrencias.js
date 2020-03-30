
exports.up = function(knex) {
    return knex.schema.createTable('ocorrencias',function(table){
        table.increments('cod_ocorrencia');

        table.int('cod_dp').notNullable();
        table.int('cod_sequencial').notNullable();
        table.string('numero_rdo').notNullable();
        table.int('cod_usuario_ocorrencia').notNullable();
        table.datetime('data_hora_ocorrencia',{precision: 6});
        table.int('cod_flagrante').notNullable();
        table.int('cod_genero').notNullable();
        
        table.foreign('cod_dp').references('cod_dp').inTable('unidade_policial');
        table.foreign('cod_sequencial').references('cod_sequencial').inTable('subtipos_ocorrencias');
        table.foreign('cod_usuario_ocorrencia').references('cod_usuario').inTable('usuarios');
        table.foreign('cod_flagrante').references('cod_flagrante').inTable('flagrantes');
        table.foreign('cod_genero').references('cod_genero').inTable('generos');

    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('ocorrencias');
};
