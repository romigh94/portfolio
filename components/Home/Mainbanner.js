import { useRouter } from "next/router"

const Mainbanner = () => {
    const router = useRouter()  

    return (
      <div className="relative min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/images/hero-banner.png" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-purple-900/50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-kanit leading-tight">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Romina</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-k2d">
                I'm a Fullstack developer from Sweden. During my education I have learned to build and design software with different technologies. It's a big passion for me.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-k2d"
                onClick={() => router.push('#/Contact')}
              >
                Contact me
              </button>
              
              <button 
                className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold rounded-full text-lg transition-all duration-300 transform hover:scale-105 font-k2d"
                onClick={() => router.push('#/Work')}
              >
                View My Work
              </button>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Mainbanner