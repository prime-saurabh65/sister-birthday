import { useState, useEffect } from 'react';
import { Heart, Sparkles } from 'lucide-react';
import Hero from './components/Hero';
import Hearts from './components/Hearts';
import Memories from './components/Memories';
import Quiz from './components/Quiz';
import { birthday } from './data/content';
export default function App(){
 const [quiz,setQuiz]=useState(false);
 useEffect(()=>{window.scrollTo({top:0,behavior:'smooth'});},[quiz]);
 return <div className="app"><Hearts/><header className="nav"><a href="#home" onClick={e=>{if(quiz){e.preventDefault();setQuiz(false)}}}>for you <Heart size={14} fill="currentColor"/></a><span>made with ♡</span></header>{quiz?<Quiz onClose={()=>setQuiz(false)}/>:<><Hero onExplore={()=>document.getElementById('memories')?.scrollIntoView({behavior:'smooth'})}/><Memories/><section className="qa-invite"><div className="section-tag">02 / Just between us</div><div className="invite-icon">💭</div><h2>Can I ask you <em>something?</em></h2><p>Just a few little questions. No right answers, no wrong answers — just us, being us.</p><button className="primary" onClick={()=>setQuiz(true)}>Let's have a heart-to-heart <Sparkles size={18}/></button><small>5 questions · take your time ♡</small></section><footer>Made especially for {birthday.sisterName} <Heart size={14} fill="currentColor"/></footer></>}</div>;
}
