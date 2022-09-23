package com.example.team.cyberapp.auth;

public interface UserDao {

    AppUser findByUsername(String username);

    AppUser save(AppUser user);
}
