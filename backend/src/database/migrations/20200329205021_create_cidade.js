
exports.up = function(knex) {
    return knex.schema.createTable('cidades', function(table){
        table.increments('cod_cidade');
        table.int('cod_estado').notNullable();
        table.string('nome').notNullable();

        table.foreign('cod_estado').references('cod_estado').inTable('estados');
    });
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('cidades');
  
};
