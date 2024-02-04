package com.zpx.cadastro.services;


import com.zpx.cadastro.domains.User;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface UserService {

     List<User> findAllUser();

     Optional<User> findUserById (Long id);

    User createUser(User user);
}
