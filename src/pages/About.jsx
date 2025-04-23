import { useEffect } from 'react'
import { FaCheckCircle, FaUsers, FaBriefcase, FaLaptopCode } from 'react-icons/fa'

function About() {
  useEffect(() => {
    document.title = 'About Us - AreYouFiler'
  }, [])

  const stats = [
    { 
      label: 'Law Firms Served', 
      value: '200+',
      icon: <FaBriefcase className="text-3xl text-primary-600" />
    },
    { 
      label: 'Client Services Improved', 
      value: '15K+',
      icon: <FaUsers className="text-3xl text-primary-600" /> 
    },
    { 
      label: 'Years of Experience', 
      value: '8+',
      icon: <FaLaptopCode className="text-3xl text-primary-600" /> 
    }
  ]

  const values = [
    {
      title: 'Innovation',
      description: 'We constantly push the boundaries of legal tech to provide cutting-edge solutions.'
    },
    {
      title: 'Integrity',
      description: 'We uphold the highest ethical standards in all our business operations and relationships.'
    },
    {
      title: 'Client-Centric',
      description: 'Our solutions are designed with the specific needs of Pakistani law firms in mind.'
    },
    {
      title: 'Excellence',
      description: 'We strive for excellence in every aspect of our service and product development.'
    }
  ]

  const team = [
    {
      name: 'Shoaib Khan',
      position: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      bio: 'Former legal consultant with 15+ years of experience who saw the need for better tech solutions in Pakistani law firms.'
    },
    {
      name: 'Amina Shah',
      position: 'Chief Technology Officer',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      bio: 'Tech innovator with expertise in creating intuitive solutions for complex legal problems.'
    },
    {
      name: 'Tariq Ahmad',
      position: 'Legal Advisor',
      image: 'https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      bio: 'Experienced tax attorney ensuring our products comply with Pakistani legal requirements.'
    },
    {
      name: 'Sana Malik',
      position: 'Customer Success Manager',
      image: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      bio: 'Dedicated to ensuring every law firm gets maximum value from our platform.'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-secondary-900 to-secondary-800 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-bold mb-6">About AreYouFiler</h1>
            <p className="text-xl text-secondary-200 mb-8">
              We're transforming how law firms in Pakistan leverage technology to serve their clients better.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="section">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Our Mission" 
                className="rounded-xl shadow-xl w-full h-auto object-cover"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-secondary-900 mb-6">Our Mission</h2>
              <p className="text-secondary-700 text-lg mb-6">
                At AreYouFiler, we're on a mission to bridge the technology gap for law firms in Pakistan. We believe that every legal practice, regardless of size, deserves access to powerful tech tools that can transform their operations and client services.
              </p>
              <p className="text-secondary-700 text-lg mb-8">
                Our platform is designed specifically for the Pakistani legal ecosystem, addressing the unique challenges and requirements that local law firms face. By providing specialized digital solutions, we help law firms focus on what they do best – practicing law.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <FaCheckCircle className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-secondary-700">Streamlining administrative processes for legal professionals</p>
                </div>
                <div className="flex items-start">
                  <FaCheckCircle className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-secondary-700">Providing accurate, up-to-date legal calculation tools</p>
                </div>
                <div className="flex items-start">
                  <FaCheckCircle className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-secondary-700">Enhancing client experience through better technology</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-8 bg-primary-800 rounded-xl">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-bold mb-2">{stat.value}</h3>
                <p className="text-primary-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section bg-secondary-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-secondary-900 mb-4">Our Core Values</h2>
            <p className="text-secondary-600 max-w-3xl mx-auto text-lg">
              The principles that guide us in developing solutions that make a real difference for law firms
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-secondary-200">
                <h3 className="text-xl font-bold text-primary-700 mb-3">{value.title}</h3>
                <p className="text-secondary-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-secondary-900 mb-4">Meet Our Team</h2>
            <p className="text-secondary-600 max-w-3xl mx-auto text-lg">
              Passionate professionals committed to transforming the legal tech landscape in Pakistan
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary-600 font-medium mb-4">{member.position}</p>
                  <p className="text-secondary-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Us in Revolutionizing Legal Tech in Pakistan
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Partner with AreYouFiler to transform your law practice with cutting-edge technology.
            </p>
            <a href="/contact" className="btn bg-white text-primary-700 hover:bg-primary-50">
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About