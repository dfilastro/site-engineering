import logoImg from '../assets/logo.svg';

import './style.scss';

export function Header() {
  return (
    <>
      <img src={logoImg} alt='logo da empresa' />
      <div className='nav-links'>
        <div className='nav-item'>
          <a className='nav-link' href='#section--1'>
            Quem Somos
          </a>
        </div>
        <div className='nav-item'>
          <a className='nav-link' href='#section--2'>
            Serviços
          </a>
        </div>
        <div className='nav-item'>
          <a className='nav-link' href='#section--3'>
            Projetos
          </a>
        </div>
        <div className='nav-item'>
          <a className='nav-link' href='#section--3'>
            Contato
          </a>
        </div>
      </div>
    </>
  );
}
