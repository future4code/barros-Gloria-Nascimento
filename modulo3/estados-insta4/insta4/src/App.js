import React, { useState } from 'react';
import Post from './components/Post/Post';
import './style.css'

const [Postagens, setPostagens] = useState[
  {nomeUsuario : 'paulinha',
  fotoUsuario : 'https://picsum.photos/25/50',
  fotoPost : 'https://picsum.photos/201/150'
  },
  {nomeUsuario : 'stenio',
  fotoUsuario : 'https://picsum.photos/40/50',
  fotoPost : 'https://picsum.photos/200/150'
  },
  {nomeUsuario : 'gloria',
  fotoUsuario : 'https://picsum.photos/50/50',
  fotoPost : 'https://picsum.photos/199/150'
  }
]

const ListaDePostagens = Postagens.map((item, index) => {
  return <li key={index}><Post nomeUsuario={item.nomeUsuario} fotoUsuario={item.fotoUsuario} fotoPost={item.fotoPost}></Post></li>
})







const CriacaoPost = ( ) => {
  
}

const AdicionarPostagem = (dados) => {
  const NovaPostagem = [...ListaDePostagens]
  NovaPostagem.push(dados)
  setPostagens(NovaPostagem)
}






function App() {
return(
  <div className='MainContainer'>
    <div className='OrganizarFormulario'>
      <p>User:</p>
      <input type='text' value={"Usuario"}></input>
      <p>Perfil:</p>
      <input type='' placeholder={"De 0 à 20"}></input>
      <p>Imagem:</p>
      <input type='' placeholder={"De 0 à 20"}></input>
      <button onClick={AdicionarPostagem({nomeUsuario: document.querySelector()})}>Enviar</button>
    </div>
    <ul>
      {ListaDePostagens}
    </ul>
  </div>
)

}


export default App;
