package com.example.liberary.studentliberary.Services;

import com.example.liberary.studentliberary.Model.Card;
import com.example.liberary.studentliberary.Model.CardStatus;
import com.example.liberary.studentliberary.Model.Student;
import com.example.liberary.studentliberary.Repository.CardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CardService
{
    @Autowired
    CardRepository cardRepository;

    public Card createAndReturn(Student student)
    {
       Card card=new Card();
       card.setStudent(student);//student is set
       student.setCard(card);//card is set; Card is parent
       cardRepository.save(card);//so student will be  automatically will be saved
       return card;
    }
    public void deactivateCard(int student_id)
    {
        cardRepository.deactivateCard(student_id, CardStatus.DEACTIVATED.toString());

    }



}
