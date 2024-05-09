import logo from './background.svg';
import './App.css';
import bolha1 from './bolha1.svg'
import bolha2 from './bolha2.svg'
import perfil from './perfil.png';
import computer from './computer.svg';
import { MdHome } from "react-icons/md";

function App() {
  return (
    <div className="app">
      <div className='nav'>
        <a href="/">Home</a>
        <a href="/">Sobre Mim</a>
        <a href="/">Ferramentas</a>
        <a href="/">Contato</a>
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
      <div className='sobreMim'>
        <div className='sobreMimText'>
          <h1>Sobre Mim</h1>
          <p>Atuei 2 anos na Softeam, empresa Junior da Universidade Federal de Sergipe, como desenvolvedora de sites com WordPress. Bolsista do Instituto Federal de Sergipe, desenvolvendo dashboards em Power Bi e dando manutenção no site com o cms Joomla. Além de ser estagiária na Secretaria de Estado da Educação e da Cultura de Sergipe, na qual ajudo nos dashboards em Power Bi.</p>
          <button>Saiba Mais</button>
        </div>
        <img src={computer} alt='computer' />
      </div>
    </div>
  );
}

export default App;
