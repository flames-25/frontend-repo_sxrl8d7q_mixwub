import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signup(){
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate();

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-md rounded-2xl p-8 bg-white/5 border border-white/10 backdrop-blur">
        <h1 className="text-2xl font-semibold">Create your account</h1>
        <form className="mt-6 space-y-4" onSubmit={(e)=>{e.preventDefault(); navigate('/dashboard');}}>
          <div>
            <label className="text-sm text-white/70">Email</label>
            <input value={email} onChange={e=>setEmail(e.target.value)} type="email" required className="mt-1 w-full rounded-lg bg-black/30 border border-white/15 px-3 py-2 outline-none focus:border-[#00F6FF]" />
          </div>
          <div>
            <label className="text-sm text-white/70">Password</label>
            <input value={password} onChange={e=>setPassword(e.target.value)} type="password" required className="mt-1 w-full rounded-lg bg-black/30 border border-white/15 px-3 py-2 outline-none focus:border-[#4F8CFF]" />
          </div>
          <button className="w-full mt-2 rounded-lg px-4 py-2 bg-[#00F6FF] text-black font-medium shadow-[0_0_30px_rgba(0,246,255,0.45)] hover:brightness-110 transition">Sign Up</button>
        </form>
      </div>
    </div>
  );
}
