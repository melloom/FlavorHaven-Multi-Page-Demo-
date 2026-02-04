import { Link } from 'react-router-dom'
import { ArrowRight, X, Star, ChefHat, Award, Sparkles, Utensils } from 'lucide-react'
import { useState } from 'react'
import SEO from '../components/SEO'

const Home = () => {
  const [showDemoModal, setShowDemoModal] = useState<string | null>(null)

  return (
    <>
      <SEO 
        title="Flavor Haven - Premium Fine Dining Experience"
        description="Experience culinary excellence at Flavor Haven, where exceptional ingredients meet artistic preparation. Premium fine dining with unforgettable taste experiences."
        keywords="fine dining, flavor haven, premium restaurant, culinary excellence, gourmet cuisine, luxury dining, exceptional taste"
        image="/og-home.jpg"
        url="https://flavorhaven.com"
      />
      
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative h-screen overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <div className="w-full h-full bg-cover bg-center bg-no-repeat" 
                 style={{
                      backgroundImage: "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
                 }}>
              <div className="absolute inset-0 bg-linear-to-r from-black/95 via-black/70 to-black/95"></div>
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-transparent to-black/30"></div>
            </div>
          </div>
          
          {/* Content */}
          <div className="relative h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="space-y-12">
                {/* Michelin Stars */}
                <div className="flex items-center space-x-2">
                  {[1, 2, 3].map((star) => (
                    <Star key={star} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-4 text-yellow-400 font-semibold tracking-wider uppercase text-sm">Michelin Guide</span>
                </div>
                
                <h1 className="text-5xl md:text-8xl font-light leading-tight tracking-tight">
                  Flavor <span className="font-bold text-yellow-400">Haven</span>
                </h1>
                
                <p className="text-xl md:text-3xl text-gray-300 max-w-3xl font-light leading-relaxed">
                  Where culinary artistry meets perfection. An unforgettable journey through taste, 
                  crafted with passion and precision.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6">
                  <button
                    onClick={() => setShowDemoModal('menu')}
                    className="inline-flex items-center px-12 py-4 bg-yellow-400 text-black font-bold rounded-none hover:bg-yellow-300 transition-all duration-300 text-lg tracking-wider uppercase"
                  >
                    Explore Menu
                    <ArrowRight className="ml-3 w-6 h-6" />
                  </button>
                  <button
                    onClick={() => setShowDemoModal('reservation')}
                    className="inline-flex items-center px-12 py-4 border-2 border-white text-white font-bold rounded-none hover:bg-white hover:text-black transition-all duration-300 text-lg tracking-wider uppercase"
                  >
                    Reserve Table
                    <ArrowRight className="ml-3 w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Excellence Section */}
        <section className="py-16 bg-black border-t border-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-6xl font-light text-white mb-4 tracking-tight">
                The <span className="font-bold text-yellow-400">Haven</span> Standard
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
                Every dish tells a story of perfection, precision, and passion. 
                This is not just dining – this is an experience that defines excellence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-8">
                <div className="w-24 h-24 bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto border border-yellow-400/20">
                  <ChefHat className="w-10 h-10 text-yellow-400" />
                </div>
                <h3 className="text-xl font-light text-white tracking-wide">Master Craftsmanship</h3>
                <p className="text-gray-400 font-light leading-relaxed">
                  Each plate is a masterpiece, crafted with surgical precision and artistic vision 
                  that only decades of expertise can deliver.
                </p>
              </div>
              
              <div className="text-center space-y-8">
                <div className="w-24 h-24 bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto border border-yellow-400/20">
                  <Award className="w-10 h-10 text-yellow-400" />
                </div>
                <h3 className="text-xl font-light text-white tracking-wide">Three Star Excellence</h3>
                <p className="text-gray-400 font-light leading-relaxed">
                  The highest distinction in culinary arts, representing consistency, 
                  innovation, and unparalleled dining experiences.
                </p>
              </div>
              
              <div className="text-center space-y-8">
                <div className="w-24 h-24 bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto border border-yellow-400/20">
                  <Sparkles className="w-10 h-10 text-yellow-400" />
                </div>
                <h3 className="text-xl font-light text-white tracking-wide">Exceptional Service</h3>
                <p className="text-gray-400 font-light leading-relaxed">
                  Impeccable attention to detail, intuitive service, and an atmosphere 
                  that elevates every moment of your dining journey.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-linear-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold text-yellow-400 mb-2 tracking-tight">3</div>
                <div className="text-gray-400 uppercase tracking-wider text-sm">Michelin Stars</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-yellow-400 mb-2 tracking-tight">25+</div>
                <div className="text-gray-400 uppercase tracking-wider text-sm">Years Perfect</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-yellow-400 mb-2 tracking-tight">50K</div>
                <div className="text-gray-400 uppercase tracking-wider text-sm">Guests Amazed</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-yellow-400 mb-2 tracking-tight">100%</div>
                <div className="text-gray-400 uppercase tracking-wider text-sm">Perfection</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-8 bg-yellow-400">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-4xl md:text-6xl font-bold text-black mb-4 tracking-tight">
              Ready for <span className="font-light">Perfection?</span>
            </h2>
              <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
              Join the exclusive circle of diners who have experienced the pinnacle 
              of culinary excellence. Your table awaits.
            </p>
            <Link
              to="/reservations"
              className="inline-flex items-center px-16 py-5 bg-black text-yellow-400 font-bold rounded-none hover:bg-gray-900 transition-all duration-300 text-lg tracking-wider uppercase"
            >
              Reserve Your Experience
              <ArrowRight className="ml-3 w-6 h-6" />
            </Link>
          </div>
        </section>

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
                      {showDemoModal === 'menu' ? <Utensils className="w-6 h-6 text-black" /> : <ChefHat className="w-6 h-6 text-black" />}
                    </div>
                    <div>
                      <h2 className="text-xl font-bold mb-1 tracking-wide">Flavor Haven</h2>
                      <p className="text-black/80 font-light text-sm">
                        {showDemoModal === 'menu' ? 'Culinary Menu Experience' : 'Premium Dining Experience'}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-6">
                  <div className="text-center space-y-4">
                    <div className="space-y-3">
                      <h3 className="text-xl font-light text-white tracking-wide">
                        {showDemoModal === 'menu' ? 'Menu Tasting Experience' : 'Reservation System'}
                      </h3>
                      <p className="text-gray-400 leading-relaxed font-light text-sm">
                        {showDemoModal === 'menu' 
                          ? 'This is a demonstration of our exquisite menu selection with curated dishes and seasonal specialties.'
                          : 'This is a demonstration of our exclusive reservation system with precision and care that defines Flavor Haven.'
                        }
                      </p>
                    </div>
                    
                    <div className="bg-gray-900/50 border border-gray-800 rounded-none p-5">
                      <h4 className="font-bold text-yellow-400 mb-3 tracking-wider text-sm">
                        {showDemoModal === 'menu' ? 'Menu Highlights' : 'Exclusive Features'}
                      </h4>
                      <div className="space-y-2 text-gray-300 text-sm">
                        {showDemoModal === 'menu' ? (
                          <>
                            <div className="flex items-center space-x-2">
                              <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                              <span>Seasonal tasting menus with wine pairings</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                              <span>Chef's table exclusive experiences</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                              <span>Dietary accommodations & allergies</span>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="flex items-center space-x-2">
                              <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                              <span>Real-time table availability</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                              <span>Private dining room & chef's table options</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                              <span>Wine pairing & sommelier consultations</span>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

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
      </div>
    </>
  )
}

export default Home
