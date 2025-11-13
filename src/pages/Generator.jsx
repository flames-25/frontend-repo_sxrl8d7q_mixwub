import { useState } from 'react';
import { callAstra } from '../api';

export default function Generator(){
  const [niche, setNiche] = useState('');
  const [mode, setMode] = useState('problem_generation');
  const [output, setOutput] = useState(null);
  const [loading, setLoading] = useState(false);

  async function run(m){
    setLoading(true);
    try {
      const data = await callAstra({ mode: m || mode, niche: niche || 'auto' });
      setOutput(data);
    } catch (e) {
      setOutput({ error: e.message });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="text-3xl font-semibold">Advanced Generator</h1>
      <div className="mt-6 grid md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <label className="text-sm text-white/70">Niche (optional)</label>
          <input value={niche} onChange={e=>setNiche(e.target.value)} placeholder="e.g., indie creators" className="mt-1 w-full rounded-lg bg-black/30 border border-white/15 px-3 py-2 outline-none focus:border-[#00F6FF]" />
        </div>
        <div>
          <label className="text-sm text-white/70">Mode</label>
          <select value={mode} onChange={e=>setMode(e.target.value)} className="mt-1 w-full rounded-lg bg-black/30 border border-white/15 px-3 py-2 outline-none focus:border-[#4F8CFF]">
            <option value="problem_generation">Problem Generation</option>
            <option value="product_build">Product Build</option>
            <option value="monetization_tips">Monetization Strategy</option>
          </select>
        </div>
      </div>
      <div className="mt-5 flex flex-wrap gap-3">
        <button onClick={()=>run('problem_generation')} className="px-4 py-2 rounded-lg bg-[#00F6FF] text-black font-medium">Generate Problem</button>
        <button onClick={()=>run('product_build')} className="px-4 py-2 rounded-lg bg-white/10 border border-white/15">Build Product</button>
        <button onClick={()=>run('monetization_tips')} className="px-4 py-2 rounded-lg bg-white/10 border border-white/15">Monetization Strategy</button>
      </div>

      <div className="mt-6">
        {loading && <div className="rounded-xl p-6 bg-white/5 border border-white/10">Running...</div>}
        {!loading && output && (
          <div className="rounded-xl p-6 bg-white/5 border border-white/10">
            <pre className="whitespace-pre-wrap text-sm text-white/80">{JSON.stringify(output, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
}
