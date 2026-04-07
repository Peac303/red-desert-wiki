'use client'

import Link from 'next/link'
import Sidebar from '../../components/Sidebar'

export default function MapsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-earth-beige via-desert-sand to-earth-tan">
      {/* Sidebar Navigation */}
      <Sidebar />

      <main className="pt-24 md:pl-64">
        {/* Breadcrumb */}
        <div className="bg-white/80 backdrop-blur-sm border-b border-desert-sand/30 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                  <Link href="/" className="text-rust-dark hover:text-desert-gold transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-ash-medium mx-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <Link href="/database" className="text-rust-dark hover:text-desert-gold transition-colors">
                      Database
                    </Link>
                  </div>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-ash-medium mx-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-ash-medium">
                      Maps
                    </span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Maps Content */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-rust-dark mb-12 font-adventure">
              Game Maps
            </h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Map Content */}
              <div className="lg:col-span-2">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-desert-sand/30 mb-8">
                  <h2 className="text-2xl font-bold text-rust-dark mb-6 font-adventure">
                    Red Desert World Map
                  </h2>
                  
                  <div className="relative mb-6">
                    <div className="w-full h-96 bg-cover bg-center rounded-xl" style={{ backgroundImage: 'url(https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Red%20Desert%20game%20world%20map%20screenshot%2C%20Pearl%20Abyss%20official&image_size=landscape_16_9)' }}>
                      <div className="absolute bottom-2 right-2 text-white text-xs bg-black/50 px-2 py-1 rounded">
                        [Image Source: Pearl Abyss Official]
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-rust-dark mb-2 font-adventure">
                        Map Regions
                      </h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 rounded-full bg-desert-sand"></div>
                          <span className="text-ash-medium">Desert Plains</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 rounded-full bg-green-500"></div>
                          <span className="text-ash-medium">Oasis</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 rounded-full bg-brown-500"></div>
                          <span className="text-ash-medium">Canyons</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 rounded-full bg-gray-500"></div>
                          <span className="text-ash-medium">Mountains</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                          <span className="text-ash-medium">Coast</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 rounded-full bg-purple-500"></div>
                          <span className="text-ash-medium">Ancient Ruins</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-rust-dark mb-2 font-adventure">
                        Key Locations
                      </h3>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center border-b border-desert-sand/30 pb-2">
                          <span className="text-ash-dark font-medium">Desert Outpost</span>
                          <span className="text-ash-medium">(30.5, 45.2)</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-desert-sand/30 pb-2">
                          <span className="text-ash-dark font-medium">Oasis Village</span>
                          <span className="text-ash-medium">(60.8, 35.4)</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-desert-sand/30 pb-2">
                          <span className="text-ash-dark font-medium">Canyon Fortress</span>
                          <span className="text-ash-medium">(45.3, 20.7)</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-desert-sand/30 pb-2">
                          <span className="text-ash-dark font-medium">Mountain Pass</span>
                          <span className="text-ash-medium">(15.9, 60.3)</span>
                        </div>
                        <div className="flex justify-between items-center pb-2">
                          <span className="text-ash-dark font-medium">Coastal City</span>
                          <span className="text-ash-medium">(80.2, 70.5)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-desert-sand/30">
                  <h2 className="text-2xl font-bold text-rust-dark mb-6 font-adventure">
                    Map Features
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="border-l-4 border-desert-gold pl-4 py-2">
                      <h3 className="text-lg font-semibold text-rust-dark mb-2 font-adventure">
                        Dynamic Weather
                      </h3>
                      <p className="text-ash-medium">
                        The Red Desert features dynamic weather systems including sandstorms, rain, and extreme temperatures that affect gameplay. [Source: Pearl Abyss]
                      </p>
                    </div>
                    <div className="border-l-4 border-desert-gold pl-4 py-2">
                      <h3 className="text-lg font-semibold text-rust-dark mb-2 font-adventure">
                        Day-Night Cycle
                      </h3>
                      <p className="text-ash-medium">
                        A realistic day-night cycle affects enemy behavior, resource availability, and quest opportunities. [Source: Pearl Abyss]
                      </p>
                    </div>
                    <div className="border-l-4 border-desert-gold pl-4 py-2">
                      <h3 className="text-lg font-semibold text-rust-dark mb-2 font-adventure">
                        Points of Interest
                      </h3>
                      <p className="text-ash-medium">
                        Discover hidden ruins, ancient artifacts, and secret locations throughout the Red Desert. [Source: Pearl Abyss]
                      </p>
                    </div>
                    <div className="border-l-4 border-desert-gold pl-4 py-2">
                      <h3 className="text-lg font-semibold text-rust-dark mb-2 font-adventure">
                        Fast Travel
                      </h3>
                      <p className="text-ash-medium">
                        Unlock fast travel points by visiting key locations, allowing for quick navigation across the vast desert. [Source: Pearl Abyss]
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Map Details */}
              <div className="lg:col-span-1">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-desert-sand/30 mb-8">
                  <h2 className="text-2xl font-bold text-rust-dark mb-6 font-adventure">
                    Region Details
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="bg-earth-beige/50 rounded-xl p-4 border border-desert-sand/30">
                      <h3 className="text-lg font-semibold text-rust-dark mb-2 font-adventure">
                        Desert Plains
                      </h3>
                      <p className="text-ash-medium text-sm mb-2">
                        Vast open desert with scattered oases and nomadic camps. [Source: Pearl Abyss]
                      </p>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-ash-medium">Danger Level: Low</span>
                        <span className="text-ash-medium">Resources: Water, Herbs</span>
                      </div>
                    </div>
                    <div className="bg-earth-beige/50 rounded-xl p-4 border border-desert-sand/30">
                      <h3 className="text-lg font-semibold text-rust-dark mb-2 font-adventure">
                        Oasis
                      </h3>
                      <p className="text-ash-medium text-sm mb-2">
                        Lush green areas with abundant water and vegetation. [Source: Pearl Abyss]
                      </p>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-ash-medium">Danger Level: Medium</span>
                        <span className="text-ash-medium">Resources: Water, Herbs, Wood</span>
                      </div>
                    </div>
                    <div className="bg-earth-beige/50 rounded-xl p-4 border border-desert-sand/30">
                      <h3 className="text-lg font-semibold text-rust-dark mb-2 font-adventure">
                        Canyons
                      </h3>
                      <p className="text-ash-medium text-sm mb-2">
                        Deep rocky canyons with valuable mineral deposits. [Source: Pearl Abyss]
                      </p>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-ash-medium">Danger Level: High</span>
                        <span className="text-ash-medium">Resources: Ore, Gems</span>
                      </div>
                    </div>
                    <div className="bg-earth-beige/50 rounded-xl p-4 border border-desert-sand/30">
                      <h3 className="text-lg font-semibold text-rust-dark mb-2 font-adventure">
                        Ancient Ruins
                      </h3>
                      <p className="text-ash-medium text-sm mb-2">
                        Mysterious ruins filled with treasure and dangerous creatures. [Source: Pearl Abyss]
                      </p>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-ash-medium">Danger Level: Very High</span>
                        <span className="text-ash-medium">Resources: Artifacts, Gems</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Map Tips */}
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-desert-sand/30">
                  <h2 className="text-2xl font-bold text-rust-dark mb-6 font-adventure">
                    Exploration Tips
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="border-l-4 border-rust-light pl-4 py-2">
                      <h3 className="text-lg font-semibold text-rust-dark mb-2 font-adventure">
                        Preparation
                      </h3>
                      <p className="text-ash-medium">
                        Always carry plenty of water and supplies when exploring the desert. [Source: Pearl Abyss]
                      </p>
                    </div>
                    <div className="border-l-4 border-rust-light pl-4 py-2">
                      <h3 className="text-lg font-semibold text-rust-dark mb-2 font-adventure">
                        Navigation
                      </h3>
                      <p className="text-ash-medium">
                        Use landmarks and the position of the sun to navigate in the desert. [Source: Pearl Abyss]
                      </p>
                    </div>
                    <div className="border-l-4 border-rust-light pl-4 py-2">
                      <h3 className="text-lg font-semibold text-rust-dark mb-2 font-adventure">
                        Weather Awareness
                      </h3>
                      <p className="text-ash-medium">
                        Watch for sandstorm warnings and seek shelter when necessary. [Source: Pearl Abyss]
                      </p>
                    </div>
                    <div className="border-l-4 border-rust-light pl-4 py-2">
                      <h3 className="text-lg font-semibold text-rust-dark mb-2 font-adventure">
                        Mounts
                      </h3>
                      <p className="text-ash-medium">
                        Use mounts to cover long distances more quickly and conserve energy. [Source: Pearl Abyss]
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-gradient-to-r from-starry-indigo to-starry-blue text-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6 font-adventure text-shadow">
              Stay Updated
            </h2>
            <p className="mb-10 opacity-90 text-lg">
              Subscribe to our newsletter for the latest news, updates, and events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 rounded-lg text-ash-dark focus:outline-none focus:ring-2 focus:ring-desert-gold"
              />
              <button className="bg-desert-gold text-ash-dark px-8 py-3 rounded-lg font-medium hover:bg-desert-amber transition-all duration-300 shadow-lg hover:shadow-xl">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}