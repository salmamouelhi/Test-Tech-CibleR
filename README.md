# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Goals
On page load, the project render the `Landing` component.
Add a new component which will render a popup containing a text input field where the user can enter it's phone number and a confirmation button.
On the click of the button, send a POST call to a login service with the phone number in body. 
Then get the behaviorId key in the result, display the `Validation` component, and display the behaviorId. 

In the popup, use the `Textfield` component from `src/components/Formfields`.
Add your new component in `src/components` folder.
Add the api call in `src/tools/apitools.js`.

For the login, make a POST call on this address `${CiblerContext().endpoint}/api/bienvenus/login?customerId=318`
with the body:  
{
  phone: '0612345678',
  campaignId: 63080118,
  customerId: 318
}  
and the headers:  
    Accept: application/json  
    Content-Type: application/json

Add the necessary tests in `src/__test__/landing.test.js` and the css classes in `public/style/common.css`

When you are done, push on a new branch `test/your_name`

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.