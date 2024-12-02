package com.fatec.loja.classes;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name ="produto")
public class Produto {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO) 
    private int codigo;

    @Column(name = "nome", nullable = false, length = 100)
    private String nome;

    @Column(name = "descritivo", length = 255)
    private String descritivo;

    @Column(name = "valor", nullable = false)
    private Double valor;

    @Column(name = "quantidade", nullable = false)
    private Integer quantidade;

    @Column(name = "keywords", length = 255)
    private String keywords;

    @Column(name = "destaque") 
    private Integer destaque;

    @Column(name = "imagem", length = 255)
    private String imagem;

    // Getters e Setters
    public int getCodigo() {
        return codigo;
    }

    public void setCodigo(int codigo) {
        this.codigo = codigo;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getDescritivo() {
        return descritivo;
    }

    public void setDescritivo(String descritivo) {
        this.descritivo = descritivo;
    }

    public Double getValor() {
        return valor;
    }

    public void setValor(Double valor) {
        this.valor = valor;
    }

    public Integer getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(Integer quantidade) {
        this.quantidade = quantidade;
    }

    public String getKeywords() {
        return keywords;
    }

    public void setKeywords(String keywords) {
        this.keywords = keywords;
    }

    public Integer getDestaque() {
        return destaque;
    }

    public void setDestaque(Integer destaque) {
        this.destaque = destaque;
    }

    public String getImagem() {
        return imagem;
    }

    public void setImagem(String imagem) {
        this.imagem = imagem;
    }
}