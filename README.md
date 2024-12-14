# Auth Form App

A React application featuring a reusable authentication form component with email and password validation.

## Project Description

This application provides a customizable sign-up form component with built-in validation for email and password fields. The form includes:

- Email validation
- Password strength requirements
- Real-time validation feedback
- Customizable submission handling

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Usage

To use the SignUpForm component in your React application:

```tsx
import SignUpForm from '@features/SignUpForm';

const YourComponent = () => {
  const handleSubmit = (values: { email: string; password: string }) => {
    // Handle form submission
    console.log(values);
  };

  return (
    <SignUpForm onSubmit={handleSubmit} />
  );
};
```

## Learn More

To learn React, check out the [React documentation](https://reactjs.org/).
