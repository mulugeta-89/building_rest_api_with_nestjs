import { Controller, Post } from "@nestjs/common";
import {AuthService
} from "./auth.service";

@Controller("auth")
export class authController{ 
    constructor(private authservice: AuthService) {
    }
    @Post('signup')
    signup() {
        return "You are registered!"
    }
    @Post("login")
    login() {
        return "You are logged in!"
    }
}