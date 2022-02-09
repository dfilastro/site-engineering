import imgLogo from '../assets/logo.svg';
import '../preFooter/style.scss';

export function Prefooter() {
  return (
    <section className='pre-footer'>
      <div className='container'>
        <div className='columns'>
          <div className='company-description'>
            <a href='#' className='logo-pre-footer'>
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
            <h6>Navegação</h6>
            <div className='prefooter-lists'>
              <div>
                <a href='#'>Noticias</a>
              </div>
              <div>
                <a href='#'>Nossos Projetos</a>
              </div>
              <div>
                <a href='#'>Serviços</a>
              </div>
              <div>
                <a href='#'>Contatos</a>
              </div>
            </div>
          </div>
          <div className='recent-comments'>
            <h6>Comentários</h6>
            <div className='prefooter-lists'>
              <div>
                <article>
                  <p className='comment-author'>Rikieri Sartor</p>
                  <p className='comment-body'>
                    A Negro é a melhor empresa de engenharia que já contratei e ainda aceitam pagamento em dólar,
                    recomendo 100%.
                  </p>
                </article>
              </div>
              <div>
                <article>
                  <p className='comment-author'>Lucas Lauriano</p>
                  <p className='comment-body'>
                    Meu cachorro adora as soluções inovadoras que a Negro trouxe pro nosso projeto, simplesmente a
                    melhor.
                  </p>
                </article>
              </div>
              <div>
                <article>
                  <p className='comment-author'>Julio Paes</p>
                  <p className='comment-body'>
                    Depois que comprei meu terceiro Civic, tive que aumentar a garagem, eles foram super atenciosos e
                    rápidos.
                  </p>
                </article>
              </div>
            </div>
          </div>
          <div className='contacts'>
            <h6>Contatos</h6>
            <div className='prefooter-lists'>
              <div>Rua Professor Paulo Galli, 137 - Centro Cocal do Sul/SC</div>
              <div>Telefone: (48) 999.340-240</div>
              <div>
                E-mail: <a href='mailto:diego@negromee.com'>diego@negromee.com</a>
              </div>
              <div>Atendimento: Seg-Sex: 9h-17h</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
