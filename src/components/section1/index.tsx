import './style.scss';
import img1 from '../section1/foto-exemplo1.jpeg';

export function Section1() {
  return (
    <section className='section' id='section-1'>
      <div className='section-header'>
        <div className='section-title'>Nossos Projetos</div>
        <nav className='nav-our-projects'>
          <div>Em Andamento</div>
          <div>Comerciais</div>
          <div>Residenciais</div>
        </nav>
      </div>
      <div className='paragraphs-left'>
        <div className='paragraph-box'>
          <div className='paragraph-title'>Título</div>
          <div className='paragraph-description'>
            Inheriting a project, listed heritage home wich in time was sadly overcome by rot e bora
          </div>
          <a className='paragraph-link'>Mais detalhes</a>
        </div>
        <div></div>
        <img src={img1} alt='Project' />
      </div>

      <div className='paragraphs-right'>
        <img src={img1} alt='Project' />
        <div></div>
        <div className='paragraph-box'>
          <div className='paragraph-title'>Título</div>
          <div className='paragraph-description'>
            Inheriting a project, listed heritage home wich in time was sadly overcome by rot e bora
          </div>
          <a className='paragraph-link'>Mais detalhes</a>
        </div>
      </div>

      <div className='paragraphs-left'>
        <div className='paragraph-box'>
          <div className='paragraph-title'>Título</div>
          <div className='paragraph-description'>
            Inheriting a project, listed heritage home wich in time was sadly overcome by rot e bora
          </div>
          <a className='paragraph-link'>Mais detalhes</a>
        </div>
        <div></div>
        <img src={img1} alt='Project' />
      </div>
    </section>
  );
}
