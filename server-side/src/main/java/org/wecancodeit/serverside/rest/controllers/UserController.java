package org.wecancodeit.serverside.rest.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.wecancodeit.serverside.models.UserModel;
import org.wecancodeit.serverside.repositories.UserRepository;

import javax.annotation.Resource;
import java.util.Collection;
import java.util.Optional;

@RestController
@CrossOrigin
public class UserController {

    @Resource
    private UserRepository userRepo;

    @GetMapping("/api/users")
    public Collection<UserModel> getUsers(){
        return (Collection<UserModel>) userRepo.findAll();
    }

    @GetMapping("/api/users/{userId}")
    public Optional<UserModel> getUser(@PathVariable Long id){
        return userRepo.findById(id);
    }
}
