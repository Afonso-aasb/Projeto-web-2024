package com.fatec.loja.repositories;

import com.fatec.loja.classes.Produto;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ProdutoRepository extends
JpaRepository<Produto, Integer>{

    @Query(value = "SELECT * FROM produto p WHERE p.destaque > 0", nativeQuery = true)
    List<Produto> listarVitrine();

    @Query(value = "select * from produto where keywords like ?1 order by nome",
    nativeQuery = true)
    List<Produto> fazerBusca(String termo);
    
}
