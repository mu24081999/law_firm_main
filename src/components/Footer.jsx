import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="bg-secondary-900 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="text-2xl font-bold mb-4 block">
              AreYouFiler<span className="text-accent-500">.com</span>
            </Link>
            <p className="text-secondary-300 mb-4">
              Specialized tech dashboard solutions for law firms in Pakistan.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-secondary-300 hover:text-white transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-secondary-300 hover:text-white transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-secondary-300 hover:text-white transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-secondary-300 hover:text-white transition-colors">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-secondary-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-secondary-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/lawfirms" className="text-secondary-300 hover:text-white transition-colors">
                  Law Firms
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-secondary-300 hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-secondary-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Tools</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/tools" className="text-secondary-300 hover:text-white transition-colors">
                  NTN Status Check
                </Link>
              </li>
              <li>
                <Link to="/tools" className="text-secondary-300 hover:text-white transition-colors">
                  Sales Tax Calculator
                </Link>
              </li>
              <li>
                <Link to="/tools" className="text-secondary-300 hover:text-white transition-colors">
                  Income Tax Calculator
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <address className="not-italic text-secondary-300">
              <p className="mb-2">Islamabad, Pakistan</p>
              <p className="mb-2">Email: info@areyoufiler.com</p>
              <p>Phone: +92 123 4567890</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-secondary-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-secondary-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} AreYouFiler.com. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-secondary-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-secondary-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer