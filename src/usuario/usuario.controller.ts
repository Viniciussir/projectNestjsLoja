import { CriaUsuarioDTO } from './dto/criausuario.dto';
import { UsuarioRepositery } from './usuario.repositery';
import { Body, Controller, Get, Post } from "@nestjs/common";

@Controller('/usuarios')
export class UsuarioController {

    constructor(
        private usuarioRepositery:UsuarioRepositery
    ) {}

    @Post()
    async criaUsuario(@Body()dadosUsuario: CriaUsuarioDTO) {
        this.usuarioRepositery.salvar(dadosUsuario)
        return dadosUsuario
        //return {status: 'usuario criado'}
    }

    @Get()
    async listaUsuarios(){
        return this.usuarioRepositery.listar();
    }

}