import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const { pathname } = useLocation()
  return (
    <header className="w-full fixed top-0 left-0 z-30 backdrop-blur bg-white/60 border-b border-rose-100">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl">💍</span>
          <span className="text-xl font-extrabold bg-gradient-to-r from-amber-600 via-rose-600 to-pink-600 bg-clip-text text-transparent">ShaadiVerse</span>
        </Link>
        <nav className="flex items-center gap-4 text-sm">
          <Link className={linkCls(pathname === '/styles')} to="/styles">Wedding Styles</Link>
          <Link className={linkCls(pathname === '/ceremony')} to="/ceremony">Ceremony</Link>
          <Link className={linkCls(pathname === '/home')} to="/home">Private Space</Link>
          <a className="inline-flex items-center gap-1 bg-rose-600 text-white px-3 py-1.5 rounded-md shadow hover:bg-rose-700" href="/test">API</a>
        </nav>
      </div>
    </header>
  )
}

function linkCls(active){
  return `px-3 py-1.5 rounded-md hover:bg-white ${active? 'bg-white shadow text-rose-700':'text-rose-700/80'}`
}
