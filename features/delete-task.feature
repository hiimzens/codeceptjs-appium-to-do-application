@deleteTask
Feature: Delete task
    Background: I already created a task
        Given I already created a task
        And I open that task
    Scenario: Delete task
        Given I click Delete Task
        And I click confirm to delete 
        Then The task is deleted