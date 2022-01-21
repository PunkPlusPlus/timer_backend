import { Module } from '@nestjs/common';
import { TimerService } from './timer.service';
import { TimerController } from './timer.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Timer } from './timer.model';

@Module({
  providers: [TimerService],
  controllers: [TimerController],
  imports: [
    SequelizeModule.forFeature([Timer])
  ]
})
export class TimerModule {}
