package com.example.liberary.studentliberary.Controller;

import com.example.liberary.studentliberary.Model.Student;
import com.example.liberary.studentliberary.Repository.StudentRepository;
import com.example.liberary.studentliberary.Services.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import javax.xml.ws.Response;
import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class StudentController
{
   @Autowired
    StudentService studentService;
   @Autowired
    StudentRepository studentRepository;

    @Autowired
    private Environment env;

   @PostMapping("/createStudent")
   public ResponseEntity createStudent(@RequestBody Student student)
   {
       studentService.createStudent(student);
       return new ResponseEntity<>("the  student is successfully added to the system", HttpStatus.CREATED);
   }
    @GetMapping("/getData")
    public String data()
        {
            return env.toString();
        }

    @GetMapping("/studentById")
    public ResponseEntity getStudentById(@RequestParam("id") int id){
        Student obj = studentService.getDetailsById(id);
        return new ResponseEntity<>("Student details - " + obj, HttpStatus.OK);
    }

   @GetMapping("/getStudents")
   public ResponseEntity getStudent()
   {

      List<Student> al=studentService.getStudents();
       return new ResponseEntity<>(al,HttpStatus.OK);



   }


   @PutMapping("/updateStudent")
    public ResponseEntity updateStudent(@RequestBody Student student)
   {
       studentService.updateStudent(student); //while updating the student you have to pass all the fields what is the new value will be reflected as new
       return new ResponseEntity<>("student is updated ",HttpStatus.ACCEPTED);
   }

   @DeleteMapping("/deleteStudent")
    public ResponseEntity deleteStudent(@RequestParam("id")int id)
   {
        studentService.deleteStudent(id);
       return new  ResponseEntity<>("student is deleted ",HttpStatus.ACCEPTED);
   }



}
