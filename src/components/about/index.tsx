import '../about/style.scss';
import { Header } from '../header';

export function AboutUs() {
  return (
    <>
      <section className='about-section-container'>
        <div className='about-page'>
          <nav className='nav-header'>
            <Header />
          </nav>

          <div className='about-body'>
            <div>SOBRE NÓS</div>
            <h4>
              Durante toda nossa história preservamos a seriedade e comprometimento com os objetivos de nossos clientes
            </h4>
          </div>
        </div>
      </section>

      <div className='about-container'>
        <div className='about-inside-container'>
          <a href='' className='about-column'>
            <div className='about-description'>Missão</div>

            <div className='about-body'>
              Até pouco tempo atrás, um supermercado no qual o consumidor pudesse entrar, fazer a compra, pagar por meio
              de aplicativo e sair sem contato com absolutamente nenhum ser humano era visto como uma “loja do
              futuro”...
            </div>
          </a>

          <a href='' className='about-column'>
            <div className='about-description'>Visão</div>

            <div className='about-body'>
              A China está enfrentando uma crise econômica depois que um boom imobiliário terminou com um estrondo no
              ano passado, de acordo com o investidor George Soros...
            </div>
          </a>

          <a href='' className='about-column'>
            <div className='about-description'>Valores</div>

            <div className='about-body'>
              A China Evergrande anunciou que recebedores foram nomeados para um terreno em Hong Kong que a gigante do
              setor imobiliário chinês usou como garantia de um empréstimo de US$ 520 milhões...
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
