import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Home, Utensils, Phone, Clock, Info, Star, MapPin, ExternalLink } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showDemoModal, setShowDemoModal] = useState<string | null>(null)
  const location = useLocation()

  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Menu', href: '/menu', icon: Utensils },
    { name: 'About', href: '/about', icon: Info },
    { name: 'Reservations', href: '/reservations', icon: Clock },
    { name: 'Contact', href: '/contact', icon: Phone },
    { name: 'Rosie Kitchen', href: 'https://rosiekitchen.netlify.app', icon: ExternalLink, external: true },
    { name: "Tony's Pizza Shack", href: 'https://pizzashopdemos.netlify.app/', icon: ExternalLink, external: true },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <header className="bg-black border-b border-gray-900 sticky z-50" style={{ 
      top: 'env(safe-area-inset-top, 0px)'
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 relative">
          {/* Logo */}
          <Link to="/" className="flex items-center group relative z-10">
            <div className="relative">
              <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-xl group-hover:bg-yellow-400/30 transition-all duration-300"></div>
              <img src="/favicon_io (1)/favicon-32x32.png" alt="Flavor Haven" className="relative w-10 h-10 rounded-full border-2 border-yellow-400/30" />
            </div>
            <span className="ml-3 text-2xl font-light tracking-wide text-white group-hover:text-yellow-400 transition-colors duration-300">
              Flavor <span className="font-bold text-yellow-400">Haven</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center px-4 py-3 text-sm font-light tracking-wide transition-all duration-300 border-b-2 ${
                    isActive(item.href)
                      ? 'text-yellow-400 border-yellow-400'
                      : 'text-gray-400 border-transparent hover:text-yellow-400 hover:border-yellow-400/30'
                  }`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {item.name}
                </Link>
              )
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button 
              className="px-8 py-3 bg-yellow-400 text-black font-bold tracking-wider uppercase rounded-none hover:bg-yellow-300 transition-all duration-300 text-sm"
              onClick={() => setShowDemoModal('request')}
            >
              Reserve Table
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-4 rounded-lg text-gray-400 hover:text-yellow-400 hover:bg-yellow-400/10 transition-all duration-300 border border-gray-800 hover:border-yellow-400/30 relative z-20 flex items-center justify-center"
            style={{ 
              touchAction: 'manipulation',
              marginRight: 'env(safe-area-inset-right, 0px)'
            }}
          >
            {isMenuOpen ? <X className="w-6 h-6 shrink-0" /> : <Menu className="w-6 h-6 shrink-0" />}
          </button>
        </div>

        {/* Mobile Sidebar Overlay */}
        <div 
          className={`lg:hidden fixed inset-0 z-50 flex justify-end transition-opacity duration-300 ${
            isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setIsMenuOpen(false)}
        >
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/80 backdrop-blur-lg transition-opacity" />
          
          {/* Sidebar */}
          <div 
            className="relative flex flex-col w-80 bg-black border-l border-gray-800 transform transition-transform duration-300 ease-out z-10 safe-area-right"
            style={{
              transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)',
              touchAction: 'pan-y',
              paddingTop: 'calc(env(safe-area-inset-top, 0px) + 16px)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
              {/* Sidebar Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-800">
                <div className="flex items-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-xl"></div>
                    <img src="/favicon_io (1)/favicon-32x32.png" alt="Flavor Haven" className="relative w-10 h-10 rounded-full border-2 border-yellow-400/30" />
                  </div>
                  <span className="ml-3 text-xl font-light tracking-wide text-white">
                    Flavor <span className="font-bold text-yellow-400">Haven</span>
                  </span>
                </div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-3 rounded-lg text-gray-400 hover:text-yellow-400 hover:bg-yellow-400/10 transition-all duration-300 border border-gray-800 hover:border-yellow-400/30"
                  style={{ touchAction: 'manipulation' }}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              {/* Sidebar Navigation */}
              <nav className="flex-1 px-6 py-6 space-y-2">
                {navigation.map((item) => {
                  const Icon = item.icon
                  if (item.external) {
                    return (
                      <a
                        key={item.name}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center px-4 py-4 text-base font-light tracking-wide rounded-lg transition-all duration-300 text-gray-400 hover:text-yellow-400 hover:bg-yellow-400/10 border border-transparent hover:border-yellow-400/30"
                        style={{ touchAction: 'manipulation' }}
                      >
                        <Icon className="w-5 h-5 mr-4" />
                        {item.name}
                      </a>
                    )
                  }
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`flex items-center px-4 py-4 text-base font-light tracking-wide rounded-lg transition-all duration-300 border ${
                        isActive(item.href)
                          ? 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30'
                          : 'text-gray-400 hover:text-yellow-400 hover:bg-yellow-400/10 border-transparent hover:border-yellow-400/30'
                      }`}
                      style={{ touchAction: 'manipulation' }}
                    >
                      <Icon className="w-5 h-5 mr-4" />
                      {item.name}
                    </Link>
                  )
                })}
              </nav>
              
              {/* Sidebar CTA */}
              <div className="p-6 border-t border-gray-800 safe-area-bottom">
                <button 
                  className="w-full px-6 py-4 bg-yellow-400 text-black font-bold tracking-wider uppercase rounded-none hover:bg-yellow-300 transition-all duration-300"
                  onClick={() => setShowDemoModal('request')}
                  style={{ touchAction: 'manipulation' }}
                >
                  Reserve Table
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Demo Modal */}
        {showDemoModal && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-lg z-50 flex items-center justify-center p-4"
               onClick={() => setShowDemoModal(null)}>
            <div className="bg-black border border-gray-800 max-w-lg w-full shadow-2xl transform transition-all duration-300 ease-out"
                 onClick={(e) => e.stopPropagation()}>
              <div className="relative overflow-hidden">
                {/* Modal Header */}
                <div className="bg-linear-to-r from-yellow-400 to-yellow-500 p-8 text-black relative">
                  <button className="absolute top-4 right-4 w-10 h-10 bg-black/10 hover:bg-black/20 rounded-full flex items-center justify-center transition-all duration-200"
                          onClick={() => setShowDemoModal(null)}>
                    <X className="w-5 h-5 text-black" />
                  </button>
                  <div className="flex items-center space-x-6">
                    <div className="w-16 h-16 bg-black/10 rounded-full flex items-center justify-center">
                      {showDemoModal === 'request' && <Clock className="w-8 h-8 text-black" />}
                      {showDemoModal === 'submit' && <Star className="w-8 h-8 text-black" />}
                      {showDemoModal === 'directions' && <MapPin className="w-8 h-8 text-black" />}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold mb-2 tracking-wide">Flavor Haven</h2>
                      <p className="text-black/80 font-light">Premium Dining Experience</p>
                    </div>
                  </div>
                </div>

                <div className="p-8 space-y-8">
                  {showDemoModal === 'request' ? (
                    <>
                      <div className="text-center space-y-6">
                        <div className="space-y-4">
                          <h3 className="text-2xl font-light text-white tracking-wide">Reservation Request</h3>
                          <p className="text-gray-400 leading-relaxed font-light">
                            This is a demonstration of our exclusive reservation system. In a complete implementation, your request would be processed with the precision and care that defines Flavor Haven.
                          </p>
                        </div>
                        
                        <div className="bg-gray-900/50 border border-gray-800 rounded-none p-8">
                          <h4 className="font-bold text-yellow-400 mb-6 tracking-wider">Exclusive Features</h4>
                          <div className="space-y-4 text-gray-300">
                            <div className="flex items-center space-x-3">
                              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                              <span>Real-time table availability</span>
                            </div>
                            <div className="flex items-center space-x-3">
                              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                              <span>Private dining room & chef's table options</span>
                            </div>
                            <div className="flex items-center space-x-3">
                              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                              <span>Wine pairing & sommelier consultations</span>
                            </div>
                            <div className="flex items-center space-x-3">
                              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                              <span>Dietary accommodations & special occasions</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : null}

                  <div className="pt-8 border-t border-gray-800">
                    <button className="w-full bg-yellow-400 text-black py-4 px-8 font-bold hover:bg-yellow-300 transition-all duration-200 tracking-wider uppercase"
                            onClick={() => setShowDemoModal(null)}>
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
    </header>
  )
}

export default Header
