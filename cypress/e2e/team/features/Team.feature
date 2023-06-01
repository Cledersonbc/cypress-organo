Feature: Team

  Scenario Outline: Team record with position name
    Given I open Organo page
    When I fill the '<position_name>' user correctly
    Then an user from '<position_name>' is recorded with successful
    Examples: Position names for team record
      | position_name     |
      | Back-end          |
      | Front-end         |
      | Inovação e Gestão |
      | Mobile            |
      | DevOps            |
      | UX & Design       |
      | Data Science      |