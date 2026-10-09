import { Navbar } from './components/Navbar'

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center pt-20">
        <section className="text-center px-4 max-w-2xl mx-auto">
          <div className="inline-block p-4 rounded-full bg-bg-hover mb-6 border border-border-subtle">
            <span className="text-4xl" role="img" aria-label="Construction">🛠️</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Portfolio coming together
          </h1>
          <p className="text-lg text-text-muted max-w-lg mx-auto">
            I'm currently building out the sections of my professional portfolio. 
            Feel free to explore the navigation menu above to see the intended structure.
          </p>
        </section>
      </main>
    </div>
  )
}

export default App
