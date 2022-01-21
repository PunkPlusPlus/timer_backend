import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { TimerRecordDto } from './dto/timer-record.dto';
import {Timer} from './timer.model'
import { UserTimeDto } from './dto/user-time-dto';

@Injectable()
export class TimerService {
    constructor(@InjectModel(Timer) private timerRepository: typeof Timer){}

    async newRecord(dto: TimerRecordDto) {
        const record = await this.timerRepository.create(dto);
        return record;
    }

    async getUserTime(id: number) {
        //get all records by user_id from database
        const records = await Timer.findAll({where: {user_id: id}})
        return records
    }

    async getUserTimeToday(id: number) {

    }
}
