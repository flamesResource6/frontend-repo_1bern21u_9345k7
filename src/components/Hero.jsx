import { motion } from 'framer-motion'

export default function Hero(){
  return (
    <section className="relative overflow-hidden pt-28 pb-16 bg-gradient-to-b from-rose-50 via-pink-50 to-amber-50">
      <Decor />
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-black leading-tight">
            <span className="bg-gradient-to-r from-amber-600 via-rose-600 to-pink-600 bg-clip-text text-transparent">Fun Digital Marriage</span>
          </h1>
          <p className="mt-4 text-rose-800/80 text-lg">Host a playful, family‑friendly ceremony with petals, diyas, fireworks and vows — right from your phones.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#auth" className="px-5 py-3 rounded-lg bg-rose-600 text-white shadow hover:bg-rose-700">Start Digital Marriage</a>
            <a href="#styles" className="px-5 py-3 rounded-lg bg-white text-rose-700 border border-rose-200 hover:bg-rose-50">Explore Styles</a>
          </div>
        </div>
        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6}} className="relative">
          <div className="aspect-video rounded-xl border border-rose-200 bg-white/70 backdrop-blur shadow-lg flex items-center justify-center">
            <div className="text-7xl">🎊</div>
          </div>
          <motion.div className="absolute -top-6 -left-6 text-5xl" animate={{rotate:[0,10,-10,0]}} transition={{repeat:Infinity, duration:6}}>🌸</motion.div>
          <motion.div className="absolute -bottom-6 -right-6 text-5xl" animate={{y:[0,-8,0]}} transition={{repeat:Infinity, duration:3}}>🪔</motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function Decor(){
  return (
    <>
      <div className="absolute inset-x-0 top-0 h-24 bg-[radial-gradient(ellipse_at_top,rgba(244,114,182,0.25),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?q=80&w=1470&auto=format&fit=crop')] opacity-5 mix-blend-multiply" />
    </>
  )
}
