import { AtualizaUsuarioDTO } from './dto/AtualizaUsuario.dto';
import { CriaUsuarioDTO } from './dto/criausuario.dto';
import { ListaUsuarioDTO } from './dto/ListaUsuario.dto';
import { UsuarioEntity } from './usuario.entity';
import { UsuarioRepository } from './usuario.repository';
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { v4 as uuid } from 'uuid';
 
@Controller('/usuarios')
export class UsuarioController {

    constructor(
        private usuarioRepository:UsuarioRepository
    ) {}

    @Post()
    async criaUsuario(@Body()dadosUsuario: CriaUsuarioDTO) {
        const usuarioEntity = new UsuarioEntity();
        usuarioEntity.nome = dadosUsuario.nome;
        usuarioEntity.email = dadosUsuario.email;
        usuarioEntity.senha = dadosUsuario.senha;
        usuarioEntity.id = uuid();
        this.usuarioRepository.salvar(usuarioEntity)
        return { 
            usuario: new ListaUsuarioDTO(usuarioEntity.id, usuarioEntity.nome),
            mensagem: 'Usuario criado com sucesso!' 
        }
    }

    @Get()
    async listaUsuarios(){
        const usuariosSalvos = await this.usuarioRepository.listar();
        const usuariosLista = usuariosSalvos.map(
            usuario => new ListaUsuarioDTO(
                usuario.id,
                usuario.nome
            )
        );
        return usuariosLista
    }

    @Put('/:id')
    async atualizaUsuario(@Param('id') id:string, @Body() novosDados: AtualizaUsuarioDTO){
        const usuarioAtualizado = await this.usuarioRepository.atualiza(id, novosDados);

        return { 
            usuario: new ListaUsuarioDTO(
                usuarioAtualizado.id,
                usuarioAtualizado.nome
            ),
            mensagem: 'Usuario atualizado com sucesso!' 
        }
    }

    @Delete('/:id')
    async removeUsuario(@Param('id') id: string) {
        const usuarioRemovido = await this.usuarioRepository.remove(id);
    
        return {
            usuario: new ListaUsuarioDTO(
                usuarioRemovido.id,
                usuarioRemovido.nome
            ),
            mensagem: 'Usuário removido com sucesso'
        }
    }

}