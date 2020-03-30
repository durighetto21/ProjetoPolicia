
exports.up = function(knex) {
    return knex.schema.createTable('enderecos_dp',function(table){
        table.int('cod_dp').notNullable();
        table.string('logradouro',100).notNullable();
        table.string('numero',10).notNullable();
        table.string('cep',9).notNullable();
        table.string('bairro',100).notNullable();
        table.int('inativo').notNullable();

        table.foreign('cod_dp').references('cod_dp').inTable('unidade_policial');
    });
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('enderecos_dp');
};
