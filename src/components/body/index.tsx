import logoImg from '../assets/logo.svg';
import bodyImg from '../assets/imgBody.jpeg';

import './style.scss';

export function Body() {
  return (
    <header>
      <nav className='nav-header'>
        <img src='' alt='logo da empresa' />
        <div className='nav-links'>
          <div className='nav-item'>
            <a className='nav-link' href='#section--1'>
              Nossos Projetos
            </a>
          </div>
          <div className='nav-item'>
            <a className='nav-link' href='#section--2'>
              Quem Somos
            </a>
          </div>
          <div className='nav-item'>
            <a className='nav-link' href='#section--3'>
              Projetos
            </a>
          </div>
          <div className='nav-item'>
            <button>Contato</button>
          </div>
        </div>
      </nav>
      <div className='header-body'>
        <aside className='aside-header'>
          <div className='header-title'>
            <div>
              Uma
              <span className='highlight'>construtora</span>
              que atende
              <br />
              todas as suas
              <span className='highlight'>espectativas</span>
            </div>
          </div>
          <div className='header-body-footer'>
            <div>Uma experiência que vai mudar sua forma de ver construção</div>
            <button className='btn--text btn--scroll-to'>Saiba Mais</button>
          </div>
        </aside>
        <img src='' className='header-img' alt='Minimalist bank items' />
      </div>
    </header>
  );
}
