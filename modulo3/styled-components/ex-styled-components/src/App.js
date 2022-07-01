import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>LabZap</h1>
      </header>
      <main className='set_main'>
        <div className='organizar'>
          <p className='espacamento'>
            Remetente: 
          </p>
          <input >

          </input>
          <p className='espacamento'>
            Msg:
          </p>
          <input className='mensagem'>

          </input>
          <button className='espacamento'>
            Enviar Mensagem
          </button>
        </div>
      </main>
      <footer>
        <p>
          Copyright@ 2022 Labenu All Rights Reserved. Rua Valder Roberto Silva, 365-D, Campina Grande. CEP 58424-265
        </p>
      </footer>
    </div>
  );
}

export default App;
