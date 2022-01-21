import { ApiProperty } from "@nestjs/swagger";


export class TimerRecordDto {
    @ApiProperty({example: 1})
    readonly user_id: number;
    @ApiProperty({example: '2013-10-21T13:28:06.419Z'})
    readonly time: string;
    @ApiProperty({example: true})
    readonly event_type: boolean;
}