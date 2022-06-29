import React from 'react';
import Post from './components/Post/Post';
import './style.css'


function App() {
return(
  <div className='MainContainer'>
           <Post
            nomeUsuario={'paulinha'}
            fotoUsuario={'https://picsum.photos/25/50'}
            fotoPost={'https://picsum.photos/201/150'}
          />
          <Post
            nomeUsuario={'stenio'}
            fotoUsuario={'https://picsum.photos/40/50'}
            fotoPost={'https://picsum.photos/200/150'}
          />
          <Post
            nomeUsuario={'gloria'}
            fotoUsuario={'https://picsum.photos/50/50'}
            fotoPost={'https://picsum.photos/199/150'}
          />
  </div>
)

}


export default App;
