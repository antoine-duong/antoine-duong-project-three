// import axios from 'axios';
import { useState } from 'react';
import Header from './Components/Header';
// Additional style sheets
import './App.css';
import Form from './Components/Form';
import RankList from './Components/RankList';
import Footer from './Components/Footer';
import Article from './Components/Article';

function App() {

  const [inputDate, setInputDate] = useState('');
  const [snapshot, setSnapshot] = useState('');
  const [title, setTitle] = useState('');
  const [urlChoice, setUrlChoice] = useState('placeholder');

  return (
    <div className="App">
      <Header />
      <Article />
      <main>
        <section>
          <Form 
          inputDate={ inputDate } 
          setInputDate={ setInputDate } 
          setSnapshot={ setSnapshot }
          setTitle={ setTitle }
          urlChoice={ urlChoice }
          setUrlChoice={ setUrlChoice }
          />
        </section>
        <section>
          <RankList 
          snapshot={ snapshot }
          title = { title }  
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
