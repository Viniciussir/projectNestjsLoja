import { Injectable } from "@nestjs/common";

@Injectable()
export class UsuarioRepositery {
    private usuarios = [];

    async salvar(usuario){
        this.usuarios.push(usuario);
    }

    async listar(){
        return this.usuarios;
    }
}