import { Module } from "@nestjs/common";
import { authController } from "./auth.controller";
import {AuthService
} from "./auth.service";
@Module({
    controllers: [authController],
    providers: [AuthService]
})
export class authModule{}