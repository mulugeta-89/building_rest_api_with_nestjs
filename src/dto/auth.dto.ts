import { IsEmail, IsNotEmpty, IsString } from "class-validator"
//import { IsNotEmpty, IsString } from "class-validator/types/decorator/decorators"

export class authDto{
    @IsEmail()
    @IsNotEmpty()
    email: String

    @IsString()
    @IsNotEmpty()
    password: String
}