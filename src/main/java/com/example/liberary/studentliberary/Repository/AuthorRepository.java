package com.example.liberary.studentliberary.Repository;

import com.example.liberary.studentliberary.Model.Author;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;

@Transactional
public interface AuthorRepository  extends JpaRepository<Author,Integer>
{
   @Modifying
   @Query("update Author a set a.email = :#{#author.email}, "+
           "a.name = :#{#author.name}, "+
           "a.age = :#{#author.age}, "+
           "a.country = :#{#author.country} "+
           "where a.id = :#{#author.id}")
   int  updateAuthorDetails(Author author);

}

