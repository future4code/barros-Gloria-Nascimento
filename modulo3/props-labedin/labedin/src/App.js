import React from 'react';
import perfil from './foto-perfil.jpg'
import endereco from './icone-endereco.jpg'
import lalu from './img-lalu.jpg'
import primicia from './img-primicia.jpg'
import email from './icone-email.jpg'
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem= {perfil}
          nome="Glória Maria Teixeira Nascimento" 
          descricao="amo desafiois, cozinhar e estar em familia"
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/271/271210.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
          imagem={email}
          descricao="E-mail: glorianascimento@gmail.com"
        />

        <CardPequeno
          imagem={endereco}
          descricao="Endereço: Rua Ricardo Wagner Da Silva Paz, 101 - Universitário - Campina Grande - PB"  
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={lalu} 
          nome="Transguard" 
          descricao="Assistente admnistrativa" 
        />
        
        <CardGrande 
          imagem={lalu} 
          nome="Lalu" 
          descricao="Vendedora presencial" 
        />

        <CardGrande 
          imagem={primicia} 
          nome="Primícia" 
          descricao="Vendedora e Marketing" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
