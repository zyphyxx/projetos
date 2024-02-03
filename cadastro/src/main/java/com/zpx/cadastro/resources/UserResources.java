package com.zpx.cadastro.resources;

import com.zpx.cadastro.domains.User;
import com.zpx.cadastro.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/cadastro")
public class UserResources {

    @Autowired
    private UserService userService;

    @GetMapping
    public List<User> findAllUser() {
        return userService.findAllUser();
    }

    @PostMapping
    public User createUser(@RequestBody User user) {
        return userService.createUser(user);
    }

}
