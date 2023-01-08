import { Controller, Post, ParseIntPipe } from "@nestjs/common";
import { Body, Req } from "@nestjs/common/decorators";
import { authDto } from "src/dto";
import {AuthService
} from "./auth.service";

@Controller("auth")
export class authController{ 
    constructor(private authservice: AuthService) {
    }
    @Post('signup')
    signup(@Body("email") email: string, @Body("password", ParseIntPipe) password: string) {
        console.log({
            email,
            typeOfEmail: typeof email,
            password,
            typeOfPassword: typeof password
        })
        return this.authservice.signup()
    }
    @Post("login")
    login() {
        return this.authservice.login()
    }
}