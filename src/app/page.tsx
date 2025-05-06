import { Zap } from "lucide-react"

import { Sparkles } from "lucide-react"


const HomePage = () => {
  return (
    <>
      <section className="fixed inset-0 min-h-screen overflow-hidden flex items-center bg-zinc-900">
        {/* Background elements */}
        <div className="absolute inset-0 retro-grid opacity-40"></div>
        <div className="absolute inset-0 mesh-gradient"></div>

        {/* Floating orbs */}
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-violet-600/20 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-purple-500/20 rounded-full filter blur-3xl animate-float-delay-2"></div>
        <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-fuchsia-600/20 rounded-full filter blur-3xl animate-float-delay-4"></div>

        {/* hero content */}

        <div className="sm:m-0 md:ml-[3vw] lg:ml-[5vw] xl:ml-[10vw] 2xl:ml-[15vw] px-4 z-10 sm:w-full">
          {/* Your content */}
          <div className="text-white text-md font-semibold bg-gray-400 p-2 px-3.5 rounded-full mb-6 glassmorphism flex w-max items-center justify-between">
          <Sparkles className="h-4 w-4 mr-2 text-purple-400" />
          <span className="">Time-limited Flash Sales</span>
          </div>
          <div className="font-syne">
            <h1 className="text-5xl text-white md:text-7xl lg:text-8xl font-extrabold mb-6 tracking-tight neon-glow">
              Future Drops.<br />
              <span className="bg-gradient-to-r from-purple-400 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
                Limited Supply.
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-zinc-400 max-w-xl">
              Tomorrow's essentials, today's rarities. Secure exclusive items before they vanish forever.
            </p>

            <div className="flex flex-wrap gap-6">
              <button className="neon-button group">
                Shop Collection
                <Zap className="ml-2 h-4 w-4 inline-block transition-transform group-hover:rotate-12" />
              </button>
              
              <button className="neo-brutalism px-8 py-3 rounded-full">
                Explore Latest
              </button>
            </div>
          </div>
        </div>
        <div className="absolute top-6 right-6 h-24 w-[1px] bg-gradient-to-b from-transparent via-purple-500 to-transparent"></div>
        <div className="absolute top-6 right-6 h-[1px] w-24 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
        <div className="absolute bottom-6 left-6 h-24 w-[1px] bg-gradient-to-b from-transparent via-purple-500 to-transparent"></div>
        <div className="absolute bottom-6 left-6 h-[1px] w-24 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
      </section>
    </>
  )
}

export default HomePage