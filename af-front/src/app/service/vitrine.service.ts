import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../model/produto'; // Importando o modelo Produto, se necessário

@Injectable({
  providedIn: 'root'
})
export class VitrineService {

  private apiUrl = 'https://api.exemplo.com/produtos';  // Defina o URL da API aqui

  constructor(private http: HttpClient) {}

  // Método para obter a lista de produtos
  getProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.apiUrl);
  }
}
