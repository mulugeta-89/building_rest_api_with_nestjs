import { Injectable, Body } from "@nestjs/common";
import { Req } from "@nestjs/common/decorators";
import { User, Bookmark } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
@Injectable()
export class AuthService{ 
    constructor(private prisma: PrismaService) {
        
    }
    signup() {
        return "You are signed up, bitch!"
    }
    login() {
        return "You are logged in, bitch!"
        
    }

}