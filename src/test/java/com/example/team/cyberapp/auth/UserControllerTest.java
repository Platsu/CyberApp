package com.example.team.cyberapp.auth;

import com.example.team.cyberapp.BaseMvcTest;
import org.junit.jupiter.api.Test;

import java.util.HashMap;
import java.util.Map;

import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

public class UserControllerTest extends BaseMvcTest {

  private static final String USERS_PATH = "/users";

  @Test
  public void saveUser() throws Exception {

    Map<String, String> body = new HashMap<>();
    body.put("username", "test");
    body.put("name", "Test");
    body.put("password", "password");

    preparePost(USERS_PATH, body).andExpect(status().isCreated()).andDo(document("{method-name}/"));

  }
}
