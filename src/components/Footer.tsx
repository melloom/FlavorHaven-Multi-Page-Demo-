import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Github, Twitter, Linkedin, Mail, Phone, MapPin, Clock, X } from 'lucide-react'

const Footer = () => {
  const [showDemoModal, setShowDemoModal] = useState<string | null>(null)
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ]

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Menu', href: '/menu' },
    { name: 'About', href: '/about' },
    { name: 'Reservations', href: '/reservations' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <footer className="bg-black border-t border-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Restaurant Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center mb-6 group">
              <div className="relative">
                <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-xl group-hover:bg-yellow-400/30 transition-all duration-300"></div>
                <img src="/favicon_io (1)/favicon-32x32.png" alt="Flavor Haven" className="relative w-10 h-10 rounded-full border-2 border-yellow-400/30" />
              </div>
              <span className="ml-3 text-2xl font-light tracking-wide text-white group-hover:text-yellow-400 transition-colors duration-300">
                Flavor <span className="font-bold text-yellow-400">Haven</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md font-light leading-relaxed">
              Experience culinary perfection with our exquisite dining. Premium ingredients, artistic preparation, and unforgettable memories that define excellence.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <button
                    key={social.label}
                    onClick={() => setShowDemoModal('social')}
                    aria-label={social.label}
                    className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center border border-gray-800 hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-all duration-300 group"
                  >
                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors duration-300" />
                  </button>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-light tracking-wide text-yellow-400 mb-6 uppercase">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 font-light tracking-wide border-b border-transparent hover:border-yellow-400/30 pb-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Restaurant Info */}
          <div>
            <h3 className="text-lg font-light tracking-wide text-yellow-400 mb-6 uppercase">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center text-gray-400 group cursor-pointer" onClick={() => setShowDemoModal('phone')}>
                <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center border border-gray-800 group-hover:bg-yellow-400 group-hover:text-black transition-all duration-300 mr-4">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-medium text-white group-hover:text-yellow-400 transition-colors duration-300">Phone</div>
                  <div className="text-sm">+1 (555) 123-4567</div>
                </div>
              </div>
              <div className="flex items-center text-gray-400 group cursor-pointer" onClick={() => setShowDemoModal('email')}>
                <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center border border-gray-800 group-hover:bg-yellow-400 group-hover:text-black transition-all duration-300 mr-4">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-medium text-white group-hover:text-yellow-400 transition-colors duration-300">Email</div>
                  <div className="text-sm">hello@flavorhaven.com</div>
                </div>
              </div>
              <div className="flex items-center text-gray-400 group cursor-pointer" onClick={() => setShowDemoModal('location')}>
                <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center border border-gray-800 group-hover:bg-yellow-400 group-hover:text-black transition-all duration-300 mr-4">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-medium text-white group-hover:text-yellow-400 transition-colors duration-300">Location</div>
                  <div className="text-sm">123 Food Street, SF 94105</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm font-light">
              © {currentYear} Flavor Haven. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <button 
                className="px-6 py-2 bg-yellow-400 text-black font-bold tracking-wider uppercase rounded-none hover:bg-yellow-300 transition-all duration-300 text-sm"
                onClick={() => setShowDemoModal('request')}
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
          <div className="bg-black border border-gray-800 max-w-md w-full shadow-2xl transform transition-all duration-300 ease-out"
               onClick={(e) => e.stopPropagation()}>
            <div className="relative overflow-hidden">
              {/* Modal Header */}
              <div className="bg-linear-to-r from-yellow-400 to-yellow-500 p-6 text-black relative">
                <button className="absolute top-3 right-3 w-8 h-8 bg-black/10 hover:bg-black/20 rounded-full flex items-center justify-center transition-all duration-200"
                        onClick={() => setShowDemoModal(null)}>
                  <X className="w-4 h-4 text-black" />
                </button>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-black/10 rounded-full flex items-center justify-center">
                    {showDemoModal === 'social' && <Linkedin className="w-6 h-6 text-black" />}
                    {showDemoModal === 'phone' && <Phone className="w-6 h-6 text-black" />}
                    {showDemoModal === 'email' && <Mail className="w-6 h-6 text-black" />}
                    {showDemoModal === 'location' && <MapPin className="w-6 h-6 text-black" />}
                    {showDemoModal === 'request' && <Clock className="w-6 h-6 text-black" />}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold mb-1 tracking-wide">Flavor Haven</h2>
                    <p className="text-black/80 font-light text-sm">Premium Dining Experience</p>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-6">
                {showDemoModal === 'social' ? (
                  <>
                    <div className="text-center space-y-4">
                      <div className="space-y-3">
                        <h3 className="text-xl font-light text-white tracking-wide">Social Media</h3>
                        <p className="text-gray-400 leading-relaxed font-light text-sm">
                          This is a demonstration of our social media presence with daily updates and exclusive content.
                        </p>
                      </div>
                      
                      <div className="bg-gray-900/50 border border-gray-800 rounded-none p-5">
                        <h4 className="font-bold text-yellow-400 mb-3 tracking-wider text-sm">Connect With Us</h4>
                        <div className="space-y-2 text-gray-300 text-sm">
                          <div className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                            <span>Daily specials & updates</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                            <span>Behind-the-scenes content</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                            <span>Event announcements</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : showDemoModal === 'phone' ? (
                  <>
                    <div className="text-center space-y-4">
                      <div className="space-y-3">
                        <h3 className="text-xl font-light text-white tracking-wide">Contact Phone</h3>
                        <p className="text-gray-400 leading-relaxed font-light text-sm">
                          This is a demonstration of our phone contact system for direct reservation booking.
                        </p>
                      </div>
                      
                      <div className="bg-gray-900/50 border border-gray-800 rounded-none p-5">
                        <h4 className="font-bold text-yellow-400 mb-3 tracking-wider text-sm">Reservation Line</h4>
                        <div className="space-y-2 text-gray-300 text-sm">
                          <div className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                            <span>Direct reservation booking</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                            <span>Special event inquiries</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                            <span>Private dining arrangements</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : showDemoModal === 'email' ? (
                  <>
                    <div className="text-center space-y-4">
                      <div className="space-y-3">
                        <h3 className="text-xl font-light text-white tracking-wide">Email Contact</h3>
                        <p className="text-gray-400 leading-relaxed font-light text-sm">
                          This is a demonstration of our email contact system for inquiries and event planning.
                        </p>
                      </div>
                      
                      <div className="bg-gray-900/50 border border-gray-800 rounded-none p-5">
                        <h4 className="font-bold text-yellow-400 mb-3 tracking-wider text-sm">Email Services</h4>
                        <div className="space-y-2 text-gray-300 text-sm">
                          <div className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                            <span>Reservation inquiries</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                            <span>Private event planning</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                            <span>General questions</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : showDemoModal === 'location' ? (
                  <>
                    <div className="text-center space-y-4">
                      <div className="space-y-3">
                        <h3 className="text-xl font-light text-white tracking-wide">Restaurant Location</h3>
                        <p className="text-gray-400 leading-relaxed font-light text-sm">
                          This is a demonstration of our location information with interactive directions.
                        </p>
                      </div>
                      
                      <div className="bg-gray-900/50 border border-gray-800 rounded-none p-5">
                        <h4 className="font-bold text-yellow-400 mb-3 tracking-wider text-sm">Location Services</h4>
                        <div className="space-y-2 text-gray-300 text-sm">
                          <div className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                            <span>Interactive map directions</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                            <span>Parking information</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                            <span>Public transit directions</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="text-center space-y-4">
                      <div className="space-y-3">
                        <h3 className="text-xl font-light text-white tracking-wide">Reservation Request</h3>
                        <p className="text-gray-400 leading-relaxed font-light text-sm">
                          This is a demonstration of our exclusive reservation system with precision and care.
                        </p>
                      </div>
                      
                      <div className="bg-gray-900/50 border border-gray-800 rounded-none p-5">
                        <h4 className="font-bold text-yellow-400 mb-3 tracking-wider text-sm">Exclusive Features</h4>
                        <div className="space-y-2 text-gray-300 text-sm">
                          <div className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                            <span>Real-time table availability</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                            <span>Private dining room options</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                            <span>Wine pairing consultations</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                <div className="pt-4 border-t border-gray-800">
                  <button className="w-full bg-yellow-400 text-black py-3 px-6 font-bold hover:bg-yellow-300 transition-all duration-200 tracking-wider uppercase text-sm"
                          onClick={() => setShowDemoModal(null)}>
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </footer>
  )
}

export default Footer
