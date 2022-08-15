package com.example.liberary.studentliberary.Controller;

import com.example.liberary.studentliberary.Model.Author;
import com.example.liberary.studentliberary.Services.AuthorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;

@RestController
public class AuthorController
{
    @Autowired
    AuthorService authorService;

  @PostMapping("/createAuthor")
    public ResponseEntity getAuthor(@RequestBody Author author)
  {
     authorService.create(author);
     return new ResponseEntity<>("the author is sucessfully added to the system", HttpStatus.CREATED);

  }
  @GetMapping("/authorById")

        public ResponseEntity getAuthorById(@RequestParam("id") int id)
    {
        Author obj1 = authorService.getAuthorById(id);
        return new ResponseEntity<>("author details - " + obj1, HttpStatus.OK);



    }

   /* @PostMapping("/updateAuthor")
    public ResponseEntity updateAuthor(@RequestBody Author author)
    {
        authorService.updateAuthor(author);
        return new ResponseEntity<>("the author is updated sucessfully ", HttpStatus.ACCEPTED);

    }*/




}
