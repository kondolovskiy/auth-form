import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignUpForm from '@features/SignUpForm';

const App = () => {
  return (
    <div className="App">
      <SignUpForm onSubmit={() => {}} />
    </div>
  );
};

export default App;
