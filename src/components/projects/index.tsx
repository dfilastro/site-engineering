import imgSection2 from '../assets/imgBody.jpeg';

import './style.scss';

export function Section2() {
  return (
    <section className='section2'>
      <div className='section2-header'>
        <h1>Sobre Nós</h1>
      </div>
      <div className='container'>
        <aside>
          <div>
            <h4>Innovation</h4>
            <p>
              We are always l ooking for new ways to improve what we do and we welcome client feedbacks.We are always l
              ooking for new ways to improve what we do and we welcome client feedbacks
            </p>
          </div>
          <div>
            <h4>Innovation</h4>
            <p>We are always looking for new ways to improve what we do and we welcome client feedbacks.</p>
          </div>
          <div>
            <h4>Innovation</h4>
            <p>We are always looking for new ways to improve what we do and we welcome client feedbacks.</p>
          </div>
          <div>
            <h4>Innovation</h4>
            <p>We are always looking for new ways to improve what we do and we welcome client feedbacks.</p>
          </div>
        </aside>
        <img src={imgSection2} alt='Sobre nós' />
      </div>
    </section>
  );
}
