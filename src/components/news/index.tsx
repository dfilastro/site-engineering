import './style.scss';
import imgPost1 from '../assets/post1.jpg';
import imgPost2 from '../assets/post2.jpg';
import imgPost3 from '../assets/post3.jpg';

export function News() {
  return (
    <div className='container'>
      <div className='container-header'>Notícias Recentes</div>
      <div className='container-news'>
        <article className='article'>
          <img src={imgPost1} alt='' />
          <div className='post-title'>
            <a
              href='https://www.cnnbrasil.com.br/business/carrefour-faz-aposta-em-loja-autonoma-em-condominios/'
              target='_blank'
            >
              Carrefour faz aposta em loja autônoma em condomínios
            </a>
          </div>
          <div className='post-meta'>
            <div className='post-date'>02/02/2022</div>
            <div className='post-author'>Márcia De Chiara</div>
          </div>
          <div className='post-body'>
            Até pouco tempo atrás, um supermercado no qual o consumidor pudesse entrar, fazer a compra, pagar por meio
            de aplicativo e sair sem contato com absolutamente nenhum ser humano era visto como uma “loja do futuro”...
          </div>
        </article>

        <article className='article'>
          <img src={imgPost2} alt='' />
          <div className='post-title'>
            <a
              href='https://www.cnnbrasil.com.br/business/george-soros-diz-que-setor-imobiliario-pode-devastar-economia-da-china/'
              target='_blank'
            >
              George Soros: "setor imobiliário pode devastar economia da China"
            </a>
          </div>
          <div className='post-meta'>
            <div className='post-date'>31/01/2022</div>
            <div className='post-author'>Charles Riley</div>
          </div>
          <div className='post-body'>
            A China está enfrentando uma crise econômica depois que um boom imobiliário terminou com um estrondo no ano
            passado, de acordo com o investidor George Soros...
          </div>
        </article>

        <article className='article'>
          <img src={imgPost3} alt='' />
          <div className='post-title'>
            <a
              href='https://www.cnnbrasil.com.br/business/evergrande-e-pressionada-a-vender-terreno-usado-como-garantia-de-emprestimo/'
              target='_blank'
            >
              Evergrande deve vender terreno usado como garantia de empréstimo
            </a>
          </div>
          <div className='post-meta'>
            <div className='post-date'>31/01/2022</div>
            <div className='post-author'>O Estadão</div>
          </div>
          <div className='post-body'>
            A China Evergrande anunciou que recebedores foram nomeados para um terreno em Hong Kong que a gigante do
            setor imobiliário chinês usou como garantia de um empréstimo de US$ 520 milhões...
          </div>
        </article>
      </div>
    </div>
  );
}
