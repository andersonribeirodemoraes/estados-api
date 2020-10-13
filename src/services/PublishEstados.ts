import { EstadosProps } from '../repositories/estados';
import RabbitService from './rabbit';

const rabbitService = new RabbitService();

class PublishEstados {
  public async execute(estados: EstadosProps) {
    const channel = await rabbitService.createConfirmChannel(
      await rabbitService.connect(),
    );

    const data = JSON.stringify(estados);

    await rabbitService.publishToChannel(
      channel,
      'request',
      'processing',
      data,
    );
  }
}

export default PublishEstados;
