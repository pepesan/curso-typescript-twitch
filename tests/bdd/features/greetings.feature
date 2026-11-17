# language: en
# A scenario describes the expected behaviour in domain language.
Feature: Greetings
  To reuse a greeting function
  As a person using the course
  I want to greet with or without a name

  Scenario: Greet a person by name
    Given I prepare a greeting "Hello"
    When I direct it to "Ada"
    Then the result is "Hello, Ada!"
