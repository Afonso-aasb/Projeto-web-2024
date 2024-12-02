import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto } from '../model/produto';
import { ProdutoService } from '../service/produto.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-busca',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './busca.component.html',
  styleUrl: './busca.component.css'
})
export class BuscaComponent {
  public mensagem: string = "";
  public lista: Produto[] = [];
  public termo: string = "";
  
  constructor(private service:ProdutoService){
      let termoBusca = localStorage.getItem("termoBusca");
      if(termoBusca!=null){
        this.termo = termoBusca;
        this.fazerBusca();
      }
  }

  fazerBusca(){
    this.service.buscar(this.termo).subscribe({
      next:(data)=>{
        this.lista = data;
        if(this.lista.length<=0) 
          this.mensagem = "não existe produtos com a palavra:"+ this.termo;
        else 
          this.mensagem = this.lista.length + " registro(s) encontrados com a palavra:"+ this.termo;
      },
      error:(msg)=>{this.mensagem = "ocorreu erro tente mais tarde!!!!"}
    });
  }

  public verDetalhe(item:Produto){
    localStorage.setItem("produto", JSON.stringify(item));
    window.location.href = "./detalhe";  
  }

}
