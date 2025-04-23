import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaStar, FaMapMarkerAlt, FaPhone, FaGlobe } from 'react-icons/fa'

function FeaturedLawFirms() {
  const [hoveredCard, setHoveredCard] = useState(null)
  
  const lawFirms = [
    {
      id: 1,
      name: 'Ahmed & Associates',
      image: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Specializing in corporate law and intellectual property rights with over 15 years of experience.',
      rating: 4.8,
      location: 'Islamabad',
      phone: '+92 345 1234567',
      website: 'www.ahmedlaw.com',
      specialties: ['Corporate Law', 'IP Rights', 'Mergers & Acquisitions']
    },
    {
      id: 2,
      name: 'Khan Law Chambers',
      image: 'https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Premier law firm handling high-profile cases in taxation and commercial disputes.',
      rating: 4.9,
      location: 'Lahore',
      phone: '+92 300 7654321',
      website: 'www.khanlawchambers.pk',
      specialties: ['Tax Law', 'Commercial Litigation', 'Banking Law']
    },
    {
      id: 3,
      name: 'Karachi Legal Consultants',
      image: 'https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Full-service law firm providing comprehensive legal solutions for businesses and individuals.',
      rating: 4.7,
      location: 'Karachi',
      phone: '+92 321 9876543',
      website: 'www.karachilaw.com',
      specialties: ['Family Law', 'Property Law', 'Criminal Defense']
    }
  ]

  return (
    <section className="section bg-secondary-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-secondary-900 mb-4">Featured Law Firms</h2>
          <p className="text-secondary-600 max-w-3xl mx-auto text-lg">
            Discover top-rated law firms in Pakistan using our tech dashboard solutions to enhance their client services
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lawFirms.map((firm) => (
            <div 
              key={firm.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              onMouseEnter={() => setHoveredCard(firm.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={firm.image} 
                  alt={firm.name} 
                  className={`w-full h-full object-cover transition-transform duration-700 ${hoveredCard === firm.id ? 'scale-110' : 'scale-100'}`}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-secondary-900 to-transparent p-4">
                  <div className="flex items-center text-white">
                    <FaStar className="text-accent-400 mr-1" />
                    <span>{firm.rating}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{firm.name}</h3>
                <div className="flex items-center text-secondary-500 mb-3">
                  <FaMapMarkerAlt className="mr-2" />
                  <span>{firm.location}</span>
                </div>
                <p className="text-secondary-600 mb-4">{firm.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {firm.specialties.map((specialty, index) => (
                    <span 
                      key={index} 
                      className="bg-primary-100 text-primary-700 text-sm px-3 py-1 rounded-full"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
                
                <div className="border-t border-secondary-200 pt-4 mt-4">
                  <div className="flex flex-col space-y-2">
                    <div className="flex items-center text-secondary-600">
                      <FaPhone className="mr-2" />
                      <span>{firm.phone}</span>
                    </div>
                    <div className="flex items-center text-secondary-600">
                      <FaGlobe className="mr-2" />
                      <span>{firm.website}</span>
                    </div>
                  </div>
                </div>
                
                <Link 
                  to={`/lawfirms/${firm.id}`} 
                  className="mt-4 inline-block w-full text-center bg-secondary-100 hover:bg-secondary-200 text-secondary-800 font-medium py-2 px-4 rounded-md transition-colors"
                >
                  View Profile
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/lawfirms" className="btn btn-primary">
            View All Law Firms
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedLawFirms