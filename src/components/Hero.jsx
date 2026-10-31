import { Gift, ArrowDown } from 'lucide-react';
import { birthday } from '../data/content';
export default function Hero({onExplore}) {
  return <section className="hero" id="home"><div className="eyebrow">✧ A little something, made just for you ✧</div><div className="cake" aria-hidden="true">🎂</div><h1>Happy Birthday,<br/><em>{birthday.sisterName}!</em></h1><p className="hero-sub">{birthday.headline}</p><button className="primary" onClick={onExplore}><Gift size={18}/> Open your little surprise</button><div className="scroll-note"><ArrowDown size={15}/> Made with lots of love</div></section>;
}
