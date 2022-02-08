import '../body/style.scss';
import { Header } from '../header';

export function Body() {
  return (
    <header>
      <div className='main-page'>
        <nav className='nav-header'>
          <Header />
        </nav>

        <div className='header-body'>
          <div>NEGRO ENGENHARIA</div>
          <h4>Conheça Nossos 5 anos de história</h4>
          <button className='nossos-projetos'>Veja Nossos Projetos Recentes</button>
        </div>
      </div>
    </header>
  );
}
