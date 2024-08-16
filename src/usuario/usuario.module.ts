import { Module } from "@nestjs/common";
import { UsuarioController } from "./usuario.controller";
import { UsuarioRepositery } from "./usuario.repositery";

@Module({
    controllers:[UsuarioController],
    providers:[UsuarioRepositery]
})
export class UsuarioModule {

}