import React from 'react';
import { ToastContainer } from 'react-toastify';
import Employees from './components/employess';

function App() {
  return (
    <React.Fragment>
      <ToastContainer />
      <Employees />
    </React.Fragment>
  );
}

export default App;
