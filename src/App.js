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
  const [urlChoice, setUrlChoice] = useState('placeholder');

  return (
    <div className="App">
      <Header />
      <main>
        <article className='columns'>
          <div className='column'>
            <p>That fear of missing out on things makes you miss out on everything.</p>
            <p><a href="https://en.wikipedia.org/wiki/Etty_Hillesum">Etty Hillesum</a> </p>
          </div>
          <div className='column'>

          </div>

        </article>
        <section className='section is-small'>
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
          title={ title }
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
