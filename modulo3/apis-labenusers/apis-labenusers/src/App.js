import './App.css';
import axios from 'axios';
import Principal from './TelaPrincipal';
import Edicao from './TelaEdicao';
import { useState } from 'react';




function App() {

  let [pagina, setPagina] = useState(0) 

  const TrocarPagina = (()=> {
    if (pagina === 0){
      setPagina(pagina = 1)
      return <Principal></Principal>
    }else {
      setPagina(pagina = 0)
      return <Edicao></Edicao>
    }
  })

  const getAllUsers = ()=> {axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
    headers: {
      Authorization: "gloria-nascimento-barros"
    }
  }).then( (res) => {
    console.log(res.data)
  }).catch( (er)=> {
    console.log(er)
  })
  }

  getAllUsers()

  return (
    <div>
      <div>
        <Principal></Principal>
      </div>
    </div>
  );
}

export default App;
