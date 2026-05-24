import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Navbar = () => {
    const router = useRouter();
    const [selected, setSelected] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            setScrolled(isScrolled);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { name: "About", href: "#/About" },
        { name: "Work", href: "#/Work" },
        { name: "Contact", href: "#/Contact" }
    ];

    return (
        <div
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200"
                    : "bg-black/20 backdrop-blur-md"
            }`}
        >
            <div className="max-w-6xl mx-auto px-6">
                <nav className="flex items-center justify-between h-20">

                    {/* Logo */}
                    <div className="flex items-center">
                        <a
                            href="/"
                            className={`text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-kanit hover:scale-105 transition-transform duration-300 ${
                                !scrolled ? "drop-shadow-md" : ""
                            }`}
                        >
                            RG
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-10">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className={`relative text-lg font-medium transition-colors duration-200 font-k2d group ${
                                    scrolled ? "text-gray-700" : "text-white"
                                }`}
                            >
                                {item.name}

                                {/* Hover underline */}
                                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setSelected(!selected)}
                            className={`p-2 transition-colors duration-200 ${
                                scrolled ? "text-gray-700" : "text-white"
                            }`}
                        >
                            {selected ? (
                                <svg
                                    className="w-8 h-8"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="w-8 h-8"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </nav>

                {/* Mobile Navigation */}
                <div
                    className={`md:hidden overflow-hidden transition-all duration-300 ${
                        selected ? "max-h-96 opacity-100 py-6" : "max-h-0 opacity-0"
                    }`}
                >
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 flex flex-col space-y-4">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={() => setSelected(false)}
                                className="text-xl font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 font-k2d"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;