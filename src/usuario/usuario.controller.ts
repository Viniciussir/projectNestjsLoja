import { CriaUsuarioDTO } from './dto/criausuario.dto';
import { UsuarioRepository } from './usuario.repository';
import { Body, Controller, Get, Post } from "@nestjs/common";

@Controller('/usuarios')
export class UsuarioController {

    constructor(
        private usuarioRepository:UsuarioRepository
    ) {}

    @Post()
    async criaUsuario(@Body()dadosUsuario: CriaUsuarioDTO) {

        this.usuarioRepository.salvar(dadosUsuario)
        return dadosUsuario
    }

    @Get()
    async listaUsuarios(){
        return this.usuarioRepository.listar();
    }

}