package com.testepraticobackend.agendaTelefonica.controller;

import com.testepraticobackend.agendaTelefonica.model.Contatos;
import com.testepraticobackend.agendaTelefonica.model.Telefones;
import com.testepraticobackend.agendaTelefonica.repository.TelefonesRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/telefones")
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class TelefonesController {

    @Autowired
    private TelefonesRepository telefonesRepository;

    @GetMapping
    public ResponseEntity<List<Telefones>> getAll(){

        return ResponseEntity.ok(telefonesRepository.findAll());
    }

    @GetMapping("/telefones/{id}")
    public ResponseEntity<Telefones> getById(@PathVariable Long id){

        return telefonesRepository.findById(id)
                .map(resposta -> ResponseEntity.ok(resposta))
                .orElse(ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }

    @GetMapping("/numero/{numero}")
    public ResponseEntity<List<Telefones>> getByNome(@PathVariable String numero){

        return ResponseEntity.ok(telefonesRepository.findAllByNumeroContainingIgnoreCase(numero));
    }

    @PostMapping
    public ResponseEntity<Telefones> post(@RequestBody @Valid Telefones telefone){

        return ResponseEntity.status(HttpStatus.CREATED)
                .body(telefonesRepository.save(telefone));
    }

    @PutMapping
    public ResponseEntity<Telefones> put(@RequestBody @Valid Telefones telefone){

        return telefonesRepository.findById(telefone.getId())
                .map(resposta -> ResponseEntity.status(HttpStatus.OK).body(telefonesRepository.save(telefone)))
                .orElse(ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id){
        Optional<Telefones> telefone = telefonesRepository.findById(id);

        if(telefone.isEmpty())
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);

        telefonesRepository.deleteById(id);
    }


}
