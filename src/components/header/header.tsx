import React, { useState } from 'react';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-gray-800 text-white">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                {/* Logo */}
                <div className="text-2xl font-bold logo">
                    <a href="/">LAXMAN<span className='font-narrow'>FITNESS</span></a>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-6">
                    <a href="#services" className="hover:text-gray-300">
                        PRODUCTS
                    </a>
                    <a href="#contact" className="hover:text-gray-300">
                        CONTACT
                    </a>
                </nav>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden text-2xl focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    ☰
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <nav className="md:hidden bg-gray-700 text-center">
                    <a
                        href="#services"
                        className="block py-2 px-4 text-white hover:bg-gray-600"
                    >
                        PRODUCTS
                    </a>
                    <a
                        href="#contact"
                        className="block py-2 px-4 text-white hover:bg-gray-600"
                    >
                        CONTACT
                    </a>
                </nav>
            )}
        </header>
    );
};

export default Header;
