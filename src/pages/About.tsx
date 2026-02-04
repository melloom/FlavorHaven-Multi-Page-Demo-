import SEO from '../components/SEO'
import { Star, Award, ChefHat, Sparkles } from 'lucide-react'

const About = () => {
  return (
    <>
      <SEO 
        title="About Flavor Haven - Premium Fine Dining Legacy"
        description="Discover the extraordinary journey of Flavor Haven. From passion for exceptional flavors to becoming a premier dining destination, experience our legacy of culinary perfection."
        keywords="flavor haven about, restaurant story, culinary excellence, fine dining journey, premium dining history"
      />
      
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative h-screen overflow-hidden">
          <div className="absolute inset-0">
            <div className="w-full h-full bg-cover bg-center bg-no-repeat" 
                 style={{
                      backgroundImage: "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=80')"
                 }}>
              <div className="absolute inset-0 bg-linear-to-r from-black/95 via-black/70 to-black/95"></div>
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-transparent to-black/30"></div>
            </div>
          </div>
          <div className="relative h-full flex items-center justify-center">
            <div className="text-center space-y-8 max-w-4xl px-4">
              {/* Michelin Stars */}
              <div className="flex items-center justify-center space-x-2">
                {[1, 2, 3].map((star) => (
                  <Star key={star} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="ml-4 text-yellow-400 font-semibold tracking-wider uppercase text-sm">Michelin Guide</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-light leading-tight tracking-tight">
                The <span className="font-bold text-yellow-400">Haven</span> Legacy
              </h1>
              <p className="text-xl md:text-3xl text-gray-300 font-light leading-relaxed">
                A relentless pursuit of perfection that redefined modern gastronomy
              </p>
            </div>
          </div>
        </section>

        {/* Heritage Section */}
        <section className="py-32 bg-black border-t border-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-24 items-center">
              <div className="space-y-12">
                <h2 className="text-4xl md:text-6xl font-light tracking-tight">
                  From <span className="font-bold text-yellow-400">Passion</span> to <span className="font-bold text-yellow-400">Perfection</span>
                </h2>
                <div className="space-y-6 text-gray-300 font-light leading-relaxed">
                  <p className="text-xl">
                    Flavor Haven emerged from a passion for exceptional ingredients: to create not just a restaurant, 
                    but a sanctuary of culinary artistry where every detail reflects excellence.
                  </p>
                  <p className="text-xl">
                    What began as a bold dream has evolved into a celebrated destination, recognized for our commitment 
                    to pushing boundaries and redefining luxury dining.
                  </p>
                  <p className="text-xl">
                    Every plate that leaves our kitchen carries passion, innovation, and an 
                    unwavering dedication to the craft that has made Flavor Haven a name in excellence.
                  </p>
                </div>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80"
                  alt="Chef in kitchen"
                  className="w-full h-auto border border-gray-800"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-32 bg-linear-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-6xl font-light text-white mb-8 tracking-tight">
                The <span className="font-bold text-yellow-400">Philosophy</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
                Principles that have guided us to the pinnacle of culinary excellence
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-20">
              <div className="text-center space-y-8">
                <div className="w-24 h-24 bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto border border-yellow-400/20">
                  <ChefHat className="w-12 h-12 text-yellow-400" />
                </div>
                <h3 className="text-2xl font-light text-white tracking-wide">Precision</h3>
                <p className="text-gray-400 font-light leading-relaxed">
                  Surgical attention to detail in every element. From ingredient selection to final presentation, 
                  perfection is not a goal—it's our standard.
                </p>
              </div>
              
              <div className="text-center space-y-8">
                <div className="w-24 h-24 bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto border border-yellow-400/20">
                  <Award className="w-12 h-12 text-yellow-400" />
                </div>
                <h3 className="text-2xl font-light text-white tracking-wide">Excellence</h3>
                <p className="text-gray-400 font-light leading-relaxed">
                  Three Michelin stars represent our commitment to consistency, innovation, and the relentless 
                  pursuit of the extraordinary in every dining experience.
                </p>
              </div>
              
              <div className="text-center space-y-8">
                <div className="w-24 h-24 bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto border border-yellow-400/20">
                  <Sparkles className="w-12 h-12 text-yellow-400" />
                </div>
                <h3 className="text-2xl font-light text-white tracking-wide">Innovation</h3>
                <p className="text-gray-400 font-light leading-relaxed">
                  While respecting classical foundations, we continuously push boundaries, creating dishes 
                  that challenge conventions and delight the most discerning palates.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Global Impact Section */}
        <section className="py-32 bg-black border-t border-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-6xl font-light text-white mb-8 tracking-tight">
                Global <span className="font-bold text-yellow-400">Excellence</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
                The Ramsay name represents quality across continents and cultures
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-16 text-center">
              <div>
                <div className="text-6xl font-bold text-yellow-400 mb-4 tracking-tight">35+</div>
                <div className="text-gray-400 uppercase tracking-wider text-sm">Restaurants Worldwide</div>
              </div>
              <div>
                <div className="text-6xl font-bold text-yellow-400 mb-4 tracking-tight">17</div>
                <div className="text-gray-400 uppercase tracking-wider text-sm">Michelin Stars Total</div>
              </div>
              <div>
                <div className="text-6xl font-bold text-yellow-400 mb-4 tracking-tight">8</div>
                <div className="text-gray-400 uppercase tracking-wider text-sm">Countries</div>
              </div>
              <div>
                <div className="text-6xl font-bold text-yellow-400 mb-4 tracking-tight">25+</div>
                <div className="text-gray-400 uppercase tracking-wider text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-32 bg-linear-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-6xl font-light text-white mb-8 tracking-tight">
                Culinary <span className="font-bold text-yellow-400">Masters</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
                The exceptional team behind every perfect dining experience
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-20">
              <div className="text-center space-y-8">
                <img
                  src="https://images.unsplash.com/photo-1581299894007-aaa50297cf16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=90"
                  alt="Executive Chef"
                  className="w-32 h-32 rounded-full mx-auto border-4 border-yellow-400/20 object-cover"
                />
                <div>
                  <h3 className="text-2xl font-light text-white tracking-wide mb-2">James Anderson</h3>
                  <p className="text-yellow-400 font-semibold tracking-wider uppercase text-sm mb-4">Founder & Head Chef</p>
                  <p className="text-gray-400 font-light leading-relaxed">
                    The visionary behind our culinary philosophy, bringing unmatched passion, 
                    creativity, and an uncompromising commitment to excellence.
                  </p>
                </div>
              </div>
              
              <div className="text-center space-y-8">
                <img
                  src="https://images.prestigeonline.com/wp-content/uploads/sites/4/2021/01/07141341/gordon-ramsay-masterclass-ft-blog0918-1200x900.jpg?tr=w-900"
                  alt="Executive Chef"
                  className="w-32 h-32 rounded-full mx-auto border-4 border-yellow-400/20 object-cover"
                />
                <div>
                  <h3 className="text-2xl font-light text-white tracking-wide mb-2">Gordon Ramsay</h3>
                  <p className="text-yellow-400 font-semibold tracking-wider uppercase text-sm mb-4">Executive Chef</p>
                  <p className="text-gray-400 font-light leading-relaxed">
                    World-renowned chef bringing extraordinary creativity and precision 
                    to every dish that defines our dining experience.
                  </p>
                </div>
              </div>
              
              <div className="text-center space-y-8">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=90"
                  alt="Restaurant Director"
                  className="w-32 h-32 rounded-full mx-auto border-4 border-yellow-400/20 object-cover"
                />
                <div>
                  <h3 className="text-2xl font-light text-white tracking-wide mb-2">Marcus Chen</h3>
                  <p className="text-yellow-400 font-semibold tracking-wider uppercase text-sm mb-4">Restaurant Director</p>
                  <p className="text-gray-400 font-light leading-relaxed">
                    Ensuring every guest experiences our legendary hospitality 
                    and attention to detail that defines luxury dining.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default About
