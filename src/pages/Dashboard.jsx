import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { callAstra } from '../api';

function ResultCard({ title, content }){
  return (
    <div className="rounded-xl p-5 bg-white/5 border border-white/10">
      <div className="text-[#9A6BFF] font-medium">{title}</div>
      <pre className="mt-2 whitespace-pre-wrap text-white/80 text-sm">{typeof content==='string'? content : JSON.stringify(content, null, 2)}</pre>
    </div>
  );
}

export default function Dashboard(){
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  async function handleGenerate(mode = 'problem_generation', niche = 'auto'){
    setLoading(true);
    try {
      const data = await callAstra({ mode, niche });
      setResults(prev => [{ title: mode.replaceAll('_',' '), content: data }, ...prev]);
    } catch (e) {
      setResults(prev => [{ title: 'Error', content: e.message }, ...prev]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-12 grid md:grid-cols-[260px,1fr] gap-6">
      <aside className="rounded-xl bg-white/5 border border-white/10 p-4 h-fit sticky top-6">
        <div className="text-white/70 text-sm">Navigation</div>
        <ul className="mt-3 space-y-2 text-white/85">
          {['Dashboard','Generate Product','Monetization Lab','Pricing / Upgrade','Profile','Logout'].map((t)=> (
            <li key={t} className="px-3 py-2 rounded-lg hover:bg-white/10 transition">{t}</li>
          ))}
        </ul>
      </aside>
      <section>
        <h1 className="text-2xl md:text-3xl font-semibold">Generate a Digital Product</h1>
        <p className="text-white/70">Astra thinks. You create.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <button onClick={()=>handleGenerate('problem_generation','auto')} className="px-4 py-2 rounded-lg bg-[#00F6FF] text-black font-medium shadow-[0_0_30px_rgba(0,246,255,0.45)]">Generate Problem Statement for Me</button>
          <button onClick={()=>handleGenerate('product_build','auto')} className="px-4 py-2 rounded-lg bg-white/10 border border-white/15 hover:bg-white/15 transition">Build Full Product</button>
          <button onClick={()=>handleGenerate('monetization_tips','auto')} className="px-4 py-2 rounded-lg bg-white/10 border border-white/15 hover:bg-white/15 transition">Give Monetization Strategy</button>
        </div>

        <div className="mt-8">
          <AnimatePresence>
            {loading && (
              <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="rounded-xl p-6 bg-white/5 border border-white/10">
                <div className="h-1.5 w-40 bg-white/10 rounded-full overflow-hidden">
                  <motion.div className="h-full bg-gradient-to-r from-[#00F6FF] via-[#4F8CFF] to-[#9A6BFF]" initial={{x:'-100%'}} animate={{x:['-100%','0%','100%']}} transition={{repeat:Infinity, duration:1.6}} />
                </div>
                <div className="mt-3 text-white/70 text-sm">Thinking with Astra...</div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-4 space-y-4">
            {results.map((r,idx)=> <ResultCard key={idx} title={r.title} content={r.content} />)}
          </div>
        </div>
      </section>
    </div>
  );
}
