import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('estados', table => {
    table.increments('id').primary();
    table.string('nome').notNullable();
    table.string('uf').notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('estados');
}
