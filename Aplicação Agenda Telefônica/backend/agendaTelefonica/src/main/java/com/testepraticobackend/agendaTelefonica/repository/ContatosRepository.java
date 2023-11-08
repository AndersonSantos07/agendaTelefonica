package com.testepraticobackend.agendaTelefonica.repository;

import com.testepraticobackend.agendaTelefonica.model.Contatos;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface ContatosRepository extends JpaRepository<Contatos, Long> {

    public List<Contatos> findAllByNomeContainingIgnoreCase(@Param("nome") String nome);



}
