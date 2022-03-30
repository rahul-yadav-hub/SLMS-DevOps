package com.example.liberary.studentliberary.Controller;

import com.example.liberary.studentliberary.Services.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TransactionalController
{
    @Autowired
    TransactionService transactionService;

    @PostMapping("/issueBook")
    public ResponseEntity issueBook(@RequestParam("cardId")int cardId,
                                    @RequestParam("bookId")int bookId) throws Exception
    {
        String externalTransactionalId= transactionService.issueBook(cardId,bookId);
        return new ResponseEntity<>("transaction complete,here is your transactionId "+externalTransactionalId, HttpStatus.ACCEPTED);
    }

  @PostMapping("/returnBook")
    public ResponseEntity  returnBook(@RequestParam("cardId")int cardId,
                                    @RequestParam("bookId")int bookId) throws Exception
    {
        String externalTransactionalId= transactionService.returnBook(cardId,bookId);
        return new ResponseEntity<>("transaction complete,here is your transactionId "+externalTransactionalId, HttpStatus.ACCEPTED);
    }

}
