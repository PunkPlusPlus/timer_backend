import { ApiProperty } from "@nestjs/swagger";


export class UserTimeDto {

    @ApiProperty({example: 1})
    readonly user_id: number;
    
}