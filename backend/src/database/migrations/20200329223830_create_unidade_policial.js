
exports.up = function(knex) {
    return knex.schema.createTable('unidade_policial',function(table){
        table.increments('cod_dp');

        table.int('cod_cidade').notNullable();
        table.string('nome_fantasia',100).notNullable();
        table.string('razao_social',100).notNullable();
        table.string('cnpj',18).notNullable();
        table.string('ie',13).notNullable();
        table.int('inativo').default(0);

        table.string('logradouro',100).notNullable();
        table.string('numero',10).notNullable();
        table.string('cep',9).notNullable();
        table.string('bairro',100).notNullable();

        table.int('usuario_cancelamento');
        table.datetime('data_hora_cancelamento',{precision: 6});

        table.foreign('cod_cidade').references('cod_cidade').inTable('cidades');
        table.foreign('usuario_cancelamento').references('cod_usuario').inTable('usuarios');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('unidade_policial');
};
