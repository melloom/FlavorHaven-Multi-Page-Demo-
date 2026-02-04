import { useState } from 'react'
import { Mail, Phone, MapPin, Send, Clock, Star, X, Calendar } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    occasion: '',
    guests: '',
    message: '',
  })
  const [showDemoModal, setShowDemoModal] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowDemoModal('submit')
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Reservations',
      value: '+1 (415) 555-0147',
      description: 'Daily from 5:00 PM',
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'concierge@flavorhaven.com',
      description: 'Response within 12 hours',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: '123 Belden Place, San Francisco',
      description: 'Heart of the Financial District',
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80"
            alt="Restaurant dining"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-black via-black/70 to-transparent" />
        </div>
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              CONTACT <span className="text-orange-500">FLAVOR HAVEN</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl">
              Reserve your table for an unforgettable dining experience or inquire about private events and special occasions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Make a <span className="text-orange-600">Reservation</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Let us create the perfect dining experience for you. Fill out the form below and our concierge team will respond within 12 hours.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none transition"
                      placeholder="Alexandra Laurent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none transition"
                      placeholder="you@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none transition"
                      placeholder="+1 (415) 555-0147"
                    />
                  </div>
                  <div>
                    <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Guests *
                    </label>
                    <select
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none transition"
                    >
                      <option value="">Select guests</option>
                      <option value="2">2 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="6">6 Guests</option>
                      <option value="8">8+ Guests</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="occasion" className="block text-sm font-medium text-gray-700 mb-2">
                    Occasion
                  </label>
                  <select
                    id="occasion"
                    name="occasion"
                    value={formData.occasion}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none transition"
                  >
                    <option value="">Select occasion</option>
                    <option value="birthday">Birthday Celebration</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="business">Business Dinner</option>
                    <option value="date">Date Night</option>
                    <option value="special">Special Occasion</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Special Requests
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none transition resize-none"
                    placeholder="Dietary restrictions, seating preferences, special arrangements..."
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center px-8 py-4 bg-orange-600 text-white font-semibold rounded-xl hover:bg-orange-700 transition"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Reservation Request
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-12">
              {/* Restaurant Image */}
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Restaurant interior"
                  className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-1">Michelin Star Dining</h3>
                  <p className="text-orange-200">Experience culinary excellence</p>
                </div>
              </div>

              {/* Contact Details */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Get in <span className="text-orange-600">Touch</span>
                </h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon
                    return (
                      <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center shrink-0">
                          <Icon className="w-6 h-6 text-orange-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">
                            {info.title}
                          </h3>
                          <p className="text-gray-900 font-medium mb-1">
                            {info.value}
                          </p>
                          <p className="text-gray-600 text-sm">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Hours */}
              <div className="bg-gray-900 text-white rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-6 h-6 text-orange-500" />
                  <h3 className="text-2xl font-bold">Restaurant Hours</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Tuesday - Thursday</span>
                    <span className="text-white font-medium">5:30 PM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Friday - Saturday</span>
                    <span className="text-white font-medium">5:30 PM - 11:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Sunday</span>
                    <span className="text-white font-medium">5:00 PM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-orange-400">Monday</span>
                    <span className="text-orange-400 font-medium">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Find <span className="text-orange-600">Us</span>
            </h2>
            <p className="text-xl text-gray-600">
              Located in the heart of San Francisco's Financial District
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1519904981063-b0cf448d479e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
              alt="San Francisco map location"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-orange-600/20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white rounded-xl p-6 shadow-xl text-center">
                <MapPin className="w-8 h-8 text-orange-600 mx-auto mb-3" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Flavor Haven</h3>
                <p className="text-gray-600 mb-4">123 Belden Place, San Francisco, CA 94105</p>
                <button 
                  className="px-6 py-2 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition"
                  onClick={() => setShowDemoModal('directions')}
                >
                  Get Directions
                </button>
              </div>
            </div>
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
                    {showDemoModal === 'submit' && <Star className="w-6 h-6 text-white" />}
                    {showDemoModal === 'directions' && <MapPin className="w-6 h-6 text-white" />}
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
                            <span>Personalized dining preferences</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-gray-900 rounded-full"></div>
                            <span>Valet parking & special accommodations</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : showDemoModal === 'submit' ? (
                  <>
                    <div className="text-center space-y-6">
                      <div className="space-y-3">
                        <h3 className="text-xl font-semibold text-gray-900">Request Received</h3>
                        <p className="text-gray-600 leading-relaxed">
                          Thank you for your reservation request. Our team will provide the signature Flavor Haven experience with personalized attention to every detail.
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
                            <span>Availability confirmation within 2 hours</span>
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
                        <h3 className="text-xl font-semibold text-gray-900">Find Our Location</h3>
                        <p className="text-gray-600 leading-relaxed">
                          This is a demonstration of our location services. In a complete implementation, you would receive navigation assistance to our dining destination.
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                        <h4 className="font-semibold text-gray-900 mb-3">Navigation</h4>
                        <div className="space-y-2 text-gray-700 text-sm">
                          <div className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-gray-900 rounded-full"></div>
                            <span>Interactive Google Maps integration</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-gray-900 rounded-full"></div>
                            <span>Real-time traffic updates</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-gray-900 rounded-full"></div>
                            <span>Parking availability nearby</span>
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

export default Contact
