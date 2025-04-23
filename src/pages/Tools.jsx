import { useEffect, useState } from 'react'
import { FaSearch, FaCalculator, FaFileInvoice } from 'react-icons/fa'

function Tools() {
  useEffect(() => {
    document.title = 'Legal Tools - AreYouFiler'
    
    // Check if there's a hash in the URL and activate that tab
    if (window.location.hash) {
      const tabId = window.location.hash.substring(1)
      setActiveTab(tabId)
    }
  }, [])

  const [activeTab, setActiveTab] = useState('ntn')
  
  // NTN Status Check
  const [ntnNumber, setNtnNumber] = useState('')
  const [ntnResult, setNtnResult] = useState(null)
  
  // Sales Tax Calculator
  const [amount, setAmount] = useState('')
  const [taxRate, setTaxRate] = useState('17')
  const [salesTaxResult, setSalesTaxResult] = useState(null)
  
  // Income Tax Calculator
  const [income, setIncome] = useState('')
  const [incomeType, setIncomeType] = useState('salaried')
  const [incomeTaxResult, setIncomeTaxResult] = useState(null)
  
  const handleNtnCheck = (e) => {
    e.preventDefault()
    
    // In a real app, this would call an API to verify the NTN
    // For demo purposes, we'll simulate a response
    
    if (ntnNumber.length < 7) {
      setNtnResult({
        status: 'error',
        message: 'Invalid NTN format. Please enter a valid NTN number.'
      })
      return
    }
    
    // Simulate different responses based on input
    if (ntnNumber === '1234567') {
      setNtnResult({
        status: 'active',
        ntn: ntnNumber,
        name: 'ABC Company (Pvt) Ltd',
        registrationDate: '15-Jun-2015',
        status: 'Active',
        type: 'Company',
        address: 'Office #123, ABC Plaza, Blue Area, Islamabad'
      })
    } else if (ntnNumber === '7654321') {
      setNtnResult({
        status: 'inactive',
        ntn: ntnNumber,
        name: 'XYZ Enterprises',
        registrationDate: '20-Mar-2018',
        status: 'Inactive',
        type: 'Sole Proprietor',
        address: 'Shop #45, XYZ Market, Karachi'
      })
    } else {
      setNtnResult({
        status: 'not_found',
        message: 'No record found for the provided NTN.'
      })
    }
  }
  
  const handleSalesTaxCalculation = (e) => {
    e.preventDefault()
    
    if (!amount || isNaN(amount) || amount <= 0) {
      setSalesTaxResult({
        status: 'error',
        message: 'Please enter a valid amount'
      })
      return
    }
    
    const amountValue = parseFloat(amount)
    const taxRateValue = parseFloat(taxRate)
    
    const taxAmount = (amountValue * taxRateValue) / 100
    const totalAmount = amountValue + taxAmount
    
    setSalesTaxResult({
      status: 'success',
      baseAmount: amountValue.toFixed(2),
      taxRate: taxRateValue,
      taxAmount: taxAmount.toFixed(2),
      totalAmount: totalAmount.toFixed(2)
    })
  }
  
  const handleIncomeTaxCalculation = (e) => {
    e.preventDefault()
    
    if (!income || isNaN(income) || income <= 0) {
      setIncomeTaxResult({
        status: 'error',
        message: 'Please enter a valid income amount'
      })
      return
    }
    
    const incomeValue = parseFloat(income)
    let taxAmount = 0
    let taxRate = 0
    
    // Simplified tax calculation based on 2022 rates
    // In a real app, this would be more detailed and up-to-date
    
    if (incomeType === 'salaried') {
      if (incomeValue <= 600000) {
        taxAmount = 0
        taxRate = 0
      } else if (incomeValue <= 1200000) {
        taxAmount = (incomeValue - 600000) * 0.05
        taxRate = 5
      } else if (incomeValue <= 2400000) {
        taxAmount = 30000 + (incomeValue - 1200000) * 0.10
        taxRate = 10
      } else if (incomeValue <= 3600000) {
        taxAmount = 150000 + (incomeValue - 2400000) * 0.15
        taxRate = 15
      } else if (incomeValue <= 6000000) {
        taxAmount = 330000 + (incomeValue - 3600000) * 0.20
        taxRate = 20
      } else {
        taxAmount = 810000 + (incomeValue - 6000000) * 0.25
        taxRate = 25
      }
    } else { // business
      if (incomeValue <= 400000) {
        taxAmount = 0
        taxRate = 0
      } else if (incomeValue <= 600000) {
        taxAmount = (incomeValue - 400000) * 0.05
        taxRate = 5
      } else if (incomeValue <= 1200000) {
        taxAmount = 10000 + (incomeValue - 600000) * 0.10
        taxRate = 10
      } else if (incomeValue <= 2400000) {
        taxAmount = 70000 + (incomeValue - 1200000) * 0.15
        taxRate = 15
      } else if (incomeValue <= 3600000) {
        taxAmount = 250000 + (incomeValue - 2400000) * 0.20
        taxRate = 20
      } else if (incomeValue <= 6000000) {
        taxAmount = 490000 + (incomeValue - 3600000) * 0.25
        taxRate = 25
      } else {
        taxAmount = 1090000 + (incomeValue - 6000000) * 0.30
        taxRate = 30
      }
    }
    
    setIncomeTaxResult({
      status: 'success',
      annualIncome: incomeValue.toFixed(2),
      taxAmount: taxAmount.toFixed(2),
      netIncome: (incomeValue - taxAmount).toFixed(2),
      effectiveTaxRate: ((taxAmount / incomeValue) * 100).toFixed(2) + '%',
      taxSlab: taxRate + '%'
    })
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-secondary-900 to-secondary-800 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-bold mb-6">Legal & Financial Tools</h1>
            <p className="text-xl text-secondary-200 mb-8">
              Specialized tools for Pakistani law firms and their clients
            </p>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="section -mt-16">
        <div className="container">
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* Tool Navigation */}
              <div className="md:w-1/4 bg-secondary-800 p-6">
                <h2 className="text-xl font-bold mb-6 text-white">Available Tools</h2>
                <div className="space-y-4">
                  <button
                    id="ntn"
                    className={`w-full text-left p-4 rounded-lg flex items-center transition-colors ${
                      activeTab === 'ntn' 
                        ? 'bg-primary-600 text-white' 
                        : 'text-secondary-300 hover:bg-secondary-700'
                    }`}
                    onClick={() => setActiveTab('ntn')}
                  >
                    <FaSearch className="text-xl mr-3" />
                    <span className="font-medium">NTN Status Check</span>
                  </button>
                  
                  <button
                    id="sales"
                    className={`w-full text-left p-4 rounded-lg flex items-center transition-colors ${
                      activeTab === 'sales' 
                        ? 'bg-primary-600 text-white' 
                        : 'text-secondary-300 hover:bg-secondary-700'
                    }`}
                    onClick={() => setActiveTab('sales')}
                  >
                    <FaCalculator className="text-xl mr-3" />
                    <span className="font-medium">Sales Tax Calculator</span>
                  </button>
                  
                  <button
                    id="income"
                    className={`w-full text-left p-4 rounded-lg flex items-center transition-colors ${
                      activeTab === 'income' 
                        ? 'bg-primary-600 text-white' 
                        : 'text-secondary-300 hover:bg-secondary-700'
                    }`}
                    onClick={() => setActiveTab('income')}
                  >
                    <FaFileInvoice className="text-xl mr-3" />
                    <span className="font-medium">Income Tax Calculator</span>
                  </button>
                </div>
              </div>
              
              {/* Tool Content */}
              <div className="md:w-3/4 p-8 text-secondary-900">
                {/* NTN Status Check */}
                {activeTab === 'ntn' && (
                  <div>
                    <h2 className="text-2xl font-bold mb-4">NTN Status Check</h2>
                    <p className="text-secondary-600 mb-6">
                      Check the status of any National Tax Number (NTN) registered with FBR Pakistan.
                    </p>
                    
                    <form onSubmit={handleNtnCheck} className="mb-8">
                      <div className="mb-6">
                        <label htmlFor="ntn" className="block text-sm font-medium text-secondary-700 mb-2">
                          Enter NTN Number
                        </label>
                        <div className="flex">
                          <input 
                            type="text" 
                            id="ntn"
                            placeholder="e.g., 1234567"
                            className="flex-grow p-3 border border-secondary-300 rounded-l-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                            value={ntnNumber}
                            onChange={(e) => setNtnNumber(e.target.value)}
                          />
                          <button 
                            type="submit" 
                            className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-r-md"
                          >
                            Check
                          </button>
                        </div>
                        <p className="mt-2 text-sm text-secondary-500">
                          For demo, try "1234567" (active) or "7654321" (inactive)
                        </p>
                      </div>
                    </form>
                    
                    {ntnResult && (
                      <div className={`p-6 rounded-lg mb-6 ${
                        ntnResult.status === 'error' || ntnResult.status === 'not_found'
                          ? 'bg-red-50 border border-red-200'
                          : ntnResult.status === 'active'
                          ? 'bg-green-50 border border-green-200'
                          : 'bg-yellow-50 border border-yellow-200'
                      }`}>
                        {ntnResult.status === 'error' || ntnResult.status === 'not_found' ? (
                          <div>
                            <h3 className="text-lg font-bold text-red-700 mb-2">
                              {ntnResult.status === 'error' ? 'Error' : 'Not Found'}
                            </h3>
                            <p className="text-red-600">{ntnResult.message}</p>
                          </div>
                        ) : (
                          <div>
                            <h3 className="text-lg font-bold mb-4">
                              <span className={ntnResult.status === 'active' ? 'text-green-700' : 'text-yellow-700'}>
                                NTN Details
                              </span>
                            </h3>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <p className="text-sm text-secondary-500 mb-1">NTN Number</p>
                                <p className="font-medium">{ntnResult.ntn}</p>
                              </div>
                              <div>
                                <p className="text-sm text-secondary-500 mb-1">Status</p>
                                <p className={`font-medium ${
                                  ntnResult.status === 'active' ? 'text-green-600' : 'text-red-600'
                                }`}>
                                  {ntnResult.status.charAt(0).toUpperCase() + ntnResult.status.slice(1)}
                                </p>
                              </div>
                              <div>
                                <p className="text-sm text-secondary-500 mb-1">Name</p>
                                <p className="font-medium">{ntnResult.name}</p>
                              </div>
                              <div>
                                <p className="text-sm text-secondary-500 mb-1">Registration Date</p>
                                <p className="font-medium">{ntnResult.registrationDate}</p>
                              </div>
                              <div>
                                <p className="text-sm text-secondary-500 mb-1">Type</p>
                                <p className="font-medium">{ntnResult.type}</p>
                              </div>
                            </div>
                            
                            <div className="mt-4">
                              <p className="text-sm text-secondary-500 mb-1">Address</p>
                              <p>{ntnResult.address}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                    
                    <div className="bg-secondary-50 rounded-lg p-6">
                      <h3 className="text-lg font-bold mb-3">About This Tool</h3>
                      <p className="text-secondary-600 mb-4">
                        This tool allows you to verify the status of an NTN (National Tax Number) in Pakistan. 
                        It's useful for law firms to verify client information or for businesses conducting due diligence.
                      </p>
                      <div className="text-sm text-secondary-500">
                        <p>Note: This is a simulated tool. In a production environment, this would connect to FBR's API.</p>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Sales Tax Calculator */}
                {activeTab === 'sales' && (
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Sales Tax Calculator</h2>
                    <p className="text-secondary-600 mb-6">
                      Calculate sales tax for goods and services based on current FBR rates.
                    </p>
                    
                    <form onSubmit={handleSalesTaxCalculation} className="mb-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label htmlFor="amount" className="block text-sm font-medium text-secondary-700 mb-2">
                            Amount (PKR)
                          </label>
                          <input 
                            type="number" 
                            id="amount"
                            min="0"
                            step="0.01"
                            placeholder="e.g., 10000"
                            className="w-full p-3 border border-secondary-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="taxRate" className="block text-sm font-medium text-secondary-700 mb-2">
                            Tax Rate (%)
                          </label>
                          <select 
                            id="taxRate"
                            className="w-full p-3 border border-secondary-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                            value={taxRate}
                            onChange={(e) => setTaxRate(e.target.value)}
                          >
                            <option value="17">Standard Rate (17%)</option>
                            <option value="8.5">Reduced Rate (8.5%)</option>
                            <option value="10">Special Rate (10%)</option>
                            <option value="3">Export Rate (3%)</option>
                            <option value="0">Zero Rate (0%)</option>
                          </select>
                        </div>
                      </div>
                      
                      <button 
                        type="submit" 
                        className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-md"
                      >
                        Calculate
                      </button>
                    </form>
                    
                    {salesTaxResult && (
                      <div className={`p-6 rounded-lg mb-6 ${
                        salesTaxResult.status === 'error'
                          ? 'bg-red-50 border border-red-200'
                          : 'bg-green-50 border border-green-200'
                      }`}>
                        {salesTaxResult.status === 'error' ? (
                          <div>
                            <h3 className="text-lg font-bold text-red-700 mb-2">Error</h3>
                            <p className="text-red-600">{salesTaxResult.message}</p>
                          </div>
                        ) : (
                          <div>
                            <h3 className="text-lg font-bold text-green-700 mb-4">
                              Sales Tax Calculation
                            </h3>
                            
                            <div className="space-y-4">
                              <div className="flex justify-between py-2 border-b border-green-200">
                                <span className="font-medium">Base Amount:</span>
                                <span>Rs. {salesTaxResult.baseAmount}</span>
                              </div>
                              <div className="flex justify-between py-2 border-b border-green-200">
                                <span className="font-medium">Tax Rate:</span>
                                <span>{salesTaxResult.taxRate}%</span>
                              </div>
                              <div className="flex justify-between py-2 border-b border-green-200">
                                <span className="font-medium">Tax Amount:</span>
                                <span>Rs. {salesTaxResult.taxAmount}</span>
                              </div>
                              <div className="flex justify-between py-2 font-bold text-lg">
                                <span>Total Amount:</span>
                                <span>Rs. {salesTaxResult.totalAmount}</span>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                    
                    <div className="bg-secondary-50 rounded-lg p-6">
                      <h3 className="text-lg font-bold mb-3">About This Tool</h3>
                      <p className="text-secondary-600 mb-4">
                        The Sales Tax Calculator helps you determine the exact amount of sales tax applicable to goods and services in Pakistan.
                        This is particularly useful for businesses and individuals to understand their tax obligations.
                      </p>
                      <div className="text-sm text-secondary-500">
                        <p>Note: Tax rates are subject to change. Always verify current rates with FBR.</p>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Income Tax Calculator */}
                {activeTab === 'income' && (
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Income Tax Calculator</h2>
                    <p className="text-secondary-600 mb-6">
                      Calculate income tax liability based on current FBR tax slabs and rules.
                    </p>
                    
                    <form onSubmit={handleIncomeTaxCalculation} className="mb-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label htmlFor="income" className="block text-sm font-medium text-secondary-700 mb-2">
                            Annual Income (PKR)
                          </label>
                          <input 
                            type="number" 
                            id="income"
                            min="0"
                            step="1"
                            placeholder="e.g., 1200000"
                            className="w-full p-3 border border-secondary-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                            value={income}
                            onChange={(e) => setIncome(e.target.value)}
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="incomeType" className="block text-sm font-medium text-secondary-700 mb-2">
                            Income Type
                          </label>
                          <select 
                            id="incomeType"
                            className="w-full p-3 border border-secondary-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                            value={incomeType}
                            onChange={(e) => setIncomeType(e.target.value)}
                          >
                            <option value="salaried">Salaried Individual</option>
                            <option value="business">Business Income</option>
                          </select>
                        </div>
                      </div>
                      
                      <button 
                        type="submit" 
                        className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-md"
                      >
                        Calculate
                      </button>
                    </form>
                    
                    {incomeTaxResult && (
                      <div className={`p-6 rounded-lg mb-6 ${
                        incomeTaxResult.status === 'error'
                          ? 'bg-red-50 border border-red-200'
                          : 'bg-green-50 border border-green-200'
                      }`}>
                        {incomeTaxResult.status === 'error' ? (
                          <div>
                            <h3 className="text-lg font-bold text-red-700 mb-2">Error</h3>
                            <p className="text-red-600">{incomeTaxResult.message}</p>
                          </div>
                        ) : (
                          <div>
                            <h3 className="text-lg font-bold text-green-700 mb-4">
                              Income Tax Calculation
                            </h3>
                            
                            <div className="space-y-4">
                              <div className="flex justify-between py-2 border-b border-green-200">
                                <span className="font-medium">Annual Income:</span>
                                <span>Rs. {incomeTaxResult.annualIncome}</span>
                              </div>
                              <div className="flex justify-between py-2 border-b border-green-200">
                                <span className="font-medium">Tax Slab:</span>
                                <span>{incomeTaxResult.taxSlab}</span>
                              </div>
                              <div className="flex justify-between py-2 border-b border-green-200">
                                <span className="font-medium">Tax Amount:</span>
                                <span>Rs. {incomeTaxResult.taxAmount}</span>
                              </div>
                              <div className="flex justify-between py-2 border-b border-green-200">
                                <span className="font-medium">Effective Tax Rate:</span>
                                <span>{incomeTaxResult.effectiveTaxRate}</span>
                              </div>
                              <div className="flex justify-between py-2 font-bold text-lg">
                                <span>Net Income After Tax:</span>
                                <span>Rs. {incomeTaxResult.netIncome}</span>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                    
                    <div className="bg-secondary-50 rounded-lg p-6">
                      <h3 className="text-lg font-bold mb-3">About This Tool</h3>
                      <p className="text-secondary-600 mb-4">
                        The Income Tax Calculator helps individuals and businesses estimate their income tax liability based on current FBR tax slabs.
                        This tool provides a simplified calculation and should be used for estimation purposes only.
                      </p>
                      <div className="text-sm text-secondary-500">
                        <p>Note: This calculator uses simplified tax slabs and does not account for all deductions, credits, or special provisions. For accurate tax calculations, consult a tax professional.</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-xl overflow-hidden shadow-xl">
            <div className="p-8 md:p-12 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Looking for More Tools?</h2>
              <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
                Law firms that sign up for our platform get access to advanced versions of these tools plus many more specialized features.
              </p>
              <a 
                href="/pricing" 
                className="inline-block bg-white text-primary-700 hover:bg-primary-50 font-medium px-8 py-3 rounded-lg transition-colors"
              >
                Explore Pricing Plans
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Tools