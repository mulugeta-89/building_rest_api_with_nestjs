import { ForbiddenException } from "@nestjs/common";
import { Injectable, Body } from "@nestjs/common";
import { Req } from "@nestjs/common/decorators";
import { User, Bookmark } from "@prisma/client";
import { PrismaClientKnownRequestError, PrismaClientUnknownRequestError } from "@prisma/client/runtime";
import * as argon from "argon2"
import { authDto } from "src/dto";
import { PrismaService } from "src/prisma/prisma.service";
@Injectable()
export class AuthService{ 
    constructor(private prisma: PrismaService) {
        
    }
    async signup(dto: authDto) {
        const hash = await argon.hash(dto.password.toString());
        try {
            const user = await this.prisma.user.create({
            data: {
                email: dto.email.toString(),
                hash,
            }
            })
            delete user.hash
            return user
        } catch (error) {
            if (error instanceof PrismaClientKnownRequestError) {
                if (error.code == "P2002") {
                    throw new ForbiddenException("Credentials Taken")
                }
            }
            throw error
        }
    }
    login() {
        return "You are logged in, bitch!"
        
    }

}