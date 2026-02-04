import { Calendar, Clock, Mail, MapPin, PhoneCall, Shield, Sparkles, Users, X } from 'lucide-react'
import { useState } from 'react'

const Reservations = () => {
  const [showDemoModal, setShowDemoModal] = useState<string | null>(null)
  const diningOptions = [
    {
      title: "Chef's Table",
      description: 'Twelve-course tasting in our exhibition kitchen with direct chef interaction.',
      details: 'Wednesday – Sunday · 7:00 PM · 12 seats',
      badge: 'Most Requested',
    },
    {
      title: 'Garden Conservatory',
      description: 'Lush glasshouse setting surrounded by citrus trees and live piano.',
      details: 'Daily · 5:30 PM & 8:30 PM · 24 seats',
      badge: 'Seasonal',
    },
    {
      title: 'Private Salon',
      description: 'Intimate dining room with bespoke tasting menu and dedicated service captain.',
      details: 'Custom schedule · Up to 20 guests',
      badge: 'Events',
    },
  ]

  const faqs = [
    {
      question: 'How far in advance should I book?',
      answer: 'Weekday reservations open 30 days out. Chef’s Table and weekend seatings open 60 days out and fill quickly.',
    },
    {
      question: 'Do you accommodate allergies?',
      answer: 'Absolutely. Kindly note allergies or dietary restrictions in your request. Our culinary team confirms bespoke pairings 48 hours prior.',
    },
    {
      question: 'Is there a dress code?',
      answer: 'Modern formal. Jackets requested for evening seatings. Elevated attire celebrated.',
    },
  ]

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[460px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1600&q=80"
            className="w-full h-full object-cover"
            alt="Dining room"
          />
          <div className="absolute inset-0 bg-linear-to-r from-black via-black/70 to-transparent" />
        </div>
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white space-y-6">
            <span className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-xs uppercase tracking-[0.5em]">
              <Sparkles className="w-4 h-4" /> Reserve Experience
            </span>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              YOUR TABLE, <span className="text-orange-500">PERFECTED</span>
            </h1>
            <p className="text-lg text-gray-200 max-w-2xl">
              Each seating is choreographed by our concierge team—from chauffeured arrivals to bespoke tasting notes. Share your
              desired date and we’ll orchestrate the rest.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                className="px-8 py-3 bg-orange-600 rounded-lg font-semibold hover:bg-orange-500 transition"
                onClick={() => setShowDemoModal('request')}
              >
                Request Table
              </button>
              <button 
                className="px-8 py-3 border border-white/40 rounded-lg font-semibold hover:bg-white hover:text-black transition"
                onClick={() => setShowDemoModal('concierge')}
              >
                Call Concierge
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Availability Highlights */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[{
            icon: Calendar,
            title: 'Priority Booking',
            description: '48-hour confirmation with seasonal pairing recommendations.',
          },
          {
            icon: Clock,
            title: 'Twice-Nightly Seatings',
            description: '5:30 PM & 8:30 PM orchestrations across three dining salons.',
          },
          {
            icon: Users,
            title: 'Private Gatherings',
            description: 'Dedicated planners for soirées, proposals, and culinary takeovers.',
          }].map((item) => {
            const Icon = item.icon
            return (
              <div key={item.title} className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
                <Icon className="w-10 h-10 text-orange-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Reservation Form + Concierge */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16">
          <div>
            <div className="mb-10">
              <p className="text-sm uppercase tracking-[0.4em] text-gray-500">Step One</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Share Your Occasion</h2>
              <p className="text-lg text-gray-600 mt-4">
                Our reservations concierge responds within 12 hours with tailored seating options, wine pairings, and arrival
                amenities.
              </p>
            </div>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none" placeholder="Alex Laurent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                  <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none" placeholder="+1 (555) 678-9012" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none" placeholder="you@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Guests *</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none">
                    <option>2 guests</option>
                    <option>4 guests</option>
                    <option>6 guests</option>
                    <option>8 guests</option>
                    <option>Private event</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date *</label>
                  <input type="date" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Seating *</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none">
                    <option>5:30 PM</option>
                    <option>8:30 PM</option>
                    <option>Chef's Table</option>
                    <option>Private Salon</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Occasion & Preferences *</label>
                <textarea rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none resize-none" placeholder="Celebrating our anniversary. Prefer vegetarian-forward tasting with Champagne pairings." />
              </div>
              <button 
                type="submit" 
                className="w-full md:w-auto px-8 py-3 bg-orange-600 text-white font-semibold rounded-xl hover:bg-orange-500 transition"
                onClick={(e) => {
                  e.preventDefault()
                  setShowDemoModal('submit')
                }}
              >
                Submit Request
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-900 text-white rounded-3xl p-10 relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute -top-10 -left-10 w-56 h-56 bg-orange-500/60 blur-3xl rounded-full" />
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-red-500/40 blur-3xl rounded-full" />
              </div>
              <div className="relative space-y-6">
                <div className="flex items-center gap-4">
                  <Shield className="w-10 h-10 text-orange-400" />
                  <div>
                    <p className="text-sm uppercase tracking-[0.4em] text-orange-400">Concierge Team</p>
                    <h3 className="text-2xl font-semibold">White-Glove Coordination</h3>
                  </div>
                </div>
                <p className="text-gray-200">
                  From chauffeured transport to floral installations, our concierge collaborates with trusted partners to craft
                  every detail.
                </p>
                <div className="space-y-3 text-gray-300">
                  <div className="flex items-center gap-3">
                    <PhoneCall className="w-5 h-5 text-orange-400" /> +1 (415) 555-0147
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-orange-400" /> concierge@flavorhaven.com
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-orange-400" /> 123 Belden Place, San Francisco
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-6">
              {diningOptions.map((option) => (
                <div key={option.title} className="p-6 border border-gray-200 rounded-2xl">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-gray-900">{option.title}</h3>
                    <span className="text-xs uppercase tracking-[0.3em] text-orange-500">{option.badge}</span>
                  </div>
                  <p className="text-gray-600 mb-2">{option.description}</p>
                  <p className="text-sm text-gray-500">{option.details}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="text-sm uppercase tracking-[0.4em] text-gray-500">Plan Ahead</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Frequently Asked Questions</h2>
          </div>
          <div className="grid gap-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
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
                    {showDemoModal === 'request' && <Calendar className="w-6 h-6 text-white" />}
                    {showDemoModal === 'submit' && <Sparkles className="w-6 h-6 text-white" />}
                    {showDemoModal === 'concierge' && <PhoneCall className="w-6 h-6 text-white" />}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold mb-1">Flavor Haven</h2>
                    <p className="text-gray-300 text-sm">Premium Dining Experience</p>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-6">
                {showDemoModal === 'request' ? (
                  <>
                    <div className="text-center space-y-6">
                      <div className="space-y-3">
                        <h3 className="text-xl font-semibold text-gray-900">Reservation Request</h3>
                        <p className="text-gray-600 leading-relaxed">
                          This is a demonstration of our reservation system. In a complete implementation, your request would be processed with our signature attention to detail.
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
                            <span>Automated email confirmations</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-gray-900 rounded-full"></div>
                            <span>Special accommodation requests</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : showDemoModal === 'submit' ? (
                  <>
                    <div className="text-center space-y-6">
                      <div className="space-y-3">
                        <h3 className="text-xl font-semibold text-gray-900">Request Submitted</h3>
                        <p className="text-gray-600 leading-relaxed">
                          Thank you for your reservation request. Our team will review your request and respond within 12 hours.
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                        <h4 className="font-semibold text-gray-900 mb-3">Next Steps</h4>
                        <div className="space-y-2 text-gray-700 text-sm">
                          <div className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-gray-900 rounded-full"></div>
                            <span>Request received by our team</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-gray-900 rounded-full"></div>
                            <span>Availability check within 2 hours</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-gray-900 rounded-full"></div>
                            <span>Personalized response via email</span>
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

export default Reservations
