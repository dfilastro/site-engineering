import '../styles/global.scss';
import { Section1 } from '../components/about';
import { Body } from '../components/body';
import { Section2 } from '../components/projects';

export function Home() {
  return (
    <div>
      <Body />
      <Section1 />
      <Section2 />
    </div>
  );
}
