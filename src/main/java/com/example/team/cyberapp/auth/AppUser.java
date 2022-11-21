package com.example.team.cyberapp.auth;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AppUser extends BaseUser {

  private long id;
  //test
  private String name;

  public AppUser(AppUser user) {
    super(user.getUsername(), "********");
    this.name = user.getName();
  }
}
