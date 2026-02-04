import { Star, Clock, MapPin, Utensils, ChefHat, X } from 'lucide-react'
import { useState } from 'react'

const Services = () => {
  const [selectedDish, setSelectedDish] = useState<string | null>(null)

  const dishDetails = {
    'Oysters Rockefeller': {
      ingredients: ['Fresh Blue Point Oysters', 'Spinach', 'Pernod', 'Breadcrumbs', 'Parmesan Cheese', 'Hollandaise Sauce', 'Butter', 'Garlic', 'Lemon'],
      preparation: 'Freshly shucked oysters topped with spinach mixture, baked with parmesan breadcrumbs, finished with hollandaise',
      chefNote: 'A New Orleans classic perfected with our house-made hollandaise and locally sourced oysters',
      pairings: ['Champagne', 'Sauvignon Blanc', 'Dry Gin Martini']
    },
    'Tomahawk Ribeye': {
      ingredients: ['32oz Aged Ribeye', 'Bone Marrow', 'Rosemary', 'Thyme', 'Garlic', 'Butter', 'Sea Salt', 'Black Pepper', 'Red Wine Reduction'],
      preparation: 'Dry-aged for 45 days, reverse-seared to perfection, finished with bone marrow butter and herbs',
      chefNote: 'The ultimate steak experience - each bite melts in your mouth with rich, beefy flavor',
      pairings: ['Cabernet Sauvignon', 'Bordeaux Blend', 'Scotch Whisky']
    },
    'Cordon Bleu': {
      ingredients: ['Free-Range Chicken Breast', 'Prosciutto di Parma', 'Gruyère Cheese', 'Swiss Cheese', 'Breadcrumbs', 'Eggs', 'Butter', 'Thyme'],
      preparation: 'Pounded thin, layered with prosciutto and gruyère, breaded and pan-fried to golden perfection',
      chefNote: 'Our twist on the classic uses premium prosciutto and aged gruyère for an elevated flavor profile',
      pairings: ['Chardonnay', 'Pinot Noir', 'Champagne']
    },
    'Chocolate Soufflé': {
      ingredients: ['Belgian Dark Chocolate', 'Eggs', 'Sugar', 'Butter', 'Vanilla Bean', 'Sea Salt', 'Heavy Cream'],
      preparation: 'Baked to order, rises to perfect height, molten center with vanilla bean ice cream',
      chefNote: 'The perfect balance of rich chocolate and airy texture - a timeless dessert executed flawlessly',
      pairings: ['Port Wine', 'Espresso', 'Cognac']
    },
    'Tiramisu': {
      ingredients: ['Espresso', 'Ladyfingers', 'Mascarpone', 'Egg Yolks', 'Sugar', 'Cocoa Powder', 'Dark Rum', 'Vanilla'],
      preparation: 'Traditional Italian method with house-made mascarpone and freshly pulled espresso',
      chefNote: 'Imported Italian ladyfingers soaked in premium espresso with our signature mascarpone cream',
      pairings: ['Espresso', 'Amaretto', 'Vin Santo']
    }
  }
  const menuCategories = [
    {
      category: 'APPETIZERS',
      items: [
        {
          name: 'Oysters Rockefeller',
          description: 'Fresh oysters with spinach, herbs, and hollandaise',
          price: '$24',
          chefSpecial: true,
          rating: 4.9,
          image: 'https://images.unsplash.com/photo-1607305387299-a3d9611cd469?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=4000&q=80'
        },
        {
          name: 'Wagyu Beef Carpaccio',
          description: 'Thinly sliced wagyu with truffle oil and parmesan',
          price: '$32',
          chefSpecial: false,
          rating: 4.8,
          image: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
        },
        {
          name: 'Lobster Bisque',
          description: 'Creamy lobster soup with brandy and fresh herbs',
          price: '$18',
          chefSpecial: true,
          rating: 4.7,
          image: 'https://images.unsplash.com/photo-1559847846-d9806a6b85de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
        }
      ]
    },
    {
      category: 'MAIN COURSES',
      items: [
        {
          name: 'Tomahawk Ribeye',
          description: '32oz aged ribeye with roasted bone marrow',
          price: '$185',
          chefSpecial: true,
          rating: 5.0,
          image: '/rib.jpg'
        },
        {
          name: 'Pan-Seared Sea Bass',
          description: 'Mediterranean sea bass with saffron risotto',
          price: '$48',
          chefSpecial: false,
          rating: 4.8,
          image: 'https://images.unsplash.com/photo-1467003900915-606a8a684eab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
        },
        {
          name: 'Cordon Bleu',
          description: 'Classic French dish with ham and cheese',
          price: '$42',
          chefSpecial: true,
          rating: 4.9,
          image: '/cordon.jpg'
        }
      ]
    },
    {
      category: 'DESSERTS',
      items: [
        {
          name: 'Chocolate Soufflé',
          description: 'Warm chocolate soufflé with vanilla ice cream',
          price: '$16',
          chefSpecial: true,
          rating: 4.9,
          image: 'https://images.unsplash.com/photo-1571875401265-191e279bb8ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
        },
        {
          name: 'Crème Brûlée',
          description: 'Classic French custard with caramelized sugar',
          price: '$14',
          chefSpecial: false,
          rating: 4.7,
          image: 'https://images.unsplash.com/photo-1488900128323-21503983a07e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
        },
        {
          name: 'Tiramisu',
          description: 'Italian classic with espresso and mascarpone',
          price: '$15',
          chefSpecial: true,
          rating: 4.8,
          image: 'https://images.unsplash.com/photo-1571875401265-191e279bb8ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
        }
      ]
    }
  ]

  const winePairings = [
    { wine: 'Château Margaux 2015', region: 'Bordeaux, France', price: '$450' },
    { wine: 'Dom Pérignon 2012', region: 'Champagne, France', price: '$350' },
    { wine: 'Opus One 2018', region: 'Napa Valley, USA', price: '$280' }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0">
          <div className="w-full h-full bg-cover bg-center bg-no-repeat" 
               style={{
                 backgroundImage: "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
               }}>
            <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/50 to-transparent"></div>
            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
          </div>
        </div>
        
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="text-white">
              <span className="inline-block px-4 py-2 bg-orange-600 text-white text-sm font-semibold uppercase tracking-wider rounded-full mb-4">
                Culinary Excellence
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                SIGNATURE
                <span className="block text-orange-500">MENU</span>
              </h1>
              <p className="text-xl text-gray-200 max-w-2xl">
                Chef's curated selection of extraordinary dishes that define modern gastronomy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {menuCategories.map((category, catIndex) => (
            <div key={catIndex} className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-4">
                  {category.category}
                </h2>
                <div className="w-24 h-1 bg-orange-600 mx-auto"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className={`bg-gray-900 rounded-xl overflow-hidden border border-orange-600/30 hover:border-orange-600 transition-all duration-500 transform hover:scale-105 ${item.chefSpecial ? 'cursor-pointer' : ''}`}
                       onClick={() => item.chefSpecial && setSelectedDish(item.name)}>
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                      {item.chefSpecial && (
                        <div className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                          <ChefHat className="w-4 h-4 mr-1" />
                          Chef's Special
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-white mb-2">{item.name}</h3>
                      <p className="text-gray-300 mb-4">{item.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-orange-500">{item.price}</span>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="ml-1 text-gray-400 text-sm">{item.rating}</span>
                        </div>
                      </div>
                      {item.chefSpecial && (
                        <p className="text-xs text-orange-400 mt-3 text-center">Click for details</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Wine Pairings */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Premium <span className="text-orange-600">Wine Selection</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Curated by our master sommelier to complement your dining experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {winePairings.map((wine, index) => (
              <div key={index} className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Utensils className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{wine.wine}</h3>
                <p className="text-gray-600 mb-4">{wine.region}</p>
                <div className="text-2xl font-bold text-orange-600">{wine.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chef's Table Experience */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Chef's Table <span className="text-orange-500">Experience</span>
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                An exclusive 12-seat dining experience where you'll witness culinary artistry up close. 
                Watch as our chefs create masterpieces right before your eyes.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                Each evening features a unique 12-course tasting menu paired with rare wines from our private collection.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-orange-500 mr-3" />
                  <span>Available Wednesday - Sunday, 7PM</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-orange-500 mr-3" />
                  <span>Private kitchen with chef interaction</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900 rounded-2xl p-8 border border-orange-600/30">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-orange-500 mb-4">Tonight's Menu</h3>
                <div className="space-y-3 text-left">
                  {['Amuse-bouche', 'Seafood Tower', 'Wagyu Tartare', 'Truffle Pasta', 'Lobster Thermidor', 'Duck à l\'Orange', 'Wine Pairing', 'Cheese Course', 'Dessert Trio'].map((course, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-800 last:border-0">
                      <span className="text-gray-300">{index + 1}. {course}</span>
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-gray-800">
                  <div className="text-3xl font-bold text-orange-500">$450</div>
                  <p className="text-gray-400 text-sm">Per person | Limited seating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="py-20 bg-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Reserve Your Culinary Journey
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Experience dining at its finest. Book your table for an unforgettable evening.
          </p>
          <button className="inline-flex items-center px-8 py-3 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
            Make Reservation
          </button>
        </div>
      </section>

      {/* Ingredient Modal */}
      {selectedDish && dishDetails[selectedDish as keyof typeof dishDetails] && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
             onClick={() => setSelectedDish(null)}>
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform transition-all"
               onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              {/* Header */}
              <div className="bg-linear-to-r from-orange-600 to-red-600 p-6 text-white">
                <button className="absolute top-4 right-4 text-white hover:text-gray-200 transition"
                        onClick={() => setSelectedDish(null)}>
                  <X className="w-6 h-6" />
                </button>
                <h2 className="text-3xl font-bold mb-2">{selectedDish}</h2>
                <div className="flex items-center gap-4 text-orange-100">
                  <ChefHat className="w-5 h-5" />
                  <span className="text-sm uppercase tracking-wider">Chef's Special</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {/* Chef's Note */}
                <div className="bg-orange-50 border-l-4 border-orange-600 p-4 rounded">
                  <h3 className="font-semibold text-orange-800 mb-2">Chef's Note</h3>
                  <p className="text-gray-700 italic">{dishDetails[selectedDish as keyof typeof dishDetails].chefNote}</p>
                </div>

                {/* Ingredients */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                    <Utensils className="w-5 h-5 mr-2 text-orange-600" />
                    Premium Ingredients
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {dishDetails[selectedDish as keyof typeof dishDetails].ingredients.map((ingredient: string, index: number) => (
                      <div key={index} className="bg-gray-50 px-3 py-2 rounded-lg text-sm text-gray-700 border border-gray-200">
                        {ingredient}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Preparation */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-orange-600" />
                    Preparation Method
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{dishDetails[selectedDish as keyof typeof dishDetails].preparation}</p>
                </div>

                {/* Wine Pairings */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                    <Star className="w-5 h-5 mr-2 text-orange-600" />
                    Recommended Pairings
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {dishDetails[selectedDish as keyof typeof dishDetails].pairings.map((pairing: string, index: number) => (
                      <span key={index} className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">
                        {pairing}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Close Button */}
                <div className="pt-4 border-t">
                  <button className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition"
                          onClick={() => setSelectedDish(null)}>
                    Close Details
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

export default Services
