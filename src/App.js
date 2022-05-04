// import axios from 'axios';
import { useState } from 'react';
import Header from './Components/Header';
// Additional style sheets
import './App.css';
import Form from './Components/Form';
import RankList from './Components/RankList';
import Footer from './Components/Footer';

function App() {

  const [inputDate, setInputDate] = useState('');
  const [snapshot, setSnapshot] = useState('');
  const [title, setTitle] = useState('');

  return (
    <div className="App">
      <Header />
      <Form 
      inputDate={ inputDate } 
      setInputDate={ setInputDate } 
      setSnapshot={ setSnapshot }
      setTitle={ setTitle }
      />
      <RankList 
      snapshot={ snapshot }  
      title={ title }
      />
      <Footer />
    </div>
  );
}

export default App;
