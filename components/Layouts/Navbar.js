import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Navbar = () => {
    const router = useRouter()
    const [selected, setSelected] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20
            setScrolled(isScrolled)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navItems = [
        { name: 'About', href: '#/About' },
        { name: 'Work', href: '#/Work' },
        { name: 'Contact', href: '#/Contact' }
    ]

    return (
        <div className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200 transition-all duration-300">
            <div className="max-w-6xl mx-auto px-6">
                <nav className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex items-center">
                        <a 
                            href="/" 
                            className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-kanit hover:scale-105 transition-transform duration-300"
                        >
                            RG
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <a 
                                key={item.name}
                                href={item.href} 
                                className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 font-k2d"
                            >
                                {item.name}
                            </a>
                        ))}
                        
                        {/* Resume Button */}
                        <a 
                            href="/cv.pdf" 
                            target="_blank"
                            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-k2d flex items-center space-x-2"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <span>Resume</span>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setSelected(!selected)}
                            className="p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
                        >
                            {selected ? (
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </nav>

                {/* Mobile Navigation */}
                {selected && (
                    <div className="md:hidden bg-white border-t border-gray-200 py-6">
                        <div className="flex flex-col space-y-4">
                            {navItems.map((item) => (
                                <a 
                                    key={item.name}
                                    href={item.href} 
                                    onClick={() => setSelected(false)}
                                    className="text-xl font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 px-4 py-2 font-k2d"
                                >
                                    {item.name}
                                </a>
                            ))}
                            
                            {/* Mobile Resume Button */}
                            <div className="pt-4">
                                <a 
                                    href="/cv.pdf" 
                                    target="_blank"
                                    onClick={() => setSelected(false)}
                                    className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-k2d mx-4"
                                >
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    Download Resume
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar