import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css'
})
export class ClienteComponent {
  public mensagem: string = "";
  public obj: Cliente = new Cliente();

  constructor(private service: ClienteService){}

  public gravar(){
    this.service.gravar(this.obj).subscribe({
        next:(data)=>{
          this.mensagem = "cadastro criado com sucesso!";
          this.limpar();
        },
        error:(err)=>{this.mensagem = "Ocorreu um erro tente mais tarde!";}
    });
  }
  public alterar(){
    this.service.alterar(this.obj).subscribe({
        next : (data) => {
          this.mensagem = "cadastro atualizado com sucesso!";
          this.limpar();
        },
        error: (err) => {
          console.log(err);
          this.mensagem = "Ocorreu um erro tente mais tarde!";
        }
    });
  }

  public remover(){
    this.service.remover(this.obj.codigo).subscribe({
        next : (data) => {
          this.mensagem = "cadastro removido com sucesso!";
          this.limpar();
        },
        error: (err) => {
          this.mensagem = "Ocorreu um erro tente mais tarde!";
        }
    });
  }

  public carregar(){
    this.service.carregar(this.obj.codigo).subscribe({
      next : (data) => {
        if(data==null){
          this.mensagem = "cadastro não encontrado, verifique!"
          this.limpar();
        } else {
          this.obj = data;
          this.mensagem = "";
        }
      },
      error: (err) => {
        this.mensagem = "Ocorreu um erro tente mais tarde!";
        this.limpar();
      }
  });

  }

  
  public limpar(){
    this.obj = new Cliente();
  }

}
