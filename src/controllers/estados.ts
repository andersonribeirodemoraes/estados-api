import { Request, Response } from 'express';
import populacaoApi from '../services/populacaoApi';

import EstadosRepository, { EstadoProps } from '../repositories/estados';
import PublishEstados from '../services/PublishEstados';
import ConsumeEstados from '../services/ConsumeEstados';

const estadosRepository = new EstadosRepository();
const publishEstados = new PublishEstados();
const consumeEstados = new ConsumeEstados();

interface PopulacaoProps {
  id?: number;
  uf: string;
  populacao: number;
}

class EstadosController {
  public async show(request: Request, response: Response): Promise<Response> {
    const estados = await estadosRepository.show();

    await publishEstados.execute(estados);

    const data = await consumeEstados.execute();

    return response.json({ estados: JSON.parse(data) });
  }

  public async showRest(
    request: Request,
    response: Response,
  ): Promise<Response | void> {
    const data = await estadosRepository.show();

    const arrayPopulacao = data.estados.map(async (estado: EstadoProps) => {
      const result = await populacaoApi.get<PopulacaoProps>(
        `/populacao/${estado.uf.toUpperCase()}`,
      );
      return { ...estado, populacao: result.data?.populacao };
    });

    (async () => {
      try {
        const resultado = await Promise.all(arrayPopulacao);
        return response.send(resultado);
      } catch (err) {
        return response.status(500).send(err);
      }
    })();
  }
}

export default EstadosController;
