import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto } from '../model/produto';
import { ProdutoService } from '../service/produto.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-vitrine',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vitrine.component.html',
  styleUrl: './vitrine.component.css'
})
export class VitrineComponent {
  public destaque: string = `Namastê - Bem-vindo à Loja de Bem Estar Nirvana, o seu Espaço de Relaxamento e Bem-Estar. <br>
    Na Nirvana, acreditamos que o bem-estar é o caminho para uma vida plena e equilibrada. Nossa missão é oferecer produtos cuidadosamente selecionados que promovam relaxamento, tranquilidade e harmonia em sua rotina diária. <br>
    Descubra uma linha completa de itens que vão desde velas aromáticas, óleos essenciais e difusores, até produtos de autocuidado que trazem conforto e serenidade. Cada detalhe foi pensado para proporcionar a você uma experiência única de paz e renovação. <br>
    Permita-se desacelerar, cuidar de si e encontrar o equilíbrio que você merece. 
    Na Nirvana, estamos aqui para guiar você nessa jornada de bem-estar e plenitude.`

  public mensagem: string = `Conheça as nossas promoções`;
  public lista: Produto[] = [];
  public itens: any;
  router: any;
   
    constructor(private service : ProdutoService){
      this.carregarVitrine();      
    }
 
  carregarVitrine(){
    this.service.carregarVitrine().subscribe({
      next:(data) =>{this.lista = data},
      error:(msg) =>{this.mensagem="ocorreu um erro, volte mais tarde"}
    });     

  }
    public verDetalhe(item:Produto){
      localStorage.setItem("produto", JSON.stringify(item));
      window.location.href = "./detalhe";  
    }

    public navegarParaCadastro(): void { 
           window.location.href="./cliente"
    }
  }