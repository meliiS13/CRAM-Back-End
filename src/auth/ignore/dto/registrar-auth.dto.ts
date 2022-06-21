import { PartialType } from "@nestjs/swagger";
import { IsEmail, MaxLength, MinLength, IsNotEmpty } from "class-validator";
import { LoginAuthDto } from "./login-auth.dto";
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()

export class RegisterAuthDto extends PartialType(LoginAuthDto){

    @Column({name: 'Nombre', type: 'text'})
    nombre: string

    @Column({name:'Mail'})
    mail: string

    @PrimaryGeneratedColumn()

    IdUsuario: number
    
} 