import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../model/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  vitrine() {
    throw new Error('Method not implemented.');
  }
  //buscar(termo: string) {
    //throw new Error('Method not implemented.');
 // }

  buscar(termo: string): Observable<Produto[]> {
    return this.http.get<Produto[]>(`http://localhost:8080/api/produtos/busca/${termo}`);
  }

  constructor(private http: HttpClient) { }

  gravar(obj:Produto):Observable<any> {
    return this.http.post("http://localhost:8080/api/produto", obj);
  }

  alterar(obj:Produto):Observable<any> {
    return this.http.put("http://localhost:8080/api/produto", obj);
  }

  remover(codigo:number):Observable<any> {
    return this.http.delete("http://localhost:8080/api/produto/"+codigo);
  }

  carregar(codigo:number):Observable<any> {
    return this.http.get("http://localhost:8080/api/produto/"+codigo);
  }

  listar():Observable<any> {
    return this.http.get("http://localhost:8080/api/produtos");
  }

  carregarVitrine():Observable<any> {
    return this.http.get("http://localhost:8080/api/produto/vitrine");
  }

}

