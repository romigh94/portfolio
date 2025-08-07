import React from 'react'
import { useRouter } from 'next/router'

const About = () => {
  const router = useRouter()

  const skills = [
    'HTML', 'CSS/Sass', 'JavaScript', 'NodeJS', 'Figma', 'React.js',
    'Next.js', 'Vue.js', 'MongoDB', 'Bootstrap', 'Tailwind', 'Git/Github',
    'Responsive design', 'REST API', 'Agile workflows'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-4" id="/About">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6 font-kanit">
            About Me
          </h1>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Profile */}
          <div className="text-center lg:text-left">
            <div className="mb-8">
              <img 
                src="/images/profile-image.jpg" 
                alt="Romina Ghaderi" 
                className="w-64 h-64 rounded-full mx-auto lg:mx-0 object-cover shadow-2xl border-4 border-white"
              />
            </div>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-8 font-k2d">
              Hello there! I'm a passionate Frontend Developer with experience in both frontend and backend development. I love working with different technologies and am always eager to learn.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-8 font-k2d">
              I'm great at creating user-friendly designs using different technologies that helps me make websites that look good and work well. I enjoy learning new technologies and I'm a problem-solving enthusiast.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-8 font-k2d">
              When I decide to do something, I go all in with confidence and a cheerful attitude. Let's work together to create awesome things!
            </p>

            <button 
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-k2d"
              onClick={() => router.push('#/Contact')}
            >
              Contact me
            </button>
          </div>

          {/* Right Column - Skills */}
          <div>
            <h4 className="text-2xl font-semibold text-gray-800 mb-8 text-center lg:text-left font-kanit">
              Some technologies/things I've been working with:
            </h4>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 p-4 text-center border border-gray-100"
                >
                  <span className="text-gray-700 font-medium font-k2d">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About