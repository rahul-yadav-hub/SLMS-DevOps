package com.example.liberary.studentliberary;

import com.example.liberary.studentliberary.Model.*;
import com.example.liberary.studentliberary.Repository.AuthorRepository;
import com.example.liberary.studentliberary.Repository.BookRepository;
import com.example.liberary.studentliberary.Repository.CardRepository;
import com.example.liberary.studentliberary.Repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Arrays;

@SpringBootApplication
public class StudentLiberaryApplication// implements CommandLineRunner
{

	public static void main(String[] args)
	{
		SpringApplication.run(StudentLiberaryApplication.class, args);
		System.out.println("hello!!");
	}
	@Autowired
//	static StudentRepository studentRepository;
	StudentRepository studentRepository;//we cant use static with autowired because static means current class context;

	@Autowired
	CardRepository cardRepository;

	@Autowired
	AuthorRepository authorRepository;

	@Autowired
	BookRepository bookRepository;

    /*	@Override
		public void run (String...args) throws Exception
		{
			1.Student student = new Student("pratik.rxl@gmail.com", "pratik", 20, "Sukovia");
			//Student student1=new Student("abc.rxl@gmail.com","ankit",20,"Wakanda");
			Card card = new Card();

			;// establishing bidirectional relationship between child and parent is Card here
		2.	student.setCard(card);
		3.	card.setStudent(student);

			//studentRepository.save(student); //saving student without saving the parent can give error ,suppose you go to college there is two tables,student and department student wants to take the admission in that department which does'nt exist;
		8	cardRepository.save(card);//saving it to parent Card,dont need to save student because card is bidirectional
		9	//studentRepository.save(student);
			//	cardRepository.findAll().stream().forEach(x->  System.out.println(x.getId()+" "+x.getStudent()));
			//  Card card1= cardRepository.findById(1).get();
			// System.out.println("id="+card1.getId());
			cardRepository.findAll().stream().forEach(System.out::println);
			//System.out.println(studentRepository.findStudentByEmailBySQl("pratik.rxl@gmail.com"));
		//	System.out.println(studentRepository.updateStudentEmail("pratik.rxl@gmail.com", "pratik123.rxl@gmail.com"))
			//	;"
		4.	Author author=new Author("william","william@gmail.com",20,"India");
		5.	Book book=new Book("Human Psychology", Genre.FICTIONAL,author);

		6.	authorRepository.save(author);
		7.	bookRepository.save(book);


		}*/
	}







