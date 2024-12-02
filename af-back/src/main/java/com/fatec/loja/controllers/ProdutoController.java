package com.fatec.loja.controllers;
import com.fatec.loja.classes.Produto;
import com.fatec.loja.repositories.ProdutoRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins="*")
@RestController
public class ProdutoController {
    @Autowired
    ProdutoRepository bd;

    @PostMapping("/api/produto")
    public void gravar(@RequestBody Produto obj){
        bd.save(obj);        
    }

    @PutMapping("/api/produto")
    public void alterar(@RequestBody Produto obj){
        bd.save(obj);       
    }

    @GetMapping("/api/produto/{codigo}")
    public Produto carregar(@PathVariable int codigo){
        Optional<Produto> obj = bd.findById(codigo);
        if(obj.isPresent()){
            return obj.get();
        } else {
            return null;
        }
    }

    @DeleteMapping("/api/produto/{codigo}")
    public void remover(@PathVariable int codigo){
        bd.deleteById(codigo);       
    }

  //  @GetMapping("/api/produto/busca/{pesquisa}")
  //  public List<Produto> buscar(@PathVariable String pesquisa){
  //     return bd.buscarVitrine();
  //  }

    @GetMapping("/api/produtos")
    public List<Produto> listar(){
     return bd.findAll();
    }

    @GetMapping("/api/produto/vitrine")
    public List<Produto> vitrine(){
        try {
            List<Produto> produtos = bd.listarVitrine();
            if (produtos.isEmpty()) {
                System.out.println("Nenhum produto encontrado na vitrine.");
            } else {
                System.out.println("Produtos encontrados: " + produtos.size());
            }
            return produtos;
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException("Erro ao buscar produtos na vitrine.", e);
        }
    }

    @GetMapping("/api/produto/busca/{termo}")
    public List<Produto> fazerBusca(@PathVariable String termo){
       return bd.fazerBusca("%"+ termo + "%");
    }


}
