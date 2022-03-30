package com.example.liberary.studentliberary.Services;

import com.example.liberary.studentliberary.Model.Book;
import com.example.liberary.studentliberary.Model.Genre;
import com.example.liberary.studentliberary.Repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService
{
    @Autowired
    BookRepository bookRepository;
    public void createBook(Book book)
    {
        bookRepository.save(book); //name,genre,author
    }

    public List<Book> getBooks(String genre,boolean available,String author)
    {
        if(genre !=null && author!=null)
        {
          return  bookRepository.findBooksByGenreAuthor(genre,author,available);

        }
        else if(genre!=null)
        {
          return   bookRepository.findBooksByGenre(genre,available);
        }
        else if (author!=null)
        {
        return  bookRepository.findBooksByAuthor(author,available);
        }
        else
        {
         return   bookRepository.findByAvailability(available);
        }

    }






}
