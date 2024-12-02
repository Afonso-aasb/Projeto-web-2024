import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css',
})
export class CadastroComponent {
  mensagem: string = '';
  obj: Cliente = new Cliente();
  mensagemErro: string = '';
  confirmarSenha: string = '';

  constructor(private readonly service: ClienteService) {}
  gravar() {
    console.log('gravando.......')
    this.mensagemErro = '';
    this.mensagemErro = '';
    this.mensagem = '';

    if (!this.obj.email) {
      this.mensagemErro = 'Campo e-mail obrigatório!';
      if (!this.obj.senha) {
        this.mensagemErro = 'Campo senha obrigatório!';
        return;
      }
      return;
    }

    if (!this.obj.senha) {
      this.mensagemErro = 'Campo senha obrigatório!';
      return;
    }

    if (this.obj.senha !== this.confirmarSenha) {
      this.mensagemErro = 'Senha não confere!';
      return;
    }

    // this.service.verificarEmail(this.obj.email).subscribe({
    //   next: (emailExistente: any) => {
    //     if (emailExistente) {
    //       this.mensagemErro = 'E-mail já cadastrado!';
    //     } else {
    //       this.service.inserir(this.obj);
    //       this.mensagem = 'O seu cadastro foi efetuado com sucesso!';
    //       this.mensagemErro = '';
    //     }
    //   },
    //   error: () => {
    //     this.mensagemErro = 'Erro no e_mail, tente novamente.';
    //   },
    // });

    console.log(this.obj);
    this.service.inserir(this.obj).subscribe({
      next: (data) => {
        this.mensagem = 'Registrado com sucesso!';
      },
      error: (err) => {
        this.mensagemErro = 'Ocorreu um problema tente mais tarde!';
      },
    });
  }
  alterar() {
    this.service.alterar(this.obj).subscribe({
      next: (data) => {
        this.mensagem = 'Alterado com sucesso!';
      },
      error: (err) => {
        this.mensagemErro = 'Ocorreu um problema tente mais tarde!';
      },
    });
  }
  remover() {
    this.service.remover(this.obj.codigo).subscribe({
      next: (data) => {
        this.mensagem = 'Registro removido com sucesso!';
      },
      error: (err) => {
        this.mensagemErro = 'Ocorreu um problema tente mais tarde!';
      },
    });
  }
  pesquisar() {
    this.service.pesquisar(this.obj.codigo).subscribe({
      next: (data) => {
        this.obj = data;
        if (data == null) {
          this.mensagem = 'Registro não encontrado!';
        } else {
          this.obj = data;
          this.mensagem = '';
        }
      },
      error: (err) => {
        this.mensagem = 'Ocorreu um problema tente mais tarde!';
      },
    });
  }
}
