import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { TimerRecordDto } from './dto/timer-record.dto';
import { UserTimeDto } from './dto/user-time-dto';
import { Timer } from './timer.model'
import { TimerService } from './timer.service';

@ApiTags('Timer')
@Controller('timer')
export class TimerController {

    constructor(private timerService: TimerService) {}

    @ApiOperation({summary: "Create user"}) 
    @ApiResponse({status: 200, type: Timer})
    @Post()
    create(@Body() timerDto: TimerRecordDto) {
        return this.timerService.newRecord(timerDto)
    }

    @ApiOperation({summary: "Get user time by user_id"})
    @ApiResponse({status: 200, type: Timer})
    @Get(":id")
    getTime(@Param('id') id) {
        return this.timerService.getUserTime(id);
    }

}
