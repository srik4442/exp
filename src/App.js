import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import LostForm from './components/LostForm';
import FoundForm from './components/FoundForm';
import Footer from './components/Footer';
import './App.css'; // Import custom styles

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6">
            <LostForm />
          </div>
          <div className="col-md-6">
            <FoundForm />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
