import { IsEmail, IsNotEmpty, IsOptional, MinLength } from "class-validator";
import { EmailEhUnico } from "../validacao/email-eh-unico.validator";

export class AtualizaUsuarioDTO {

    @IsNotEmpty({message:'O nome não pode ser vazio'})
    @IsOptional()
    nome:string;

    @IsEmail(undefined, {message: 'O email informado é invalido'})
    @EmailEhUnico({message: 'Ja existe um usuario com este e-mail'})
    @IsOptional()
    email:string;

    @MinLength(6, {message: 'A senha precisa ter pelo menos 6 caracteres'})
    @IsOptional()
    senha:string
}