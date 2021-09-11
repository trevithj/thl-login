# Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
The development and testing used `git version 2.28.0.windows.1`, `node v14.15.5` and `yarn 1.22.4`, so the below instructions assume the same.

## Quick Start

As detailed below, the app can be run using the following steps via a command-line terminal in an appropriate folder:
```
git clone https://github.com/trevithj/thl-login.git
cd thl-login
yarn
yarn start
```
The deployer should open a browser at [http://localhost:3000](http://localhost:3000), displaying the login screen.

## App Summary

Username and password values are both case-sensitive. They are initially blank, and the SignIn button will not be active unless both the text fields contain at least one character.

Password validation takes place on submit, but before a request gets sent.
The app currently has simple password validation: the password must be of minimal length, and contain one compulsory character.
Details of invalid passwords get displayed in an error message, after the user clicks the signin button.

Entering a valid username and password will direct the user to a `Main` screen with a message indicating successful login.
The `Main` screen's title will vary, depending on the type of user.

Valid username|password pairs are:
1. admin|admin for an 'administration' access.
1. happy|gilmour for a 'regular' access.

Entering an unknown username or an incorrect password will cause an Unauthorized error message on the login screen. The user will not be directed past this screen.

## Unit Tests

To run a suite of existing unit tests, run the below command in a terminal in the `thl-login` folder:
```
yarn test
```

The tests are in the relevant folders, and have a `*.test.js` suffix.


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

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
