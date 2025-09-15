"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { href: '/', label: 'Beranda' },
    { href: '/tentang', label: 'Tentang' },
    { href: '/fitur', label: 'Fitur' },
    { href: '/blog', label: 'Blog' },
    { href: '/kontak', label: 'Kontak' },
  ];

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="group flex items-center space-x-2 relative overflow-hidden">
              <div className="absolute inset-0 z-0 bg-sky-600 rounded-full blur-xl opacity-10 group-hover:opacity-20 transition duration-500"></div>
              <div className="z-10 flex items-center space-x-2">
                <svg className="h-8 w-8 text-sky-600 group-hover:animate-pulse transition duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.835 5.485 10 3.75 10 3.75s-.835 1.735-2 2.503L6 8.5v5.5a4 4 0 004 4h4a4 4 0 004-4V8.5L14 6.253z"/>
                </svg>
                <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-indigo-500 to-purple-600 transition-colors duration-300 group-hover:from-sky-500 group-hover:to-purple-500">
                  EMREI
                </span>
              </div>
            </Link>
          </div>
          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition duration-300 ${
                  pathname === link.href
                    ? 'bg-sky-100 text-sky-600 shadow-md'
                    : 'text-gray-900 hover:text-sky-600 hover:bg-sky-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="https://rafordigital.netlify.app/"
              className="bg-sky-600 text-white px-4 py-2 rounded-lg hover:bg-sky-700 transition duration-300"
            >
              Login
            </Link>
          </div>
          <div className="flex items-center sm:hidden">
            <button onClick={toggleMenu} className="text-sky-600 focus:outline-none">
              <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="fa-icon" />
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="sm:hidden bg-white border-t border-sky-200">
          <div className="flex flex-col items-center space-y-2 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-base font-medium rounded-lg transition duration-300 ${
                  pathname === link.href
                    ? 'bg-sky-100 text-sky-600 shadow-md'
                    : 'text-gray-900 hover:text-sky-600 hover:bg-sky-50'
                }`}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="https://rafordigital.netlify.app/"
              className="bg-sky-600 text-white px-4 py-2 rounded-lg hover:bg-sky-700 transition duration-300"
              onClick={closeMenu}
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}