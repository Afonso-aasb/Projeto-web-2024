package com.fatec.loja.repositories;

import com.fatec.loja.classes.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ItemRepository extends
JpaRepository<Item,Integer> {

}