package com.example.team.cyberapp;

import com.example.team.cyberapp.auth.AppUser;
import com.example.team.cyberapp.auth.UserDao;
import lombok.AllArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

@Configuration
@AllArgsConstructor
public class MvcTestConfiguration implements WebMvcConfigurer {

  private final BCryptPasswordEncoder passwordEncoder;

  @Bean
  @Primary
  public UserDao userDao() {

    final String password = passwordEncoder.encode("password");
    final AppUser user = new AppUser();
    user.setId(1);
    user.setUsername("test");
    user.setPassword(password);
    user.setName("Test");
    UserDao userDao = mock(UserDao.class);
    when(userDao.findByUsername("test")).thenReturn(user);

    when(userDao.save(any())).thenReturn(user);
    return userDao;
  }

}
