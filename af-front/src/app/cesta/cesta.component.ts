import { Component } from '@angular/core';
import { CestaService } from '../service/cesta.service';
import { Cesta } from '../model/cesta';
import { Item } from '../model/item';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-cesta',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cesta.component.html',
  styleUrl: './cesta.component.css'
})
export class CestaComponent {
  mensagem: string = "";
  cesta: Cesta = new Cesta();
  total: number = 0;
  constructor(private service: CestaService){
      let json = localStorage.getItem("cesta");
      if(json!=null){
        this.cesta = JSON.parse(json);
        this.mensagem = "";
        this.calcularTotal();
      } else {
        this.mensagem = "A cesta esta vazia!"
      }
   }

   calcularTotal(){
     let total = 0;
      for(let item of this.cesta.itens){
        this.total = this.total + item.valor;
      }
      this.cesta.total = this.total;
   }

   limpar(){
      this.cesta = new Cesta();
      localStorage.removeItem("cesta");
   }

   continuar(){
      window.location.href="./vitrine";
   }

   gravarPedido(){
      let jsonCliente = localStorage.getItem("cliente");
      if(jsonCliente != null) {
        this.cesta.cliente = JSON.parse(jsonCliente);
        this.cesta.total = this.total;
        this.service.gravarPedido(this.cesta).subscribe({
          next:(data: any)=>{
            let novoPedido = data;
            this.gravarItens(novoPedido);
          },
          error:()=>{this.mensagem = "Ocorreu um erro tente mais tarde!";}
        });
      } else {
        this.mensagem = "Faça o login para gravar o pedido !!!";
      }
   }

   gravarItens(novoPedido: Cesta){
      for(let obj of this.cesta.itens){
          obj['codigoCesta'] = novoPedido.codigo
      }
      this.service.gravarItens(this.cesta.itens).subscribe({
        next:()=>{
          this.mensagem="Pedido "+ novoPedido.codigo + " gravado com sucesso!!!";
          this.limpar();
        },
        error:()=>{this.mensagem = "Ocorreu um erro tente mais tarde!";}
    });
   }

}




