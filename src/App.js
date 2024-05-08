import logo from './background.svg';
import './App.css';
import bolha1 from './bolha1.svg'
import bolha2 from './bolha2.svg'
import perfil from './perfil.svg';

function App() {
  return (
    <div className="App">     
      <div className='nav'>
        ddddddd
      </div>
      <img id='perfil' src={perfil} alt="logo" />
      <div className="container">
        <img id='bolha1' src={bolha1} alt="logo" />
        <div className="descricao">
          <h1>Adryelle Araujo da Silva</h1>
          <h3>Front-end Developer | WebDsegin | Power Bi</h3>
          <p>Estudante de Ciência da Computação pela Universidade Federal de Sergipe, desenvolvedora Web com foco em Frontend, aprendendo cada vez mais Web Design. Apaixonada em descobrir coisas novas.</p>
        </div>
        <img id='bolha2' src={bolha2} alt="logo" />
      </div>
    </div>
  );
}

export default App;
