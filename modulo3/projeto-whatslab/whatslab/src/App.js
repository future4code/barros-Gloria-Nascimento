import { useState } from 'react';
import './App.css';

function DadosMensagem (){
  const btn = document.querySelector("#send");
  const remetente = document.querySelector("#remetente");
  const mensagem = document.querySelector("#msg");
  const value1 = remetente.value;
  const value2 = mensagem.value;
  remetente.value = ""
  mensagem.value = ""

  console.log(value1, value2)
  EnviarMensagem([value1, value2])
}

function EnviarMensagem (dado){
  const Lista = []
  Lista.push(dado)
}

function App() {
  let ListaMensagens = []

  return (
    <div>
      <header>
        <h1>LabZap</h1>
      </header>
      <main>
        <div className='interface-msg'>
          
        </div>
        <div className='interface-user'>
          <p className='espacamento-interface-user'>
            Remetente:
          </p>
          <input 
            type={"text"} 
            className='espacamento-interface-user'
            id='remetente'></input>
          <p className='espacamento-interface-user'>
            Msg:
          </p>
          <input className='input-msg' id='msg'></input>
          <input 
            type={"submit"} 
            id='send' 
            value={"Enviar"}
            onClick={DadosMensagem} ></input>
        </div>
      </main>
      <footer>
        <p>
          Copyright © 2022. Rua Valder Roberto Silva, 365D, Campina Grande. 
        </p>
      </footer>
    </div>
  );
}

export default App;
