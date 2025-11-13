export default function Contact(){
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold">Contact</h1>
      <form className="mt-6 space-y-4" onSubmit={(e)=>e.preventDefault()}>
        <div>
          <label className="text-sm text-white/70">Email</label>
          <input type="email" required className="mt-1 w-full rounded-lg bg-black/30 border border-white/15 px-3 py-2 outline-none focus:border-[#00F6FF]" />
        </div>
        <div>
          <label className="text-sm text-white/70">Message</label>
          <textarea rows={5} required className="mt-1 w-full rounded-lg bg-black/30 border border-white/15 px-3 py-2 outline-none focus:border-[#4F8CFF]"></textarea>
        </div>
        <button className="px-4 py-2 rounded-lg bg-white/10 border border-white/15 hover:bg-white/15 transition">Send</button>
      </form>
    </div>
  );
}
