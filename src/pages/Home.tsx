import '../styles/global.scss';
import { News } from '../components/news';
import { Body } from '../components/body';
import { Section2 } from '../components/projects';

export function Home() {
  return (
    <div>
      <Body />
      <News />
      {/* <Section2 /> */}
    </div>
  );
}
