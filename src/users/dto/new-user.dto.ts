import { ApiProperty } from "@nestjs/swagger";


export class NewUserDto {
    @ApiProperty({example: 'some@email.com'})
    readonly email: string;
    @ApiProperty({example: '1234'})
    readonly password: string;
}