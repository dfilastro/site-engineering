import '../styles/global.scss';
import { News } from '../components/news';
import { Body } from '../components/body';
import { Prefooter } from '../components/preFooter';

export function Home() {
  return (
    <div>
      <Body />
      <News />
      <Prefooter />
    </div>
  );
}
