package com.example.liberary.studentliberary.Services;

import com.example.liberary.studentliberary.Model.Author;
import com.example.liberary.studentliberary.Model.Book;
import com.example.liberary.studentliberary.Repository.AuthorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthorService
{
    @Autowired
    AuthorRepository authorRepository;

    public void create(Author author)
    {
      authorRepository.save(author);
    }
    public Author getAuthorById(int id)
    {
        return authorRepository.findById(id).get(); //get will return null if id is not present
    }
   /* public void updateAuthor(Author author)
    {                                         //hw
        authorRepository.save(author);
    }*/


}
