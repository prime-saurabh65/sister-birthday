export default function Hearts() {
  return <div className="hearts" aria-hidden="true">{Array.from({length:18},(_,i)=><span key={i} style={{left:`${(i*37)%100}%`,animationDelay:`${(i*0.71)%12}s`,animationDuration:`${9+(i%6)}s`,fontSize:`${12+(i%4)*8}px`}}>{i%3===0?'✦':'♥'}</span>)}</div>;
}
