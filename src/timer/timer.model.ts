import { ApiProperty } from "@nestjs/swagger";
import { AutoIncrement, Column, DataType, Model, Table } from "sequelize-typescript";

interface TimerCreationAttributes {    
    user_id: number;
    time: string;
    event_type: boolean;
}

@Table({tableName: 'times'})
export class Timer extends Model<Timer, TimerCreationAttributes> {
    
    @ApiProperty({example: '1', description: "Unique id"})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: '1', description: "User id"})
    @Column({type: DataType.INTEGER, unique: false})
    user_id: number;

    @ApiProperty({example: '2013-10-21T13:28:06.419Z', description: "DateTime string"})
    @Column({type: DataType.STRING, unique: false, allowNull: false})
    time: string;

    @ApiProperty({example: true, description: "Use true if timer start, false if timer stop"})
    @Column({type: DataType.BOOLEAN, unique: false, allowNull: false})
    event_type: boolean;

}