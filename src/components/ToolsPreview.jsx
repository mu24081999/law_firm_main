import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaCalculator, FaSearch, FaFileInvoiceDollar } from 'react-icons/fa'

function ToolsPreview() {
  const [activeTab, setActiveTab] = useState('ntn')
  
  const tools = [
    {
      id: 'ntn',
      name: 'NTN Status Check',
      icon: <FaSearch className="text-3xl" />,
      description: 'Verify NTN status of any individual or company registered with FBR Pakistan.',
      preview: 'https://images.pexels.com/photos/6863175/pexels-photo-6863175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 'sales',
      name: 'Sales Tax Calculator',
      icon: <FaCalculator className="text-3xl" />,
      description: 'Calculate sales tax amounts based on current FBR rates for various products and services.',
      preview: 'https://images.pexels.com/photos/5849577/pexels-photo-5849577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 'income',
      name: 'Income Tax Calculator',
      icon: <FaFileInvoiceDollar className="text-3xl" />,
      description: 'Compute income tax liability for individuals and businesses based on latest FBR regulations.',
      preview: 'https://images.pexels.com/photos/6693661/pexels-photo-6693661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ]
  
  const activeTool = tools.find(tool => tool.id === activeTab)

  return (
    <section className="section bg-gradient-to-br from-primary-900 to-primary-800 text-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="mb-4">Specialized Legal Tools</h2>
          <p className="text-primary-100 max-w-3xl mx-auto text-lg">
            Access powerful tools designed specifically for Pakistani law firms and their clients
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 bg-primary-800 p-6">
              <h3 className="text-xl font-bold mb-6 text-white">Available Tools</h3>
              <div className="space-y-4">
                {tools.map((tool) => (
                  <button
                    key={tool.id}
                    className={`w-full text-left p-4 rounded-lg flex items-center transition-colors ${
                      activeTab === tool.id 
                        ? 'bg-primary-600 text-white' 
                        : 'text-primary-100 hover:bg-primary-700'
                    }`}
                    onClick={() => setActiveTab(tool.id)}
                  >
                    <span className="mr-3">{tool.icon}</span>
                    <span className="font-medium">{tool.name}</span>
                  </button>
                ))}
              </div>
              <div className="mt-8">
                <Link to="/tools" className="inline-block w-full text-center bg-white text-primary-700 font-medium px-6 py-3 rounded-lg hover:bg-primary-50 transition-colors">
                  Explore All Tools
                </Link>
              </div>
            </div>
            
            <div className="md:w-2/3 p-8 text-secondary-900">
              <h3 className="text-2xl font-bold mb-4">{activeTool.name}</h3>
              <p className="text-secondary-600 mb-6">{activeTool.description}</p>
              
              <div className="mb-8">
                <img 
                  src={activeTool.preview} 
                  alt={activeTool.name} 
                  className="w-full h-80 object-cover rounded-lg shadow-md"
                />
              </div>
              
              <div className="flex justify-end">
                <Link 
                  to={`/tools#${activeTool.id}`} 
                  className="btn btn-primary"
                >
                  Use This Tool
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ToolsPreview