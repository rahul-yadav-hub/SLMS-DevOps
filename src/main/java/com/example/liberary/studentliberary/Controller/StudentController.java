package com.example.liberary.studentliberary.Controller;

import com.example.liberary.studentliberary.Model.Student;
import com.example.liberary.studentliberary.Services.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.util.List;

@RestController
public class StudentController

{
   @Autowired
    StudentService studentService;
    @GetMapping("/getData")
    public String data()
    {
        return "hello";
    }

    @PostMapping("/createStudent")
   public ResponseEntity createStudent(@RequestBody Student student)
   {
       studentService.createStudent(student);
       return new ResponseEntity<>("the  student is successfully added to the system", HttpStatus.CREATED);
   }

   @PutMapping("/updateStudent")
    public ResponseEntity updateStudent(@RequestBody Student student)
   {
       studentService.updateStudent(student); //while updating the student you have to pass all the fields what is the new value will be reflected as new
       return new  ResponseEntity<>("student is updated ",HttpStatus.ACCEPTED);
   }

   @DeleteMapping("/deleteStudent")
    public ResponseEntity deleteStudent(@RequestParam("id")int id)
   {
        studentService.deleteStudent(id);
       return new  ResponseEntity<>("student is deleted ",HttpStatus.ACCEPTED);
   }



}
