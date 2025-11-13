import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="relative">
      <section className="relative h-[72vh] md:h-[78vh] overflow-hidden">
        <div className="absolute inset-0"><Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} /></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-[#05050A]/40 to-[#05050A] pointer-events-none" />
        <div className="relative h-full flex items-center">
          <div className="mx-auto max-w-6xl px-6">
            <motion.h1 initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:0.1}} className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight">
              Astra: The AI that builds digital products for you.
            </motion.h1>
            <motion.p initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:0.2}} className="mt-4 max-w-2xl text-white/80">
              Skip the brainstorming. Astra discovers profitable problems, builds complete solutions, and shows you how to monetize them.
            </motion.p>
            <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:0.3}} className="mt-8 flex flex-wrap gap-3">
              <button onClick={()=>navigate('/login')} className="px-5 py-2.5 rounded-lg bg-[#00F6FF] text-black font-medium shadow-[0_0_40px_rgba(0,246,255,0.45)] hover:shadow-[0_0_60px_rgba(0,246,255,0.65)] transition">Try Astra</button>
              <button onClick={()=>navigate('/dashboard')} className="px-5 py-2.5 rounded-lg bg-white/10 border border-white/15 hover:bg-white/15 transition">Generate a Product</button>
            </motion.div>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
              {[1,2,3].map(i=> (
                <motion.div key={i} initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay: i*0.1}} className="p-5 rounded-xl bg-white/5 backdrop-blur border border-white/10">
                  <div className="text-[#4F8CFF] font-semibold">How Astra Works • Step {i}</div>
                  <p className="text-white/80 mt-2">{i===1? 'Discover high-value problems using AI-driven market scanning.' : i===2? 'Assemble a complete solution with specs, flows, and roadmap.' : 'Recommend monetization strategies and go-to-market steps.'}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">Features</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5">
          {['Problem discovery','Product builder','Monetization lab'].map((t,idx)=> (
            <div key={t} className="rounded-xl p-6 bg-white/5 border border-white/10 backdrop-blur hover:shadow-[0_0_40px_rgba(154,107,255,0.25)] hover:border-[#9A6BFF]/40 transition">
              <div className="text-[#9A6BFF] font-medium">{t}</div>
              <p className="text-white/75 mt-2">AI-first workflows with beautiful, explainable outputs and exportable briefs.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <h2 className="text-2xl md:text-3xl font-semibold">Loved by creators</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5">
          {["Astra nailed our niche in minutes","The product plan was investor-ready","Monetization tips paid for themselves"].map((q,i)=> (
            <div key={i} className="rounded-xl p-6 bg-white/5 border border-white/10">
              <p className="text-white/80">“{q}.”</p>
              <div className="mt-3 text-sm text-white/60">— Creator {i+1}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
