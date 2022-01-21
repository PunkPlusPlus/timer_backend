import { ApiProperty } from "@nestjs/swagger";
import { AutoIncrement, Column, DataType, Model, Table } from "sequelize-typescript";

interface UserCreationAttributes {
    email: string;
    password: string;
}

@Table({tableName: 'users'})
export class Users extends Model<Users, UserCreationAttributes> {
    //@ApiProperty({example: '1', description: "Unique id"})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: "some@email", description: "Your email address"})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string;

    @ApiProperty({example: '1234', description: "So security password"})
    @Column({type: DataType.STRING, unique: false, allowNull: false})
    password: string;

    @Column({type: DataType.BOOLEAN, unique: false, defaultValue: false})
    banned: boolean;

    @Column({type: DataType.STRING, allowNull: true})
    banReason: string;

}