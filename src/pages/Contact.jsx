import { useEffect, useState } from 'react'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa'

function Contact() {
  useEffect(() => {
    document.title = 'Contact Us - AreYouFiler'
  }, [])

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    firmName: '',
    message: '',
    interest: 'general'
  })

  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real implementation, this would send the form data to a server
    // For now, we'll just simulate a successful submission
    setFormSubmitted(true)
  }

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-2xl text-primary-600" />,
      title: 'Our Location',
      details: 'Alrehman Garden Phase 2, Lahore, Pakistan'
    },
    {
      icon: <FaPhone className="text-2xl text-primary-600" />,
      title: 'Phone Number',
      details: '+92 00 1234567'
    },
    {
      icon: <FaEnvelope className="text-2xl text-primary-600" />,
      title: 'Email Address',
      details: 'support@areyoufiler.com'
    },
    {
      icon: <FaClock className="text-2xl text-primary-600" />,
      title: 'Working Hours',
      details: 'Monday - Friday: 9am - 6pm'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-secondary-900 to-secondary-800 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-secondary-200 mb-8">
              Have questions about our services? Get in touch with our team.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section -mt-16">
        <div className="container">
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Contact Form */}
              <div className="p-8 md:p-12">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                
                {formSubmitted ? (
                  <div className="bg-green-100 border border-green-200 text-green-800 rounded-lg p-6 mb-6">
                    <h3 className="text-xl font-bold mb-2">Thank You!</h3>
                    <p>Your message has been received. We'll get back to you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="firmName" className="block text-sm font-medium text-secondary-700 mb-2">
                          Law Firm Name
                        </label>
                        <input
                          type="text"
                          id="firmName"
                          name="firmName"
                          value={formData.firmName}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="interest" className="block text-sm font-medium text-secondary-700 mb-2">
                        What are you interested in?
                      </label>
                      <select
                        id="interest"
                        name="interest"
                        value={formData.interest}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="demo">Request a Demo</option>
                        <option value="pricing">Pricing Information</option>
                        <option value="support">Technical Support</option>
                        <option value="partnership">Partnership Opportunities</option>
                      </select>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
                        Your Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        required
                      ></textarea>
                    </div>
                    
                    <div>
                      <button
                        type="submit"
                        className="btn btn-primary w-full"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                )}
              </div>
              
              {/* Contact Information */}
              <div className="bg-primary-900 p-8 md:p-12 text-white">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <p className="text-primary-100 mb-8">
                  Have questions about our platform or want to schedule a demo? Reach out to us using any of the contact methods below.
                </p>
                
                <div className="space-y-8">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="mr-4 mt-1">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-medium text-xl mb-1">{item.title}</h3>
                        <p className="text-primary-100">{item.details}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-12">
                  <h3 className="font-medium text-xl mb-4">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="#" 
                      className="w-10 h-10 rounded-full bg-primary-800 flex items-center justify-center transition-colors hover:bg-primary-700"
                      aria-label="Facebook"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 rounded-full bg-primary-800 flex items-center justify-center transition-colors hover:bg-primary-700"
                      aria-label="Twitter"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 rounded-full bg-primary-800 flex items-center justify-center transition-colors hover:bg-primary-700"
                      aria-label="LinkedIn"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Just for visual, not functional) */}
      <section className="section bg-secondary-50">
        <div className="container">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              <div className="w-full h-96 bg-secondary-200 flex items-center justify-center">
                <p className="text-secondary-600 text-lg">Interactive Map Would Be Here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-secondary-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-secondary-600 max-w-3xl mx-auto text-lg">
              Quick answers to questions we often receive
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-200">
              <h3 className="text-lg font-bold mb-3">How quickly can we implement your solution?</h3>
              <p className="text-secondary-700">
                Most law firms are up and running within 1-2 business days after signing up. Our onboarding team will guide you through the entire process.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-200">
              <h3 className="text-lg font-bold mb-3">Do you offer customization for specific law firm needs?</h3>
              <p className="text-secondary-700">
                Yes, we can customize certain aspects of the dashboard to meet your firm's specific requirements. Contact our team to discuss your needs.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-200">
              <h3 className="text-lg font-bold mb-3">Is my firm's data secure on your platform?</h3>
              <p className="text-secondary-700">
                Absolutely. We implement bank-level security measures to protect your data, including end-to-end encryption and regular security audits.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-200">
              <h3 className="text-lg font-bold mb-3">Can I cancel my subscription at any time?</h3>
              <p className="text-secondary-700">
                While our plans are structured for quarterly, bi-annual, or annual commitments, you can discuss your specific situation with our customer service team.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact