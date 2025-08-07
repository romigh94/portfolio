import { useState } from "react"

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16 px-4" id="/Contact">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6 font-kanit">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-k2d">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and development.
          </p>
        </div>

        {/* Contact Information Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Email Card */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-xl mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 font-kanit">Email</h3>
            </div>
            <p className="text-gray-600 mb-4 font-k2d">
              Feel free to reach out via email for any inquiries or collaborations.
            </p>
            <a 
              href="mailto:rominaa.ghaderi94@gmail.com" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200 font-k2d"
            >
              rominaa.ghaderi94@gmail.com
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          {/* Phone Card */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-green-500 to-teal-600 p-3 rounded-xl mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 font-kanit">Phone</h3>
            </div>
            <p className="text-gray-600 mb-4 font-k2d">
              Available for calls during business hours. Feel free to leave a message.
            </p>
            <a 
              href="tel:+46701234567" 
              className="inline-flex items-center text-green-600 hover:text-green-800 font-medium transition-colors duration-200 font-k2d"
            >
              +46 70 018 21 73
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          {/* Location Card */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-3 rounded-xl mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 font-kanit">Location</h3>
            </div>
            <p className="text-gray-600 mb-4 font-k2d">
              Based in Sweden, available for remote work and local opportunities.
            </p>
            <span className="text-purple-600 font-medium font-k2d">
              Stockholm, Sweden
            </span>
          </div>
        </div>

        {/* Social Links Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center font-kanit">
            Connect With Me
          </h2>
          <div className="flex justify-center space-x-8">
            <a 
              href="https://github.com/romigh94" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-16 h-16 bg-gray-900 rounded-full hover:bg-gray-800 transition-colors duration-200 group"
            >
              <svg className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/romina-ghaderi-8b6074232/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-200 group"
            >
              <svg className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Availability Section */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center bg-green-100 text-green-800 px-6 py-3 rounded-full font-medium font-k2d">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
            Available for new opportunities
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact