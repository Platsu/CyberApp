package com.example.team.cyberapp.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jdk8.Jdk8Module;
import com.fasterxml.jackson.module.mrbean.MrBeanModule;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ConversationConfig {

  @Bean
  public ObjectMapper mapper() {

    ObjectMapper objectMapper = new ObjectMapper();

    objectMapper.registerModules(new MrBeanModule(), new Jdk8Module());

    return objectMapper;
  }
}
