package com.testepraticobackend.agendaTelefonica.controller;

import com.testepraticobackend.agendaTelefonica.model.Contatos;
import com.testepraticobackend.agendaTelefonica.model.Telefones;
import com.testepraticobackend.agendaTelefonica.repository.ContatosRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/contatos")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ContatosController {

    @Autowired
    private ContatosRepository contatosRepository;

    @GetMapping
    public ResponseEntity<List<Contatos>> getAll(){

        return ResponseEntity.ok(contatosRepository.findAll());
    }

    @GetMapping("/contatos/{id}")
    public ResponseEntity<Contatos> getById(@PathVariable Long id){

        return contatosRepository.findById(id)
                .map(resposta -> ResponseEntity.ok(resposta))
                .orElse(ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }

    @GetMapping("/nome/{nome}")
    public ResponseEntity<List<Contatos>> getByNome(@PathVariable String nome){

        return ResponseEntity.ok(contatosRepository.findAllByNomeContainingIgnoreCase(nome));
    }

    @PostMapping
    public ResponseEntity<Contatos> post(@RequestBody @Valid Contatos contato){

        return ResponseEntity.status(HttpStatus.CREATED)
                .body(contatosRepository.save(contato));
    }

    @PutMapping
    public ResponseEntity<Contatos> put(@RequestBody @Valid Contatos contato){

        return contatosRepository.findById((contato.getId()))
                .map(resposta -> ResponseEntity.status(HttpStatus.OK).body(contatosRepository.save(contato)))
                .orElse(ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id){
        Optional<Contatos> contato = contatosRepository.findById(id);

        if(contato.isEmpty())
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);

        contatosRepository.deleteById(id);
    }


}
