import { Controller, Get, Inject, Query } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Controller()
export class AppController {
  constructor(@Inject('SUM_SERVICE') private client: ClientProxy) {}

  @Get('/test')
  async handle(
    @Query() queryDto: { numbers: number[] },
  ): Promise<Observable<number>> {
    const pattern = { cmd: 'sum' };
    const payload = queryDto.numbers;
    const a = this.client.send<number>(pattern, payload);

    return a;
  }
}
