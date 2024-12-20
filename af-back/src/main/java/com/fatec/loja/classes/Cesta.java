package com.fatec.loja.classes;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Transient;
import java.util.Set;
@Entity
public class Cesta {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO) 
    private int codigo;
    @Transient
    private Cliente cliente;
    private int codigoCliente;
    public void setCodigoCliente() {
        this.codigoCliente = this.cliente.getCodigo();
    }
    public int getCodigoCliente() {
        return codigoCliente;
    }
    private double total = 0;
    @Transient
    private Set<Item> itens;
    public int getCodigo() {
        return codigo;
    }
    public void setCodigo(int codigo) {
        this.codigo = codigo;
    }
    public Cliente getCliente() {
        return cliente;
    }
    public void setCliente(Cliente cliente) {
        this.cliente = cliente;
        this.codigoCliente = cliente.getCodigo();
    }
    public double getTotal() {
        return total;
    }
    public void setTotal(double total) {
        this.total = total;
    }
    public Set<Item> getItens() {
        return itens;
    }
    public void setItens(Set<Item> itens) {
        this.itens = itens;
    } 

    
}
