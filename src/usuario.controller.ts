import { UsuarioRepositery } from './usuario.repositery';
import { Body, Controller, Post } from "@nestjs/common";

@Controller('/usuarios')
export class UsuarioController {

    private usuarioRepositery = new UsuarioRepositery

    @Post()
    async criaUsuario(@Body()dadosUsuario) {
        this.usuarioRepositery.salvar(dadosUsuario)
        return dadosUsuario
        //return {status: 'usuario criado'}
    }

}