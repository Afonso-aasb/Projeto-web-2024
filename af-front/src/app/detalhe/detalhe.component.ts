import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto } from '../model/produto';
import { Cesta } from '../model/cesta';
import { Item } from '../model/item';
@Component({
  selector: 'app-detalhe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalhe.component.html',
  styleUrl: './detalhe.component.css'
})
export class DetalheComponent {
  public mensagem: String = "";
  public item: Produto = new Produto();
  constructor(){
    let json = localStorage.getItem("produto");
    if(json!=null){
      this.item = JSON.parse(json);  
    } else {
      this.mensagem = "Produto não encontrado !";
    }  
  }

  adicionar(obj: Produto){
    let json = localStorage.getItem("cesta");
    let cesta = new Cesta();
    if(json!=null){
      cesta = JSON.parse(json);  
    }
    let novoItem = new Item();
    novoItem.quantidade = 1;
    novoItem.produto = obj;
    novoItem.valor = obj.valor;
    novoItem['codigoProduto'] = obj.codigo;
    cesta.itens.push(novoItem);
    localStorage.setItem("cesta", JSON.stringify(cesta));
    window.location.href="./cesta";
  }
}
