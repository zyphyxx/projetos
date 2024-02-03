package com.zpx.cadastro.services;


import com.zpx.cadastro.domains.User;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface UserService {

     List<User> findAllUser();

    User createUser(User user);
}