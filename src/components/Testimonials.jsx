import { useState, useEffect } from 'react'
import { FaQuoteLeft, FaStar } from 'react-icons/fa'

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const testimonials = [
    {
      name: "Aisha Khan",
      position: "Managing Partner, Khan Legal Associates",
      avatar: "https://images.pexels.com/photos/3771807/pexels-photo-3771807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      quote: "AreYouFiler.com has transformed how we manage client services. The specialized tools and dashboard have streamlined our operations and allowed us to focus on legal work instead of administrative tasks.",
      rating: 5
    },
    {
      name: "Adnan Ahmed",
      position: "Senior Partner, Ahmed & Sons Law Firm",
      avatar: "https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      quote: "The tax calculators and NTN verification tools have been invaluable for our tax law practice. Our clients appreciate the precise calculations and easy-to-understand reports we can now provide.",
      rating: 5
    },
    {
      name: "Fatima Malik",
      position: "Founder, Malik Legal Consultancy",
      avatar: "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      quote: "As a small firm, we couldn't afford custom software development. AreYouFiler.com provided exactly what we needed at a fraction of the cost. The ROI has been incredible for our practice.",
      rating: 4
    }
  ]
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      )
    }, 8000)
    
    return () => clearInterval(interval)
  }, [testimonials.length])
  
  const handleDotClick = (index) => {
    setCurrentIndex(index)
  }

  return (
    <section className="section bg-secondary-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-secondary-900 mb-4">What Law Firms Say</h2>
          <p className="text-secondary-600 max-w-3xl mx-auto text-lg">
            See how our platform is helping law firms across Pakistan improve their services
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="absolute -top-8 left-10 text-5xl text-primary-500">
              <FaQuoteLeft />
            </div>
            
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`transition-opacity duration-700 ${
                  currentIndex === index ? 'opacity-100' : 'opacity-0 absolute top-0 left-0'
                }`}
                style={{ display: currentIndex === index ? 'block' : 'none' }}
              >
                <div className="mb-8">
                  <p className="text-secondary-700 text-lg italic">
                    "{testimonial.quote}"
                  </p>
                </div>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-secondary-900">{testimonial.name}</h4>
                    <p className="text-secondary-600 text-sm">{testimonial.position}</p>
                    <div className="flex mt-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar 
                          key={i} 
                          className={`w-4 h-4 ${i < testimonial.rating ? 'text-accent-400' : 'text-secondary-300'}`} 
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentIndex === index ? 'bg-primary-600' : 'bg-secondary-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials