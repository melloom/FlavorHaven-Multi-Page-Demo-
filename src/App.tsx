import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Header from './components/Header.tsx'
import Footer from './components/Footer.tsx'
import { PWAUpdateBanner } from './components/PWAUpdateBanner.tsx'
import Home from './pages/Home.tsx'
import About from './pages/About.tsx'
import Menu from './pages/Menu.tsx'
import Reservations from './pages/Reservations.tsx'
import Contact from './pages/Contact.tsx'
import './App.css'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        duration: 0.4,
        ease: [0.4, 0.0, 0.2, 1]
      }}
      className="min-h-screen"
    >
      {children}
    </motion.div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-gray-50">
        <div className="safe-area-fill"></div>
        <Header />
        <main className="relative">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={
                <PageWrapper>
                  <Home />
                </PageWrapper>
              } />
              <Route path="/about" element={
                <PageWrapper>
                  <About />
                </PageWrapper>
              } />
              <Route path="/menu" element={
                <PageWrapper>
                  <Menu />
                </PageWrapper>
              } />
              <Route path="/reservations" element={
                <PageWrapper>
                  <Reservations />
                </PageWrapper>
              } />
              <Route path="/contact" element={
                <PageWrapper>
                  <Contact />
                </PageWrapper>
              } />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
        <PWAUpdateBanner />
      </div>
    </BrowserRouter>
  )
}

export default App
