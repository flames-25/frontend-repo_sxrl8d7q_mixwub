import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login(){
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate();

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-md rounded-2xl p-8 bg-white/5 border border-white/10 backdrop-blur">
        <h1 className="text-2xl font-semibold">Welcome back</h1>
        <p className="text-white/70 mt-1">Login to Astra</p>
        <form className="mt-6 space-y-4" onSubmit={(e)=>{e.preventDefault(); navigate('/dashboard');}}>
          <div>
            <label className="text-sm text-white/70">Email</label>
            <input value={email} onChange={e=>setEmail(e.target.value)} type="email" required className="mt-1 w-full rounded-lg bg-black/30 border border-white/15 px-3 py-2 outline-none focus:border-[#00F6FF]" />
          </div>
          <div>
            <label className="text-sm text-white/70">Password</label>
            <input value={password} onChange={e=>setPassword(e.target.value)} type="password" required className="mt-1 w-full rounded-lg bg-black/30 border border-white/15 px-3 py-2 outline-none focus:border-[#4F8CFF]" />
          </div>
          <button className="w-full mt-2 rounded-lg px-4 py-2 bg-[#4F8CFF] shadow-[0_0_30px_rgba(79,140,255,0.45)] hover:brightness-110 transition">Login</button>
        </form>
        <div className="mt-4 text-sm text-white/70 flex items-center justify-between">
          <Link to="/signup" className="hover:text-white">Sign Up</Link>
          <button onClick={()=>navigate('/dashboard')} className="hover:text-white">Continue as Guest</button>
        </div>
      </div>
    </div>
  );
}
