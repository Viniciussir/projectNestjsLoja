import { UsuarioRepositery } from './usuario.repositery';
import { Body, Controller, Get, Post } from "@nestjs/common";

@Controller('/usuarios')
export class UsuarioController {

    private usuarioRepositery = new UsuarioRepositery();

    constructor(private usuarioRepository:UsuarioRepositery) {}

    @Post()
    async criaUsuario(@Body()dadosUsuario) {
        this.usuarioRepositery.salvar(dadosUsuario)
        return dadosUsuario
        //return {status: 'usuario criado'}
    }

    @Get()
    async listaUsuarios(){
        return this.usuarioRepositery.listar();
    }

}