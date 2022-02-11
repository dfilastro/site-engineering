import imgLogo from '../assets/logo.svg';
import '../preFooter/style.scss';

export function Prefooter() {
  return (
    <section className='pre-footer-container'>
      <div className='pre-footer-container-inner'>
        <div className='pre-footer-columns'>
          <div className='pre-footer-company-description'>
            <a href='#' className='pre-footer-links'>
              <img src={imgLogo} alt='' />
            </a>
            <p>
              Construction's core values have been shaped over more than 10 years of delivering the finest construction
              services to our clients. They stood to the test of time and these principles remain our bedrock lynchpins.
              We never tried to cut on either quality, the pace of work or any other construction aspect. We stay true
              to our full promise of efficiency!
            </p>
          </div>
          <div className='navigation'>
            <h6 className='pre-footer-title-columns'>Navegação</h6>
            <div className='prefooter-lists'>
              <div>
                <a href='#' className='pre-footer-links'>
                  Noticias
                </a>
              </div>
              <div>
                <a href='#' className='pre-footer-links'>
                  Nossos Projetos
                </a>
              </div>
              <div>
                <a href='#' className='pre-footer-links'>
                  Serviços
                </a>
              </div>
              <div>
                <a href='#' className='pre-footer-links'>
                  Contatos
                </a>
              </div>
            </div>
          </div>
          <div className='recent-comments'>
            <h6 className='pre-footer-title-columns'>Comentários</h6>
            <div className='prefooter-lists'>
              <div>
                <article className='pre-footer-comments-container'>
                  <p className='pre-footer-comment-author'>Rikieri Sartor</p>
                  <p className='pre-footer-comment-body'>
                    A Negro é a melhor empresa de engenharia que já contratei e ainda aceitam pagamento em dólar,
                    recomendo 100%.
                  </p>
                </article>
              </div>
              <div>
                <article className='pre-footer-comments-container'>
                  <p className='pre-footer-comment-author'>Lucas Lauriano</p>
                  <p className='pre-footer-comment-body'>
                    Meu cachorro adora as soluções inovadoras que a Negro trouxe pro nosso projeto, simplesmente a
                    melhor.
                  </p>
                </article>
              </div>
              <div>
                <article className='pre-footer-comments-container'>
                  <p className='pre-footer-comment-author'>Julio Paes</p>
                  <p className='pre-footer-comment-body'>
                    Depois que comprei meu terceiro Civic, tive que aumentar a garagem, eles foram super atenciosos e
                    rápidos.
                  </p>
                </article>
              </div>
            </div>
          </div>
          <div className='contacts'>
            <h6 className='pre-footer-title-columns'>Contatos</h6>
            <div className='prefooter-lists'>
              <div>Rua Professor Paulo Galli, 137 - Centro Cocal do Sul/SC</div>
              <div>Telefone: (48) 999.340-240</div>
              <div>
                E-mail:{' '}
                <a href='mailto:diego@negromee.com' className='pre-footer-links'>
                  diego@negromee.com
                </a>
              </div>
              <div>Atendimento: Seg-Sex: 9h-17h</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
