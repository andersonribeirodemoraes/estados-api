import * as Knex from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('estados').del();

  await knex('estados').insert([
    { id: 1, nome: 'São Paulo', uf: 'SP' },
    { id: 2, nome: 'Rio de Janeiro', uf: 'RJ' },
    { id: 3, nome: 'Pernambuco', uf: 'PE' },
    { id: 4, nome: 'Bahia', uf: 'BA' },
  ]);
}
