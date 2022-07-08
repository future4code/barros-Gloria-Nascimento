import React from 'react';
import Post from './components/Post/Post';
import './style.css'

const ListaDeDados = [
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

const ListaDeComponentes = ListaDeDados.map((item, index) => {
  return <li key={index}><Post nomeUsuario={item.nomeUsuario} fotoUsuario={item.fotoUsuario} fotoPost={item.fotoPost}></Post></li>
})

function App() {
return(
  <div className='MainContainer'>
    <ul>
      {ListaDeComponentes}
    </ul>
  </div>
)

}


export default App;
