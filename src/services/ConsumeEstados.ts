import { EstadosProps } from '../repositories/estados';
import RabbitService from './rabbit';

const rabbitService = new RabbitService();

class ConsumeEstados {
  public async execute(): Promise<any> {
    try {
      const connection = await rabbitService.connect();
      const channel = await rabbitService.createChannel(connection);

      return await rabbitService.consume(
        connection,
        channel,
        'processing',
        'results',
      );
    } catch (err) {
      throw new Error('Erro ao consumir a fila');
    }
  }
}

export default ConsumeEstados;
