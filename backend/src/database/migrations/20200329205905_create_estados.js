
exports.up = function(knex) {
    return knex.schema.createTable('estados', function(table){
        table.int('cod_estado').increments().primary();
        table.string('nome',75).notNullable();
        table.string('uf',2).notNullable();
    });
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('estados');
  
};
