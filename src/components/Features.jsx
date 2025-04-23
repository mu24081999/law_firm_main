import { FaLaptop, FaTools, FaUserTie, FaChartLine, FaShieldAlt, FaClock } from 'react-icons/fa'

function Features() {
  const features = [
    {
      icon: <FaLaptop className="text-4xl text-primary-500 mb-4" />,
      title: 'Custom Dashboard',
      description: 'Tailored dashboard for your law firm with all necessary tools and analytics in one place.'
    },
    {
      icon: <FaTools className="text-4xl text-primary-500 mb-4" />,
      title: 'Legal Tools',
      description: 'Access to specialized legal calculators and verification tools specific to Pakistani law.'
    },
    {
      icon: <FaUserTie className="text-4xl text-primary-500 mb-4" />,
      title: 'Client Management',
      description: 'Streamlined client intake, documents, and communication all in one secure platform.'
    },
    {
      icon: <FaChartLine className="text-4xl text-primary-500 mb-4" />,
      title: 'Analytics',
      description: 'Comprehensive analytics to track your firm\'s performance and identify growth opportunities.'
    },
    {
      icon: <FaShieldAlt className="text-4xl text-primary-500 mb-4" />,
      title: 'Secure Platform',
      description: 'Bank-level security to protect sensitive client information and legal documents.'
    },
    {
      icon: <FaClock className="text-4xl text-primary-500 mb-4" />,
      title: 'Time Savings',
      description: 'Automate routine tasks to save time and focus on what matters – serving your clients.'
    }
  ]

  return (
    <section className="section">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-secondary-900 mb-4">Powerful Features for Law Firms</h2>
          <p className="text-secondary-600 max-w-3xl mx-auto text-lg">
            Our comprehensive tech solutions help law firms streamline operations,
            enhance client services, and grow their practice
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl border border-secondary-200 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center"
            >
              {feature.icon}
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-secondary-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features