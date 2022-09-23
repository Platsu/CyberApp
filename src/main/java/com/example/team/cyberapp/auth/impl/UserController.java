package com.example.team.cyberapp.auth.impl;

import com.example.team.cyberapp.auth.AppUser;
import com.example.team.cyberapp.auth.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
public class UserController {

  private final UserService userService;

  @PostMapping
  public ResponseEntity<AppUser> save(@RequestBody AppUser appUser) {
    final URI uri = URI
        .create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/user").toUriString());
    return ResponseEntity.created(uri).body(userService.saveUser(appUser));
  }
}
