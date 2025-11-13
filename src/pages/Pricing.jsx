export default function Pricing(){
  const tiers = [
    {name:'Free', color:'from-[#00F6FF] to-[#4F8CFF]', features:['Problem generation','Limited niches']},
    {name:'Creator', color:'from-[#4F8CFF] to-[#9A6BFF]', features:['Full product generation','Unlimited niche inputs']},
    {name:'Pro', color:'from-[#9A6BFF] to-[#00F6FF]', features:['Problem + Product + Monetization strategies','Priority results']},
  ];
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl md:text-4xl font-semibold">Pricing</h1>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {tiers.map((t)=> (
          <div key={t.name} className="group rounded-2xl p-6 bg-white/5 border border-white/10 backdrop-blur transition hover:shadow-[0_0_40px_rgba(79,140,255,0.35)] hover:border-white/20 relative overflow-hidden">
            <div className={`absolute -top-14 -right-14 w-40 h-40 rounded-full bg-gradient-to-tr ${t.color} opacity-20 blur-2xl`} />
            <div className="relative">
              <div className="text-xl font-medium">{t.name}</div>
              <ul className="mt-4 space-y-2 text-white/80 list-disc list-inside">
                {t.features.map(f=> <li key={f}>{f}</li>)}
              </ul>
              <button className="mt-6 w-full px-4 py-2 rounded-lg bg-white/10 border border-white/15 hover:bg-white/15 transition">Get Started</button>
              <div className="mt-2 text-xs text-white/60">Stripe checkout placeholder</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
