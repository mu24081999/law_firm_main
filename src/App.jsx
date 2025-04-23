import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Pricing from './pages/Pricing'
import LawFirms from './pages/LawFirms'
import LawFirmProfile from './pages/LawFirmProfile'
import Tools from './pages/Tools'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="lawfirms" element={<LawFirms />} />
          <Route path="lawfirms/:id" element={<LawFirmProfile />} />
          <Route path="tools" element={<Tools />} />
        </Route>
      </Routes>
    </>
  )
}

export default App