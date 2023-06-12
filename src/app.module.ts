import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SumController } from './sum.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'SUM_SERVICE',
        transport: Transport.TCP,
        options: { port: 5000 },
      },
    ]),
  ],
  controllers: [AppController, SumController],
  providers: [AppService],
})
export class AppModule {}
