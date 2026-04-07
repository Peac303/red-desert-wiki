'use client'

import Link from 'next/link'
import Sidebar from '../../components/Sidebar'

export default function ResourceMapsPage() {
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
                    <Link href="/guides" className="text-rust-dark hover:text-desert-gold transition-colors">
                      Guides
                    </Link>
                  </div>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-ash-medium mx-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-ash-medium">
                      Resource Maps
                    </span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Resource Maps Content */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-rust-dark mb-12 font-adventure">
              Resource Maps
            </h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Map Content */}
              <div className="lg:col-span-2">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-desert-sand/30 mb-8">
                  <h2 className="text-2xl font-bold text-rust-dark mb-6 font-adventure">
                    Desert Resource Map
                  </h2>
                  
                  <div className="relative mb-6">
                    <div className="w-full h-96 bg-cover bg-center rounded-xl" style={{ backgroundImage: 'url(https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Red%20Desert%20game%20resource%20map%20screenshot%2C%20Pearl%20Abyss%20official&image_size=landscape_16_9)' }}>
                      <div className="absolute bottom-2 right-2 text-white text-xs bg-black/50 px-2 py-1 rounded">
                        [Image Source: Pearl Abyss Official]
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-rust-dark mb-2 font-adventure">
                        Resource Types
                      </h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 rounded-full bg-green-500"></div>
                          <span className="text-ash-medium">Herbs</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
                          <span className="text-ash-medium">Ore</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 rounded-full bg-brown-500"></div>
                          <span className="text-ash-medium">Wood</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                          <span className="text-ash-medium">Water</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-rust-dark mb-2 font-adventure">
                        Resource Locations
                      </h3>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center border-b border-desert-sand/30 pb-2">
                          <span className="text-ash-dark font-medium">Green Oasis</span>
                          <span className="text-ash-medium">Herbs, Water</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-desert-sand/30 pb-2">
                          <span className="text-ash-dark font-medium">Iron Ridge</span>
                          <span className="text-ash-medium">Ore</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-desert-sand/30 pb-2">
                          <span className="text-ash-dark font-medium">Cedar Forest</span>
                          <span className="text-ash-medium">Wood</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-desert-sand/30 pb-2">
                          <span className="text-ash-dark font-medium">Crystal Caves</span>
                          <span className="text-ash-medium">Ore, Gems</span>
                        </div>
                        <div className="flex justify-between items-center pb-2">
                          <span className="text-ash-dark font-medium">Flower Valley</span>
                          <span className="text-ash-medium">Herbs, Flowers</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-desert-sand/30">
                  <h2 className="text-2xl font-bold text-rust-dark mb-6 font-adventure">
                    Gathering Tips
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="border-l-4 border-desert-gold pl-4 py-2">
                      <h3 className="text-lg font-semibold text-rust-dark mb-2 font-adventure">
                        Tools
                      </h3>
                      <p className="text-ash-medium">
                        Use the appropriate gathering tools for each resource type to increase efficiency and yield. Higher quality tools provide better results. [Source: Pearl Abyss]
                      </p>
                    </div>
                    <div className="border-l-4 border-desert-gold pl-4 py-2">
                      <h3 className="text-lg font-semibold text-rust-dark mb-2 font-adventure">
                        Skills
                      </h3>
                      <p className="text-ash-medium">
                        Invest in gathering skills to improve your ability to find and collect resources. Higher skill levels unlock better resources and faster gathering. [Source: Pearl Abyss]
                      </p>
                    </div>
                    <div className="border-l-4 border-desert-gold pl-4 py-2">
                      <h3 className="text-lg font-semibold text-rust-dark mb-2 font-adventure">
                        Timing
                      </h3>
                      <p className="text-ash-medium">
                        Some resources are more abundant at specific times of day or during certain weather conditions. Plan your gathering trips accordingly. [Source: Pearl Abyss]
                      </p>
                    </div>
                    <div className="border-l-4 border-desert-gold pl-4 py-2">
                      <h3 className="text-lg font-semibold text-rust-dark mb-2 font-adventure">
                        Storage
                      </h3>
                      <p className="text-ash-medium">
                        Manage your inventory space efficiently. Use storage chests in towns to store excess resources and keep your gathering trips productive. [Source: Pearl Abyss]
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Resource Details */}
              <div className="lg:col-span-1">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-desert-sand/30 mb-8">
                  <h2 className="text-2xl font-bold text-rust-dark mb-6 font-adventure">
                    Resource Details
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="bg-earth-beige/50 rounded-xl p-4 border border-desert-sand/30">
                      <h3 className="text-lg font-semibold text-rust-dark mb-2 font-adventure">
                        Herbs
                      </h3>
                      <p className="text-ash-medium mb-2">
                        Used for alchemy and cooking. Found in areas with vegetation.
                      </p>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-ash-medium">Rarity: Common</span>
                        <span className="text-ash-medium">Value: Low</span>
                      </div>
                    </div>
                    <div className="bg-earth-beige/50 rounded-xl p-4 border border-desert-sand/30">
                      <h3 className="text-lg font-semibold text-rust-dark mb-2 font-adventure">
                        Ore
                      </h3>
                      <p className="text-ash-medium mb-2">
                        Used for blacksmithing and crafting weapons/armor. Found in rocky areas.
                      </p>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-ash-medium">Rarity: Common-Rare</span>
                        <span className="text-ash-medium">Value: Medium-High</span>
                      </div>
                    </div>
                    <div className="bg-earth-beige/50 rounded-xl p-4 border border-desert-sand/30">
                      <h3 className="text-lg font-semibold text-rust-dark mb-2 font-adventure">
                        Wood
                      </h3>
                      <p className="text-ash-medium mb-2">
                        Used for carpentry and building. Found in forested areas.
                      </p>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-ash-medium">Rarity: Common</span>
                        <span className="text-ash-medium">Value: Low-Medium</span>
                      </div>
                    </div>
                    <div className="bg-earth-beige/50 rounded-xl p-4 border border-desert-sand/30">
                      <h3 className="text-lg font-semibold text-rust-dark mb-2 font-adventure">
                        Gems
                      </h3>
                      <p className="text-ash-medium mb-2">
                        Used for crafting jewelry and enhancing equipment. Found in caves.
                      </p>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-ash-medium">Rarity: Rare</span>
                        <span className="text-ash-medium">Value: High</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Gathering Professions */}
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-desert-sand/30">
                  <h2 className="text-2xl font-bold text-rust-dark mb-6 font-adventure">
                    Gathering Professions
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                        <span className="text-green-600">🌿</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-rust-dark">Herbalist</h3>
                        <p className="text-ash-medium text-sm">Collects herbs and plants</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                        <span className="text-yellow-600">⛏️</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-rust-dark">Miner</h3>
                        <p className="text-ash-medium text-sm">Extracts ore and gems</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-brown-100 flex items-center justify-center">
                        <span className="text-brown-600">🪓</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-rust-dark">Woodcutter</h3>
                        <p className="text-ash-medium text-sm">Harvests wood and lumber</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="text-blue-600">💧</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-rust-dark">Water Collector</h3>
                        <p className="text-ash-medium text-sm">Gathers water and other liquids</p>
                      </div>
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