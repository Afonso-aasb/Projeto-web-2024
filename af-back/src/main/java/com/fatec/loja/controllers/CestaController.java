package com.fatec.loja.controllers;
import java.util.HashSet;
import java.util.List;

import java.util.Optional;
import java.util.Set;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fatec.loja.classes.Cliente;
import com.fatec.loja.classes.Item;
import com.fatec.loja.classes.Cesta;
import com.fatec.loja.repositories.CestaRepository;


@RestController
@CrossOrigin(origins = "*")
public class CestaController {
  @Autowired
  CestaRepository bd;

    @PostMapping("/api/cesta")
    public Cesta gravar(@RequestBody Cesta obj){
       obj.setCodigoCliente();
       bd.save(obj);
       return obj;
    }

    @PutMapping("/api/cesta")
    public void alterar(@RequestBody Cesta obj){
        bd.save(obj);
       }

    @GetMapping("/api/cesta/{codigo}")
    public Cesta carregar(@PathVariable int codigo){
       Optional<Cesta> obj = bd.findById(codigo);
       if(obj.isPresent()){
            return obj.get();
        } else {
            Cesta c1 = new Cesta();
            c1.setCliente(new Cliente());
            Set<Item> itens = new HashSet<Item>();
            itens.add(new Item());
            c1.setItens(itens);
            return c1;
        }
    }

    @DeleteMapping("/api/cesta/{codigo}")
    public void remover(@PathVariable int codigo){
        bd.deleteById(codigo);
       }

    @GetMapping("/api/cestas")
    public List<Cesta> listar(){
       return bd.findAll();
    }
}
