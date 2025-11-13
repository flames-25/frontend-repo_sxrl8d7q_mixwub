export default function About(){
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-3xl md:text-4xl font-semibold">About AriseLabs • Astra</h1>
      <p className="mt-4 text-white/80 max-w-3xl">Astra solves the blank-page problem for creators and founders. It scans markets, identifies profitable opportunities, and assembles product plans so you can focus on building and selling. Our philosophy is simple: rise above noise with clarity, momentum, and taste.</p>
      <div className="mt-8 grid md:grid-cols-3 gap-5">
        {["What problem Astra solves","Vision: empowering creators","Rise above philosophy"].map((t,i)=> (
          <div key={i} className="rounded-xl p-6 bg-white/5 border border-white/10 backdrop-blur">
            <div className="text-[#00F6FF] font-medium">{t}</div>
            <p className="text-white/75 mt-2">{i===0? 'We remove friction in ideation and planning so projects start with conviction.' : i===1? 'Give anyone the ability to design and launch a product with AI orchestration.' : 'Precision, elegance, and execution beat volume. Build remarkable things.'}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
