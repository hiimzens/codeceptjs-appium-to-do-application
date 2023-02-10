@addTask
Feature: Add task
  Background: I opened the application
  Scenario: Add task
    Given I click Add Task button
    And I input all information
      | taskName | date            | time     | typeRepeat | typeList |
      | demo     | October 30 2022 | 12:30:AM | Once a Day | Personal |
    And I click Save Task button
    Then I see my task displayed
    And Its information are correct


