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
          <h1>ssjjsjsjjsj</h1>
        </div>
        <img id='bolha2' src={bolha2} alt="logo" />
      </div>
    </div>
  );
}

export default App;
