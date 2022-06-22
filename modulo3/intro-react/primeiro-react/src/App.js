import './App.css';
import perfil from './foto-perfil.jpg';

function App() {
  function mensagem(){
    alert("Boa noite! =D *-* ")
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Olá, me chamo Glória Maria</h1>
        <img src={perfil} className="Img-Perfil" alt="Foto de perfil" />
        <button onClick={mensagem}>Aperte este botão</button>
      </header>
    </div>
  );
}

export default App;
