package com.example.team.cyberapp.auth;

import com.example.team.cyberapp.BaseMvcTest;
import org.junit.jupiter.api.Test;
import org.springframework.test.web.servlet.ResultActions;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

public class LoginTest extends BaseMvcTest {

  private static final String TOKEN = "token";

  @Test
  public void userLogin() throws Exception {

    // Bad credentials
    login("test", "pass").andExpect(status().isUnauthorized());

    // Correct credentials
    final ResultActions login = login("test", "password");
    login.andExpect(status().isOk()).andDo(document("{method-name}/"));

    assertNotNull(getToken(login));

  }



}
