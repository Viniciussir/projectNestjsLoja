export class UsuarioRepositery {
    private usuarios = [];

    async salvar(usuario){
        this.usuarios.push(usuario);
        console.log(this.usuarios)
    }
}