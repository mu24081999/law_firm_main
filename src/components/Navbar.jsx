import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaBars, FaTimes, FaUserAlt } from 'react-icons/fa'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Law Firms', path: '/lawfirms' },
    { name: 'Tools', path: '/tools' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'}`}>
      <div className="container flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary-700">
          AreYouFiler<span className="text-accent-500">.com</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `font-medium transition-colors duration-300 ${
                    isActive
                      ? 'text-primary-600'
                      : scrolled
                      ? 'text-secondary-400 hover:text-primary-600'
                      : 'text-secondary-400 hover:text-primary-600'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/login" className="btn btn-secondary py-2 px-4">
              Login
            </Link>
            <Link to="/signup" className="btn btn-primary py-2 px-4">
              Sign Up
            </Link>
          </div>
        </div>

        {/* Mobile Navigation Button */}
        <button
          className="md:hidden text-secondary-400"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white fixed inset-0 z-50 pt-20">
          <div className="container flex flex-col space-y-6 py-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-lg font-medium ${
                    isActive ? 'text-primary-600' : 'text-secondary-400'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <div className="flex flex-col space-y-4 pt-4">
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="btn btn-secondary w-full text-center"
              >
                Login
              </Link>
              <Link
                to="/signup"
                onClick={() => setIsOpen(false)}
                className="btn btn-primary w-full text-center"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar