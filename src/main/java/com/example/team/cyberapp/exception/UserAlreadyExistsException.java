package com.example.team.cyberapp.exception;

public class UserAlreadyExistsException extends RuntimeException {

  private static final long serialVersionUID = 6647889708007752129L;

  public UserAlreadyExistsException(String errorMessage) {
    super(errorMessage);
  }
}
