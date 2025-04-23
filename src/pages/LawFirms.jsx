import { useEffect, useState } from 'react'
import { FaStar, FaMapMarkerAlt, FaSearch, FaFilter } from 'react-icons/fa'

function LawFirms() {
  useEffect(() => {
    document.title = 'Law Firms - AreYouFiler'
  }, [])

  const [searchTerm, setSearchTerm] = useState('')
  const [selectedSpecialties, setSelectedSpecialties] = useState([])
  const [selectedLocations, setSelectedLocations] = useState([])
  const [filtersVisible, setFiltersVisible] = useState(false)
  
  const lawFirms = [
    {
      id: 1,
      name: 'Ahmed & Associates',
      image: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Specializing in corporate law and intellectual property rights with over 15 years of experience.',
      rating: 4.8,
      location: 'Islamabad',
      specialties: ['Corporate Law', 'IP Rights', 'Mergers & Acquisitions']
    },
    {
      id: 2,
      name: 'Khan Law Chambers',
      image: 'https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Premier law firm handling high-profile cases in taxation and commercial disputes.',
      rating: 4.9,
      location: 'Lahore',
      specialties: ['Tax Law', 'Commercial Litigation', 'Banking Law']
    },
    {
      id: 3,
      name: 'Karachi Legal Consultants',
      image: 'https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Full-service law firm providing comprehensive legal solutions for businesses and individuals.',
      rating: 4.7,
      location: 'Karachi',
      specialties: ['Family Law', 'Property Law', 'Criminal Defense']
    },
    {
      id: 4,
      name: 'Malik & Partners',
      image: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Boutique law firm focusing on intellectual property and technology law for startups and tech companies.',
      rating: 4.6,
      location: 'Islamabad',
      specialties: ['IP Rights', 'Technology Law', 'Startup Advisory']
    },
    {
      id: 5,
      name: 'Peshawar Law Associates',
      image: 'https://images.pexels.com/photos/8111311/pexels-photo-8111311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Specialized in representing clients in the northern regions of Pakistan with focus on property and civil matters.',
      rating: 4.5,
      location: 'Peshawar',
      specialties: ['Property Law', 'Civil Litigation', 'Family Law']
    },
    {
      id: 6,
      name: 'Sindh Legal Services',
      image: 'https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Comprehensive legal services for businesses and individuals in Sindh province with multilingual team.',
      rating: 4.4,
      location: 'Karachi',
      specialties: ['Business Law', 'Employment Law', 'Consumer Rights']
    }
  ]
  
  const allSpecialties = [...new Set(lawFirms.flatMap(firm => firm.specialties))].sort()
  const allLocations = [...new Set(lawFirms.map(firm => firm.location))].sort()
  
  const handleSpecialtyChange = (specialty) => {
    setSelectedSpecialties(prev => 
      prev.includes(specialty)
        ? prev.filter(s => s !== specialty)
        : [...prev, specialty]
    )
  }
  
  const handleLocationChange = (location) => {
    setSelectedLocations(prev => 
      prev.includes(location)
        ? prev.filter(l => l !== location)
        : [...prev, location]
    )
  }
  
  const filteredFirms = lawFirms.filter(firm => {
    const matchesSearch = firm.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          firm.description.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesSpecialties = selectedSpecialties.length === 0 || 
                              firm.specialties.some(specialty => selectedSpecialties.includes(specialty))
    
    const matchesLocation = selectedLocations.length === 0 ||
                            selectedLocations.includes(firm.location)
    
    return matchesSearch && matchesSpecialties && matchesLocation
  })

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-secondary-900 to-secondary-800 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-bold mb-6">Find Law Firms</h1>
            <p className="text-xl text-secondary-200 mb-8">
              Discover top law firms in Pakistan using AreYouFiler's advanced tech solutions
            </p>
            
            <div className="relative">
              <div className="flex">
                <div className="relative flex-grow">
                  <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-secondary-400" />
                  <input 
                    type="text" 
                    placeholder="Search by name or specialty..." 
                    className="w-full py-4 pl-12 pr-4 rounded-l-lg text-secondary-900 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <button 
                  className="bg-primary-600 hover:bg-primary-700 text-white px-6 rounded-r-lg flex items-center"
                  onClick={() => setFiltersVisible(!filtersVisible)}
                >
                  <FaFilter className="mr-2" />
                  Filters
                </button>
              </div>
              
              {filtersVisible && (
                <div className="absolute mt-2 w-full bg-white rounded-lg shadow-xl p-6 z-10 text-left">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-bold text-secondary-900 mb-3">Specialties</h3>
                      <div className="space-y-2 max-h-60 overflow-y-auto">
                        {allSpecialties.map(specialty => (
                          <label key={specialty} className="flex items-center">
                            <input 
                              type="checkbox" 
                              checked={selectedSpecialties.includes(specialty)}
                              onChange={() => handleSpecialtyChange(specialty)}
                              className="mr-2"
                            />
                            <span className="text-secondary-700">{specialty}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-bold text-secondary-900 mb-3">Locations</h3>
                      <div className="space-y-2">
                        {allLocations.map(location => (
                          <label key={location} className="flex items-center">
                            <input 
                              type="checkbox"
                              checked={selectedLocations.includes(location)}
                              onChange={() => handleLocationChange(location)}
                              className="mr-2"
                            />
                            <span className="text-secondary-700">{location}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end mt-6">
                    <button 
                      className="text-primary-600 hover:text-primary-800 mr-4"
                      onClick={() => {
                        setSelectedSpecialties([])
                        setSelectedLocations([])
                      }}
                    >
                      Reset Filters
                    </button>
                    <button 
                      className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-md"
                      onClick={() => setFiltersVisible(false)}
                    >
                      Apply Filters
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Law Firms Listing */}
      <section className="section -mt-8">
        <div className="container">
          {filteredFirms.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredFirms.map((firm) => (
                <div 
                  key={firm.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={firm.image} 
                      alt={firm.name} 
                      className="w-full h-full object-cover transition-transform hover:scale-110 duration-700"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold">{firm.name}</h3>
                      <div className="flex items-center bg-primary-50 text-primary-800 px-2 py-1 rounded-md">
                        <FaStar className="text-accent-500 mr-1" />
                        <span>{firm.rating}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-secondary-500 mb-3">
                      <FaMapMarkerAlt className="mr-2" />
                      <span>{firm.location}</span>
                    </div>
                    
                    <p className="text-secondary-600 mb-4">{firm.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {firm.specialties.map((specialty, index) => (
                        <span 
                          key={index} 
                          className="bg-secondary-100 text-secondary-700 text-sm px-3 py-1 rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                    
                    <a 
                      href={`/lawfirms/${firm.id}`} 
                      className="block w-full text-center bg-secondary-800 hover:bg-secondary-900 text-white font-medium py-2 px-4 rounded-md transition-colors"
                    >
                      View Profile
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-md p-8 text-center">
              <h3 className="text-xl font-bold mb-2">No law firms found</h3>
              <p className="text-secondary-600 mb-4">
                No law firms match your current search criteria. Please try adjusting your filters.
              </p>
              <button 
                className="text-primary-600 hover:text-primary-800 font-medium"
                onClick={() => {
                  setSearchTerm('')
                  setSelectedSpecialties([])
                  setSelectedLocations([])
                }}
              >
                Reset all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-secondary-50">
        <div className="container">
          <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-xl overflow-hidden shadow-xl">
            <div className="p-8 md:p-12 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Are You a Law Firm?</h2>
              <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
                Join AreYouFiler and showcase your services to potential clients. Get access to specialized tech tools tailored for Pakistan's legal industry.
              </p>
              <a 
                href="/pricing" 
                className="inline-block bg-white text-primary-700 hover:bg-primary-50 font-medium px-8 py-3 rounded-lg transition-colors"
              >
                Sign Up Your Firm
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LawFirms