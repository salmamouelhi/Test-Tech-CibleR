# Introduction

This is a ReactJS application that displays a Landing component and allows users to enter their phone number in a popup window. When the user clicks the login button, the application makes a POST request to a login service with the phone number, campaignId and customerId in the request body. If the login is successful, the Validation component is displayed along with the behaviorId key from the result.

## Getting Started
To run this application locally, follow these steps:

1- Clone the repository <br>
2- Install the dependencies : yarn install<br>
3- Start the development server : yarn start 

The application should now be running on http://localhost:3000/.

## Components

The following components are included in this application:
- Landing: This component is the main landing page for the application.
- PhonePopup: This component displays a text input field where the user can enter their phone number and a confirmation button. When the button is clicked, the application makes a POST request to the login service with the phone number in the request body.
- Validation (NoBudget) : This component is displayed if the login is successful. It displays the behaviorId key from the result.

## Tests
The request body should include the phone number in the following format:  "phoneNumber": "0612345678"<br>
In order to run tests you can use : yarn test

## Devops 

- Setting up a CI/CD pipeline using GitHub 
- In the deploy.yml file, we defined the name of our pipeline and the events that should trigger it
- Once the pipeline has completed successfully, the code will be deployed to GitHub Pages and available at https://salmamouelhi.github.io/Test-Tech-CibleR/



