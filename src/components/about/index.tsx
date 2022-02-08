import './style.scss';
import trophyImg from '../assets/trophy-icon.png';

export function Section1() {
  return (
    <section className='section' id='section-about'>
      <div className='main-content'>
        <img src='' alt='' />
        <div className='section-title'>
          <h1>SOBRE NÓS</h1>
          <div>DURING ALL THIS TIME WE STAYED TRUE TO ONE AND THE SAME PRINCIPLES OF BUSINESS OPERATIONS.</div>
        </div>
      </div>
      <div className='container'>
        <div className='values-box'>
          <img className='img-values' src={trophyImg} alt='' />
          <div>
            <div className='box-title'>CORE VALUES</div>
            <div className='box-description'>
              Construction's core values have been shaped over more than 10 years of delivering the finest construction
              services to our clients. They stood to the test of time and these principles remain our bedrock lynchpins.
              We never tried to cut on either quality, the pace of work or any other construction aspect. We stay true
              to our full promise of efficiency!
            </div>
          </div>
        </div>
        <div className='values-box'>
          <img className='img-values' src={trophyImg} alt='' />
          <div>
            <div className='box-title'>CORE VALUES</div>
            <div className='box-description'>
              Construction's core values have been shaped over more than 10 years of delivering the finest construction
              services to our clients. They stood to the test of time and these principles remain our bedrock lynchpins.
              We never tried to cut on either quality, the pace of work or any other construction aspect. We stay true
              to our full promise of efficiency!
            </div>
          </div>
        </div>
        <div className='values-box'>
          <img className='img-values' src={trophyImg} alt='' />
          <div>
            <div className='box-title'>CORE VALUES</div>
            <div className='box-description'>
              Construction's core values have been shaped over more than 10 years of delivering the finest construction
              services to our clients. They stood to the test of time and these principles remain our bedrock lynchpins.
              We never tried to cut on either quality, the pace of work or any other construction aspect. We stay true
              to our full promise of efficiency!
            </div>
          </div>
        </div>
        <div className='values-box'>
          <img className='img-values' src={trophyImg} alt='' />
          <div>
            <div className='box-title'>CORE VALUES</div>
            <div className='box-description'>
              Construction's core values have been shaped over more than 10 years of delivering the finest construction
              services to our clients. They stood to the test of time and these principles remain our bedrock lynchpins.
              We never tried to cut on either quality, the pace of work or any other construction aspect. We stay true
              to our full promise of efficiency!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
