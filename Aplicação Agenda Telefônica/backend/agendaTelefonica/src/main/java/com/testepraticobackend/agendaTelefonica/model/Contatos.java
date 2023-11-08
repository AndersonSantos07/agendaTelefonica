package com.testepraticobackend.agendaTelefonica.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name="tb_contatos")
public class Contatos {

    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    private Long id;


    @NotBlank(message = "O atributo é obrigatório!")
    private String nome;

    @NotNull(message = "O atributo é obrigatório!")
    private int idade;

    @UpdateTimestamp
    private LocalDateTime data;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "contatos", cascade = CascadeType.REMOVE)
    @JsonIgnoreProperties("contatos")
    private List<Telefones> telefones;

    public List<Telefones> getTelefones() {
        return telefones;
    }

    public void setTelefones(List<Telefones> telefones) {
        this.telefones = telefones;
    }

    public LocalDateTime getData() {
        return data;
    }

    public void setData(LocalDateTime data) {
        this.data = data;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public int getIdade() {
        return idade;
    }

    public void setIdade(int idade) {
        this.idade = idade;
    }

}
