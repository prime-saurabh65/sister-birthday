import { useState } from 'react';
import { ArrowLeft, ArrowRight, Send, Heart, CheckCircle2 } from 'lucide-react';
import { birthday, questions } from '../data/content';
export default function Quiz({onClose}) {
  const [step,setStep]=useState(0);
  const [answers,setAnswers]=useState({});
  const [status,setStatus]=useState('idle');
  const [error,setError]=useState('');
  const current=questions[step];
  const finished=status==='success';
  async function submit(){
    if(birthday.email==='YOUR_EMAIL@example.com'){setError('The website owner needs to set a receiving email in src/data/content.js first.');return;}
    setStatus('sending');setError('');
    try {
      const data=new FormData();
      data.append('_subject',`Birthday answers from ${birthday.sisterName} 💗`);
      data.append('_captcha','false');
      questions.forEach(q=>data.append(q.title,answers[q.id]||'(Skipped)'));
      const response=await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(birthday.email)}`,{method:'POST',body:data,headers:{Accept:'application/json'}});
      const result=await response.json();
      if(!response.ok || result.success===false || result.success==='false')throw new Error(result.message||'Unable to send right now.');
      setStatus('success');
    } catch(e){setError('Could not send. Please check your connection or try again.');setStatus('idle');}
  }
  return <main className="quiz-screen"><button className="back-link" onClick={onClose}><ArrowLeft size={17}/> Back to your surprise</button><div className="quiz-card">{finished?<div className="finished"><div className="big-emoji">💖</div><h2>Thank you, sweet soul!</h2><p>Your lovely responses have been submitted. Sending my hearts to you babyy ❤️❤️</p><button className="primary" onClick={onClose}>Back to the birthday magic <Heart size={17}/></button></div>:<><div className="quiz-top"><span>OUR LITTLE HEART-TO-HEART 💌</span><span>{step+1} / {questions.length}</span></div><div className="progress"><div style={{width:`${((step+1)/questions.length)*100}%`}}/></div><div className="question-emoji">{['🌷','😂','🌎','🫶','💌'][step]}</div><h2>{current.title}</h2><p className="hint">{current.hint}</p><textarea autoFocus key={current.id} placeholder="Write whatever comes to your heart..." value={answers[current.id]||''} onChange={e=>setAnswers({...answers,[current.id]:e.target.value})} rows={5} maxLength={3000}/><p className="optional">No pressure — you can leave any answer blank.</p>{error&&<p className="error" role="alert">{error}</p>}<div className="quiz-actions"><button className="secondary" disabled={step===0||status==='sending'} onClick={()=>setStep(step-1)}><ArrowLeft size={17}/> Previous</button>{step<questions.length-1?<button className="primary" onClick={()=>setStep(step+1)}>Next <ArrowRight size={17}/></button>:<button className="primary" disabled={status==='sending'} onClick={submit}>{status==='sending'?'Sending...':'Send your answers'} <Send size={16}/></button>}</div></>}</div><div className="quiz-footer">A safe little space for your thoughts ♡</div></main>;
}
