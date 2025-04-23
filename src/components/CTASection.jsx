import { Link } from 'react-router-dom'

function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Law Practice?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Join hundreds of law firms across Pakistan who are using our platform to streamline their operations and enhance client services.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link to="/pricing" className="btn bg-white text-primary-700 hover:bg-primary-50 text-center">
              View Pricing Plans
            </Link>
            <Link to="/contact" className="btn bg-transparent border-2 border-white hover:bg-white hover:text-primary-700 text-white text-center">
              Schedule a Demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection