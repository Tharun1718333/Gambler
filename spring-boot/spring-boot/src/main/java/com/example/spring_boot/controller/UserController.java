package com.example.spring_boot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.spring_boot.model.UserService;
import com.example.spring_boot.model.aspnetuser;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping
    public ResponseEntity<List<aspnetuser>> getAllUsers() {
        return new ResponseEntity<>(userService.getAllUsers(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<aspnetuser> getUserById(@PathVariable Long id) {
        aspnetuser user = userService.getUserById(id);
        return user != null ? new ResponseEntity<>(user, HttpStatus.OK) : new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PostMapping("/validate")
    public boolean postMethodName(@RequestBody aspnetuser user) {
        aspnetuser temp = userService.getFirstUserByName(user.getName());
        if (temp == null) {
            return false;
        }
        return temp.getPwd().equals(user.getPwd());
    }

    @PostMapping("/create")
    public ResponseEntity<aspnetuser> createUser(@RequestBody aspnetuser user) {
        return new ResponseEntity<>(userService.saveUser(user), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<aspnetuser> updateUser(@PathVariable Long id, @RequestBody aspnetuser user) {
        aspnetuser existingUser = userService.getUserById(id);
        if (existingUser != null) {
            existingUser.setName(user.getName());
            return new ResponseEntity<>(userService.saveUser(existingUser), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
