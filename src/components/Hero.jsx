import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-secondary-900 to-secondary-800 text-white">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
            <h1 className="font-bold mb-6">
              Elevate Your Law Practice with Specialized Tech Solutions
            </h1>
            <p className="text-xl text-secondary-200 mb-8">
              Streamlined dashboards and digital tools designed specifically for law firms in Pakistan. 
              Enhance client services and optimize your legal practice.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <Link to="/pricing" className="btn btn-primary text-center">
                Get Started
              </Link>
              <Link to="/contact" className="btn bg-transparent border-2 border-white hover:bg-white hover:text-secondary-900 text-white text-center">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.pexels.com/photos/5668481/pexels-photo-5668481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Law Firm Dashboard" 
              className="w-full h-auto rounded-xl shadow-xl transform translate-y-4 translate-x-2 md:translate-x-6"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero