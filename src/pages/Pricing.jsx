import { useEffect, useState } from 'react'
import { FaCheck, FaShieldAlt, FaHeadset, FaHistory } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Pricing() {
  useEffect(() => {
    document.title = 'Pricing - AreYouFiler'
  }, [])

  const [billingCycle, setBillingCycle] = useState('annual')
  
  const features = [
    'Custom branded client portal',
    'Custom domain (whitelable)',
    'Client communication center',
    'Unlimited client accounts',
    'All calculation tools',
    'Document management',
    'Custom dashboard',
    'Free website templates',
    'Payment Gateway Integration',
    'Priority support',
    'Team chat',
    'Dedicated Account Manager',
  ]

  const pricingPlans = [
    {
      id: 'annual',
      name: 'Annual Plan',
      price: 'Rs. 5,000',
      cycle: 'per month',
      discount: 'Save Rs. 24,000 yearly',
      description: 'Best value for established firms',
      commitment: '12-month commitment + Onetime Rs. 25,000 Setup Fee',
      cta: 'Get Started',
      highlight: true
    },
    {
      id: 'biannual',
      name: '6-Month Plan',
      price: 'Rs. 6,000',
      cycle: 'per month',
      discount: 'Save Rs. 6,000 yearly',
      description: 'Great for growing practices',
      commitment: '6-month commitment + Onetime Rs. 25,000 Setup Fee',
      cta: 'Choose Plan',
      highlight: false
    },
    {
      id: 'quarterly',
      name: 'Quarterly Plan',
      price: 'Rs. 7,000',
      cycle: 'per month',
      discount: 'Flexible option',
      description: 'Perfect for trying our platform',
      commitment: '3-month commitment  + Onetime Rs. 25,000 Setup Fee',
      cta: 'Select Plan',
      highlight: false
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-secondary-900 to-secondary-800 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-bold mb-6">Simple, Transparent Pricing</h1>
            <p className="text-xl text-secondary-200 mb-8">
              Choose the plan that works best for your law firm
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section -mt-16">
        <div className="container">
          <div className="bg-white rounded-xl shadow-xl overflow-hidden p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Select Your Plan</h2>
              <p className="text-secondary-600 max-w-2xl mx-auto">
                All plans include the full suite of features. Choose your billing cycle for the best value.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {pricingPlans.map((plan) => (
                <div 
                  key={plan.id}
                  className={`rounded-xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2 ${
                    plan.highlight 
                      ? 'bg-primary-50 border-2 border-primary-500 shadow-lg scale-105 z-10' 
                      : 'bg-white border border-secondary-200 shadow'
                  }`}
                >
                  {plan.highlight && (
                    <div className="bg-primary-500 text-white text-center py-2 font-medium">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="p-6 md:p-8">
                    <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-secondary-600 mb-6">{plan.description}</p>
                    
                    <div className="mb-6">
                      <div className="flex items-end">
                        <span className="text-4xl font-bold">{plan.price}</span>
                        <span className="text-secondary-600 ml-2">{plan.cycle}</span>
                      </div>
                      <div className={`text-sm mt-1 ${plan.highlight ? 'text-primary-700 font-medium' : 'text-secondary-500'}`}>
                        {plan.discount}
                      </div>
                      <div className="text-sm mt-1 text-secondary-500">
                        {plan.commitment}
                      </div>
                    </div>
                    
                    <div className="mb-8">
                      <ul className="space-y-3">
                        {features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <FaCheck className={`mt-1 mr-2 ${plan.highlight ? 'text-primary-600' : 'text-secondary-500'}`} />
                            <span className="text-secondary-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Link
                      to="/contact"
                      className={`block w-full text-center py-3 px-6 rounded-lg font-medium transition-colors ${
                        plan.highlight
                          ? 'bg-primary-600 hover:bg-primary-700 text-white'
                          : 'bg-secondary-800 hover:bg-secondary-900 text-white'
                      }`}
                    >
                      {plan.cta}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Benefits */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-secondary-900 mb-4">Every Plan Includes</h2>
            <p className="text-secondary-600 max-w-3xl mx-auto text-lg">
              No matter which plan you choose, you'll get access to our complete suite of features
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-xl border border-secondary-200 shadow-sm flex flex-col items-center text-center">
              <FaShieldAlt className="text-4xl text-primary-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Security & Compliance</h3>
              <p className="text-secondary-600">
                Bank-level security with data encryption and compliance with Pakistani privacy regulations.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-secondary-200 shadow-sm flex flex-col items-center text-center">
              <FaHeadset className="text-4xl text-primary-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Dedicated Support</h3>
              <p className="text-secondary-600">
                Access to our customer success team for onboarding, training, and ongoing assistance.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-secondary-200 shadow-sm flex flex-col items-center text-center">
              <FaHistory className="text-4xl text-primary-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Regular Updates</h3>
              <p className="text-secondary-600">
                Continuous improvements and updates to tools based on legal changes and customer feedback.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-secondary-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-secondary-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-secondary-600 max-w-3xl mx-auto text-lg">
              Answers to common questions about our pricing and plans
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-3">Can I switch plans later?</h3>
              <p className="text-secondary-700">
                Yes, you can upgrade your plan at any time. If you wish to downgrade, you can do so at the end of your current billing cycle.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-3">Is there a setup fee?</h3>
              <p className="text-secondary-700">
                Yes, there is one-time setup fee of Rs.25,000 for law firms regardless of the billing cycle you choose.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-3">How many clients i can serve?</h3>
              <p className="text-secondary-700">
                There is no such restriction on the numbers of clients you can servce as of now.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-3">What payment methods do you accept?</h3>
              <p className="text-secondary-700">
                Only Bank Transfer as of now.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-3">Is there a free trial?</h3>
              <p className="text-secondary-700">
                We offer a personalized demo instead of a free trial. Contact us to schedule a comprehensive tour of the platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Law Practice?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Join hundreds of law firms across Pakistan who are using our platform to enhance their services.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link to="/contact" className="btn bg-white text-primary-700 hover:bg-primary-50 text-center">
                Schedule a Demo
              </Link>
              <Link to="/contact" className="btn bg-transparent border-2 border-white hover:bg-white hover:text-primary-700 text-white text-center">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Pricing