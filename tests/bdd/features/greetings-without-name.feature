# language: en
# The same greeting function also works without a name.
Feature: Greeting without a name
  To greet someone generically
  As a person using the course
  I want to greet without giving a name

  Scenario: Greet without a name
    Given I prepare a plain greeting "Hi"
    When I greet without a name
    Then the message is "Hi!"
