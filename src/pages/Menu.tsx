import { ChefHat, Flame, Sparkles, Wine, X, Calendar } from 'lucide-react'
import { useState } from 'react'

const Menu = () => {
  const [showDemoModal, setShowDemoModal] = useState<string | null>(null)

  const tastingMenu = [
    {
      course: 'Harvest',
      name: 'Charred Romanesco Mosaic',
      description: 'Black garlic caramel, preserved lemon, pistachio soil',
      wine: 'Sancerre, Domaine Vacheron 2021',
    },
    {
      course: 'Ocean',
      name: 'Bluefin Toro & Sea Urchin',
      description: 'Smoked ponzu, sudachi pearls, yuzu kosho oil',
      wine: 'Junmai Daiginjo “Dassai 39”',
    },
    {
      course: 'Fireside',
      name: 'A5 Wagyu & Coal-Roasted Beet',
      description: 'Shiso chimichurri, koji butter, fermented pepper jus',
      wine: 'Barolo, Vietti Rocche di Castiglione 2016',
    },
    {
      course: 'Finale',
      name: 'Valrhona Komuntu Sphere',
      description: 'Black sesame praline, miso caramel, smoked vanilla snow',
      wine: 'Tokaji Aszú 5 Puttonyos 2013',
    },
  ]

  const seasonalPlates = [
    {
      title: 'Heirloom Tomato Mille-Feuille',
      description: 'Stracciatella, basil oil, aged balsamic lace',
      price: '$32',
      highlight: 'Summer Garden',
    },
    {
      title: 'Glacier Bay Halibut',
      description: 'Charred leek velouté, saffron fondue, citrus ash',
      price: '$54',
      highlight: 'Chef Favorite',
    },
    {
      title: 'Porcini & Black Truffle Agnolotti',
      description: 'Parmesan espuma, burnt butter crumble, crispy sage',
      price: '$48',
      highlight: 'Limited Edition',
    },
  ]

  const experiences = [
    {
      icon: ChefHat,
      title: "Chef's Table",
      description: 'Twelve-course immersive tasting presented by our culinary team in the exhibition kitchen.',
      details: 'Available Wed–Sun · 7PM seating · $450 per guest',
    },
    {
      icon: Wine,
      title: 'Grand Cellar Pairing',
      description: 'Sommelier-led journey across rare vintages and bespoke infusion pairings.',
      details: 'Add-on · $195 per guest · 7 pours',
    },
    {
      icon: Sparkles,
      title: 'Midnight Dessert Salon',
      description: 'Progressive dessert flight served in the conservatory with live harp accompaniment.',
      details: 'Fridays & Saturdays · 10PM · $125 per guest',
    },
  ]

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[520px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80"
            alt="Chef plating"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-black via-black/70 to-transparent" />
        </div>
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white space-y-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur rounded-full text-sm uppercase tracking-[0.3em]">
              <Flame className="w-4 h-4" /> Culinary Artistry
            </span>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              SIGNATURE <span className="text-orange-500">MENU</span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-200 max-w-2xl">
              A tasting journey that celebrates terroir, technique, and the alchemy of fire and smoke.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                className="px-8 py-3 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-500 transition"
                onClick={() => setShowDemoModal('tasting')}
              >
                Book Tasting · $225
              </button>
              <button 
                className="px-8 py-3 border border-white/40 text-white rounded-lg font-semibold hover:bg-white hover:text-black transition"
                onClick={() => setShowDemoModal('download')}
              >
                Download Menu
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Tasting Menu */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-orange-500 uppercase tracking-[0.3em] text-xs mb-4">Five Movements</p>
            <h2 className="text-3xl md:text-4xl font-bold">Chef Laurent's Tasting</h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Composed daily to capture the rhythm of the season. Vegetarian symphony available upon request.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {tastingMenu.map((course) => (
              <div
                key={course.course}
                className="p-8 rounded-3xl border border-white/10 bg-linear-to-br from-white/5 to-transparent backdrop-blur"
              >
                <p className="text-xs uppercase tracking-[0.4em] text-gray-400 mb-4">{course.course}</p>
                <h3 className="text-2xl font-semibold mb-2">{course.name}</h3>
                <p className="text-gray-300 mb-6">{course.description}</p>
                <div className="flex items-center gap-3 text-sm text-orange-300">
                  <Wine className="w-4 h-4" />
                  {course.wine}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Plates */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-gray-500 mb-4">À La Carte</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Seasonal Plates</h2>
              <p className="text-lg text-gray-600 mb-10">
                Sourced from our regenerative farm partners across Napa Valley and the Sonoma Coast. Every ingredient is
                handled with reverence.
              </p>
              <div className="space-y-8">
                {seasonalPlates.map((plate) => (
                  <div key={plate.title} className="flex justify-between gap-6">
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-orange-500 mb-2">{plate.highlight}</p>
                      <h3 className="text-xl font-semibold text-gray-900">{plate.title}</h3>
                      <p className="text-gray-600">{plate.description}</p>
                    </div>
                    <span className="text-lg font-semibold text-gray-900 whitespace-nowrap">{plate.price}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-900 text-white rounded-3xl p-10 relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="w-64 h-64 bg-orange-500/60 rounded-full blur-3xl -top-10 -left-16 absolute" />
                <div className="w-64 h-64 bg-red-500/40 rounded-full blur-3xl bottom-0 right-0 absolute" />
              </div>
              <div className="relative space-y-6">
                <h3 className="text-2xl font-bold">Fire & Ember Grill</h3>
                <p className="text-gray-300">
                  Signature dishes born from our custom Josper charcoal oven. Mesquite, cherry wood, and binchotan coals
                  layer smoke and sweetness.
                </p>
                <ul className="space-y-4 text-gray-200">
                  {['Applewood-Smoked Foie Gras', 'Ember-Roasted Scallops', '36-Hour Short Rib', 'Charred King Oyster Mushrooms'].map(
                    (item) => (
                      <li key={item} className="flex items-center gap-3">
                        <Flame className="w-4 h-4 text-orange-400" /> {item}
                      </li>
                    ),
                  )}
                </ul>
                <div className="pt-4 border-t border-white/10">
                  <p className="text-sm uppercase tracking-[0.4em] text-orange-300 mb-2">Sommelier Notes</p>
                  <p className="text-gray-200">
                    Pair with smoky Syrah or volcanic Etna Rosso for lifted minerality and spice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experiences */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-12">
            <div className="cursor-pointer" onClick={() => setShowDemoModal('immersive')}>
              <p className="text-sm uppercase tracking-[0.4em] text-gray-500 mb-2">Beyond Dinner</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Immersive Experiences</h2>
            </div>
            <button className="px-6 py-3 border border-gray-900 text-gray-900 rounded-full font-semibold hover:bg-gray-900 hover:text-white transition">
              Concierge Service
            </button>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {experiences.map((experience) => {
              const Icon = experience.icon
              return (
                <div key={experience.title} className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-shadow">
                  <div className="w-14 h-14 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{experience.title}</h3>
                  <p className="text-gray-600 mb-4">{experience.description}</p>
                  <p className="text-sm text-gray-500">{experience.details}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-linear-to-r from-gray-900 via-black to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-orange-400 mb-3">Limited Seating</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Reserve Your Culinary Journey</h2>
            <p className="text-gray-300 max-w-2xl">
              48-hour notice for allergies and bespoke menus. Private dining salon seats up to 20 guests with dedicated
              service captains.
            </p>
          </div>
          <div className="flex gap-4">
            <button 
              className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition"
              onClick={() => setShowDemoModal('reserve')}
            >
              Reserve Table
            </button>
            <button 
              className="px-8 py-3 border border-white/40 text-white rounded-lg font-semibold hover:bg-white hover:text-black transition"
              onClick={() => setShowDemoModal('concierge')}
            >
              Call Concierge
            </button>
          </div>
        </div>
      </section>

      {/* Demo Modal */}
      {showDemoModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4"
             onClick={() => setShowDemoModal(null)}>
          <div className="bg-white rounded-3xl max-w-lg w-full shadow-2xl transform transition-all duration-300 ease-out border border-gray-100"
               onClick={(e) => e.stopPropagation()}>
            <div className="relative overflow-hidden rounded-3xl">
              {/* Modal Header with Gradient */}
              <div className="bg-linear-to-r from-gray-900 to-gray-800 p-6 text-white relative">
                <button className="absolute top-4 right-4 w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-200"
                        onClick={() => setShowDemoModal(null)}>
                  <X className="w-4 h-4 text-white" />
                </button>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    {showDemoModal === 'tasting' && <ChefHat className="w-6 h-6 text-white" />}
                    {showDemoModal === 'download' && <Sparkles className="w-6 h-6 text-white" />}
                    {showDemoModal === 'reserve' && <Calendar className="w-6 h-6 text-white" />}
                    {showDemoModal === 'concierge' && <Wine className="w-6 h-6 text-white" />}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold mb-1">Flavor Haven</h2>
                    <p className="text-gray-300 text-sm">Premium Dining Experience</p>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-6">
                {showDemoModal === 'tasting' ? (
                  <>
                    <div className="text-center space-y-6">
                      <div className="space-y-3">
                        <h3 className="text-xl font-semibold text-gray-900">Chef's Tasting Experience</h3>
                        <p className="text-gray-600 leading-relaxed">
                          This is a demonstration of our tasting menu reservation system. In a complete implementation, your request would be processed with our signature attention to detail.
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                        <h4 className="font-semibold text-gray-900 mb-3">Features</h4>
                        <div className="space-y-2 text-gray-700 text-sm">
                          <div className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-gray-900 rounded-full"></div>
                            <span>Real-time availability & confirmation</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-gray-900 rounded-full"></div>
                            <span>Personalized dietary preferences</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-gray-900 rounded-full"></div>
                            <span>Wine pairing arrangements</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : showDemoModal === 'download' ? (
                  <>
                    <div className="text-center space-y-6">
                      <div className="space-y-3">
                        <h3 className="text-xl font-semibold text-gray-900">Menu Download</h3>
                        <p className="text-gray-600 leading-relaxed">
                          This is a demonstration of our menu download system. In a complete implementation, you would receive our complete culinary portfolio.
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                        <h4 className="font-semibold text-gray-900 mb-3">Features</h4>
                        <div className="space-y-2 text-gray-700 text-sm">
                          <div className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-gray-900 rounded-full"></div>
                            <span>High-resolution PDF menu</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-gray-900 rounded-full"></div>
                            <span>Daily specials & seasonal updates</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-gray-900 rounded-full"></div>
                            <span>Allergen information included</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : showDemoModal === 'reserve' ? (
                  <>
                    <div className="text-center space-y-6">
                      <div className="space-y-3">
                        <h3 className="text-xl font-semibold text-gray-900">Table Reservation</h3>
                        <p className="text-gray-600 leading-relaxed">
                          This is a demonstration of our reservation system. In a complete implementation, your table booking would be processed with our signature attention to detail.
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                        <h4 className="font-semibold text-gray-900 mb-3">Features</h4>
                        <div className="space-y-2 text-gray-700 text-sm">
                          <div className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-gray-900 rounded-full"></div>
                            <span>Table preference selection</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-gray-900 rounded-full"></div>
                            <span>Date, time & party size</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-gray-900 rounded-full"></div>
                            <span>Special occasion notes</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : showDemoModal === 'immersive' ? (
                  <>
                    <div className="text-center space-y-6">
                      <div className="space-y-3">
                        <h3 className="text-xl font-semibold text-gray-900">Immersive Experiences</h3>
                        <p className="text-gray-600 leading-relaxed">
                          This is a demonstration of our immersive dining experiences. In a complete implementation, you would explore our exclusive culinary journeys beyond traditional dining.
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                        <h4 className="font-semibold text-gray-900 mb-3">Available Experiences</h4>
                        <div className="space-y-2 text-gray-700 text-sm">
                          <div className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-gray-900 rounded-full"></div>
                            <span>Chef's Table - Twelve-course immersive tasting</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-gray-900 rounded-full"></div>
                            <span>Grand Cellar Pairing - Rare vintage journey</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-gray-900 rounded-full"></div>
                            <span>Midnight Dessert Salon - Live harp accompaniment</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="text-center space-y-6">
                      <div className="space-y-3">
                        <h3 className="text-xl font-semibold text-gray-900">Concierge Service</h3>
                        <p className="text-gray-600 leading-relaxed">
                          This is a demonstration of our concierge service. In a complete implementation, personalized assistance would be provided.
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                        <h4 className="font-semibold text-gray-900 mb-3">Services</h4>
                        <div className="space-y-2 text-gray-700 text-sm">
                          <div className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-gray-900 rounded-full"></div>
                            <span>Direct concierge contact</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-gray-900 rounded-full"></div>
                            <span>Private event planning</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-gray-900 rounded-full"></div>
                            <span>Custom menu creation</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                <div className="pt-6 border-t border-gray-200">
                  <button className="w-full bg-gray-900 text-white py-3 px-6 rounded-xl font-semibold hover:bg-gray-800 transition-all duration-200"
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
  )
}

export default Menu
