import Header from './components/Header'
import Hero from './components/Hero'
import { AuthSection, StylesShowcase, CeremonyDemo } from './components/Sections'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50 text-rose-900">
      <Header />
      <main>
        <Hero />
        <AuthSection />
        <StylesShowcase />
        <CeremonyDemo />
      </main>
      <footer className="py-10 text-center text-rose-700/70">Not a legal certificate • Demo build</footer>
    </div>
  )
}

export default App