
exports.up = function(knex) {
    return knex.schema.createTable('telefones_dp',function(table){
        table.int('cod_dp').notNullable();
        table.string('telefone',13).notNullable();
        
        table.int('inativo').notNullable();

        table.foreign('cod_dp').references('cod_dp').inTable('unidade_policial');
    });
  
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('telefones_dp');
};
