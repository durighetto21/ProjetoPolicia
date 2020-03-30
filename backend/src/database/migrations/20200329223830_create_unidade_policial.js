
exports.up = function(knex) {
    return knex.schema.createTable('unidade_policial',function(table){
        table.int('cod_dp').increments().primary();

        table.int('cod_cidade').notNullable();
        table.string('nome_fatasia',100).notNullable();
        table.string('razao_social',100).notNullable();
        table.string('cnpj',18).notNullable();
        table.string('ie',13).notNullable();
        table.int('inativo').notNullable();

        table.int('cod_usuario').notNullable();
        table.datetime('data_hora_cancelamento',{precision: 6}).defaultTo(knex.fn.now(6));

        table.foreign('cod_cidade').references('cod_cidade').inTable('cidades');
        table.foreign('cod_usuario').references('cod_usuario').inTable('usuarios');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('unidade_policial');
};
