package com.example.liberary.studentliberary.Controller;

import com.example.liberary.studentliberary.Model.Author;
import com.example.liberary.studentliberary.Model.Book;
import com.example.liberary.studentliberary.Model.Genre;
import com.example.liberary.studentliberary.Repository.AuthorRepository;
import com.example.liberary.studentliberary.Services.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class BookController
{
    @Autowired
    BookService bookService;
    @Autowired
    AuthorRepository authorRepository;

    @PostMapping("/createBook")
    public ResponseEntity createBook(@RequestBody Book book)
    {
        bookService.createBook(book);//its  clear how to post request using constructor parameters
        return  new ResponseEntity<>("the book is added sucessfully", HttpStatus.ACCEPTED);
    }
    @GetMapping("/getBooks")
    public ResponseEntity getBooks(@RequestParam(value = "genre", required = false)String genre
                                  ,@RequestParam(value="available", required=false,defaultValue="true") boolean available
                                   ,@RequestParam(value="author",required=false)String author)

    {
        //genre+author
        //genre
        //author

        List<Book> bookList= bookService.getBooks(genre,available,author);

    return  new ResponseEntity<>(bookList,HttpStatus.OK);
    }
    @GetMapping("/getAuthor")
    public List<Author> getAuthor()
    {
        return  authorRepository.findAll();
    }






}
