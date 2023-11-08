package com.testepraticobackend.agendaTelefonica.repository;

import com.testepraticobackend.agendaTelefonica.model.Telefones;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;


public interface TelefonesRepository extends JpaRepository<Telefones, Long> {

    public List<Telefones> findAllByNumeroContainingIgnoreCase(@Param("numero") String numero);

}
