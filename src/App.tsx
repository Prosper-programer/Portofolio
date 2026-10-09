import { Navbar } from './components/Navbar'

function App() {
  return (
    <div className="min-h-screen bg-warm-ivory text-deep-charcoal flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center pt-20">
        <section className="text-center px-4 max-w-2xl mx-auto">
          <div className="inline-block p-4 rounded-full bg-soft-sage/30 mb-6 border border-soft-sage">
            <span className="text-4xl" role="img" aria-label="Construction">🛠️</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Portfolio coming together
          </h1>
          <p className="text-lg text-deep-charcoal/80 max-w-lg mx-auto">
            I'm currently building out the sections of my professional portfolio. 
            Feel free to explore the navigation menu above to see the intended structure.
          </p>
        </section>
      </main>
    </div>
  )
}

export default App
