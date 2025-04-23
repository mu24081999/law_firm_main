import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FaStar, FaMapMarkerAlt, FaPhone, FaGlobe, FaEnvelope, FaClock, FaBalanceScale, FaGavel, FaAward, FaUniversity, FaUsers, FaHandshake } from 'react-icons/fa'

function LawFirmProfile() {
  const { id } = useParams()
  const [firm, setFirm] = useState(null)

  useEffect(() => {
    // In a real app, this would fetch from an API
    // For demo, we'll use static data
    const lawFirms = [
      {
        id: '1',
        name: 'Ahmed & Associates',
        image: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        description: 'Specializing in corporate law and intellectual property rights with over 15 years of experience.',
        longDescription: 'Ahmed & Associates is one of Pakistan\'s leading corporate law firms, providing comprehensive legal services to businesses and individuals. With a team of experienced lawyers and a track record of successful cases, we help clients navigate complex legal challenges while ensuring their interests are protected.',
        rating: 4.8,
        location: 'Islamabad',
        address: 'F-7 Markaz, Islamabad',
        phone: '+92 345 1234567',
        email: 'info@ahmedlaw.com',
        website: 'www.ahmedlaw.com',
        workingHours: 'Monday - Friday: 9:00 AM - 6:00 PM',
        specialties: ['Corporate Law', 'IP Rights', 'Mergers & Acquisitions'],
        expertise: [
          {
            title: 'Corporate Law',
            description: 'Comprehensive corporate legal services including company formation, compliance, and governance.',
            icon: <FaBalanceScale />
          },
          {
            title: 'Intellectual Property',
            description: 'Protection and enforcement of patents, trademarks, and copyrights.',
            icon: <FaGavel />
          },
          {
            title: 'Mergers & Acquisitions',
            description: 'Strategic guidance through complex M&A transactions.',
            icon: <FaHandshake />
          }
        ],
        achievements: [
          {
            title: 'Top Corporate Law Firm 2024',
            organization: 'Pakistan Legal Awards'
          },
          {
            title: 'Excellence in IP Law',
            organization: 'Asian Legal Business'
          }
        ],
        teamMembers: [
          {
            name: 'Ahmed Khan',
            position: 'Senior Partner',
            image: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            education: 'LLM, Harvard Law School',
            experience: '20+ years in corporate law',
            specializations: ['Corporate Law', 'International Business Law']
          },
          {
            name: 'Sarah Ahmed',
            position: 'Corporate Law Specialist',
            image: 'https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            education: 'LLB, LUMS',
            experience: '12 years in IP law',
            specializations: ['IP Rights', 'Technology Law']
          }
        ],
        clientTestimonials: [
          {
            text: "Ahmed & Associates provided exceptional legal support during our company's merger.",
            author: "CEO, Tech Solutions Ltd",
            rating: 5
          },
          {
            text: "Their expertise in IP law helped us protect our innovations effectively.",
            author: "Founder, Innovation Labs",
            rating: 5
          }
        ]
      }
      // ... other law firms
    ]

    const foundFirm = lawFirms.find(f => f.id === id)
    setFirm(foundFirm)
    
    if (foundFirm) {
      document.title = `${foundFirm.name} - AreYouFiler`
    }
  }, [id])

  if (!firm) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-secondary-900 mb-2">Law Firm Not Found</h2>
          <p className="text-secondary-600">The requested law firm profile does not exist.</p>
        </div>
      </div>
    )
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-secondary-900 to-secondary-800 text-white">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h1 className="font-bold mb-4">{firm.name}</h1>
              <div className="flex items-center mb-4">
                <FaStar className="text-accent-400 mr-2" />
                <span className="text-xl">{firm.rating} Rating</span>
              </div>
              <div className="flex items-center text-secondary-200 mb-6">
                <FaMapMarkerAlt className="mr-2" />
                <span>{firm.location}</span>
              </div>
              <p className="text-xl text-secondary-200 mb-8">
                {firm.description}
              </p>
              <div className="flex flex-wrap gap-3">
                {firm.specialties.map((specialty, index) => (
                  <span 
                    key={index}
                    className="bg-primary-700 text-white px-4 py-2 rounded-full text-sm"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src={firm.image}
                alt={firm.name}
                className="rounded-xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section -mt-16">
        <div className="container">
          <div className="bg-white rounded-xl shadow-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-2xl text-primary-600 mt-1 mr-4" />
                <div>
                  <h3 className="font-bold mb-2">Address</h3>
                  <p className="text-secondary-600">{firm.address}</p>
                </div>
              </div>
              <div className="flex items-start">
                <FaPhone className="text-2xl text-primary-600 mt-1 mr-4" />
                <div>
                  <h3 className="font-bold mb-2">Phone</h3>
                  <p className="text-secondary-600">{firm.phone}</p>
                </div>
              </div>
              <div className="flex items-start">
                <FaEnvelope className="text-2xl text-primary-600 mt-1 mr-4" />
                <div>
                  <h3 className="font-bold mb-2">Email</h3>
                  <p className="text-secondary-600">{firm.email}</p>
                </div>
              </div>
              <div className="flex items-start">
                <FaClock className="text-2xl text-primary-600 mt-1 mr-4" />
                <div>
                  <h3 className="font-bold mb-2">Working Hours</h3>
                  <p className="text-secondary-600">{firm.workingHours}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Expertise */}
      <section className="section">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Areas of Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {firm.expertise.map((area, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md border border-secondary-200">
                <div className="text-3xl text-primary-600 mb-4">
                  {area.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{area.title}</h3>
                <p className="text-secondary-600">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section bg-secondary-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {firm.achievements.map((achievement, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-secondary-200">
                <FaAward className="text-3xl text-accent-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                <p className="text-secondary-600">{achievement.organization}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Legal Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {firm.teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-primary-600 mb-4">{member.position}</p>
                  <div className="space-y-2 text-secondary-600">
                    <div className="flex items-center">
                      <FaUniversity className="mr-2" />
                      <span>{member.education}</span>
                    </div>
                    <div className="flex items-center">
                      <FaUsers className="mr-2" />
                      <span>{member.experience}</span>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {member.specializations.map((spec, i) => (
                      <span key={i} className="bg-secondary-100 text-secondary-700 text-sm px-3 py-1 rounded-full">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-secondary-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Client Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {firm.clientTestimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-accent-400" />
                  ))}
                </div>
                <p className="text-secondary-600 italic mb-4">"{testimonial.text}"</p>
                <p className="font-medium text-secondary-900">- {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-xl text-white p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Need Legal Assistance?</h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Contact us today to schedule a consultation with our experienced legal team.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href={`tel:${firm.phone}`}
                className="btn bg-white text-primary-700 hover:bg-primary-50"
              >
                Call Now
              </a>
              <a 
                href={`mailto:${firm.email}`}
                className="btn bg-transparent border-2 border-white hover:bg-white hover:text-primary-700"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LawFirmProfile