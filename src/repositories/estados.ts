import db from '../database/connection';

export interface EstadoProps {
  id?: number;
  nome: string;
  uf: string;
}

export interface EstadosProps {
  estados: EstadoProps[];
}

class EstadosRepository {
  async show(): Promise<EstadosProps> {
    const estados = await db<EstadoProps>('estados')
      .where({})
      .columns('nome', 'uf')
      .orderBy('uf', 'asc');

    return { estados: estados };
  }
}

export default EstadosRepository;
