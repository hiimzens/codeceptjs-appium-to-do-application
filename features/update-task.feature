@updateTask
Feature: Update task
    Background: I already created a task
        Given I already created a task
        And I open that task
    Scenario: Update task
        Given I update all information
            | taskName   | date            | time     | typeRepeat  | typeList |
            | demoupdate | October 29 2022 | 11:00:AM | Once a Year | Shopping |
        And I click Save Task button
        Then I see my task displayed
        And Its information are correct
