'use client'

import Link from 'next/link'
import Sidebar from '../../components/Sidebar'

export default function ItemsPage() {
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
                      Items
                    </span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Items Content */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-rust-dark mb-12 font-adventure">
              Item Database
            </h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Item List */}
              <div className="lg:col-span-2">
                {/* Equipment */}
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-desert-sand/30 mb-8">
                  <h2 className="text-2xl font-bold text-rust-dark mb-6 font-adventure">
                    Equipment
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Armor */}
                    <div className="bg-earth-beige/50 rounded-xl p-6 border border-desert-sand/30">
                      <div className="h-32 mb-4 bg-cover bg-center rounded-lg" style={{ backgroundImage: 'url(https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Red%20Desert%20game%20armor%20equipment%20screenshot%2C%20Pearl%20Abyss%20official&image_size=landscape_4_3)' }}>
                      </div>
                      <h3 className="text-lg font-semibold text-rust-dark mb-2 font-adventure">
                        Desert Plate Armor
                      </h3>
                      <p className="text-ash-medium mb-4 text-sm">
                        Heavy armor made from hardened desert materials. Provides excellent protection against physical attacks. [Source: Pearl Abyss]
                      </p>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-ash-medium text-sm">Defense</span>
                          <span className="font-semibold text-rust-dark">85</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-ash-medium text-sm">Weight</span>
                          <span className="font-semibold text-rust-dark">Heavy</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-ash-medium text-sm">Durability</span>
                          <span className="font-semibold text-rust-dark">120</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Weapon */}
                    <div className="bg-earth-beige/50 rounded-xl p-6 border border-desert-sand/30">
                      <div className="h-32 mb-4 bg-cover bg-center rounded-lg" style={{ backgroundImage: 'url(https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Red%20Desert%20game%20sword%20weapon%20screenshot%2C%20Pearl%20Abyss%20official&image_size=landscape_4_3)' }}>
                      </div>
                      <h3 className="text-lg font-semibold text-rust-dark mb-2 font-adventure">
                        Desert Sword
                      </h3>
                      <p className="text-ash-medium mb-4 text-sm">
                        A sword forged from desert steel. Deals high damage and has excellent durability. [Source: Pearl Abyss]
                      </p>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-ash-medium text-sm">Damage</span>
                          <span className="font-semibold text-rust-dark">95-110</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-ash-medium text-sm">Attack Speed</span>
                          <span className="font-semibold text-rust-dark">Medium</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-ash-medium text-sm">Durability</span>
                          <span className="font-semibold text-rust-dark">100</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Consumables */}
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-desert-sand/30">
                  <h2 className="text-2xl font-bold text-rust-dark mb-6 font-adventure">
                    Consumables
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Water Flask */}
                    <div className="bg-earth-beige/50 rounded-xl p-6 border border-desert-sand/30">
                      <div className="h-24 mb-4 bg-cover bg-center rounded-lg" style={{ backgroundImage: 'url(https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Red%20Desert%20game%20water%20flask%20consumable%20screenshot%2C%20Pearl%20Abyss%20official&image_size=landscape_4_3)' }}>
                      </div>
                      <h3 className="text-lg font-semibold text-rust-dark mb-2 font-adventure">
                        Water Flask
                      </h3>
                      <p className="text-ash-medium mb-4 text-sm">
                        A flask of clean water. Restores hydration in the desert. [Source: Pearl Abyss]
                      </p>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-ash-medium text-sm">Hydration</span>
                          <span className="font-semibold text-rust-dark">+50</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-ash-medium text-sm">Weight</span>
                          <span className="font-semibold text-rust-dark">0.5</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Healing Potion */}
                    <div className="bg-earth-beige/50 rounded-xl p-6 border border-desert-sand/30">
                      <div className="h-24 mb-4 bg-cover bg-center rounded-lg" style={{ backgroundImage: 'url(https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Red%20Desert%20game%20healing%20potion%20consumable%20screenshot%2C%20Pearl%20Abyss%20official&image_size=landscape_4_3)' }}>
                      </div>
                      <h3 className="text-lg font-semibold text-rust-dark mb-2 font-adventure">
                        Healing Potion
                      </h3>
                      <p className="text-ash-medium mb-4 text-sm">
                        A potion that restores health. Essential for surviving in the desert. [Source: Pearl Abyss]
                      </p>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-ash-medium text-sm">Health</span>
                          <span className="font-semibold text-rust-dark">+200</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-ash-medium text-sm">Weight</span>
                          <span className="font-semibold text-rust-dark">0.3</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Food */}
                    <div className="bg-earth-beige/50 rounded-xl p-6 border border-desert-sand/30">
                      <div className="h-24 mb-4 bg-cover bg-center rounded-lg" style={{ backgroundImage: 'url(https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Red%20Desert%20game%20food%20consumable%20screenshot%2C%20Pearl%20Abyss%20official&image_size=landscape_4_3)' }}>
                      </div>
                      <h3 className="text-lg font-semibold text-rust-dark mb-2 font-adventure">
                        Dried Meat
                      </h3>
                      <p className="text-ash-medium mb-4 text-sm">
                        Preserved meat that provides sustenance in the desert. [Source: Pearl Abyss]
                      </p>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-ash-medium text-sm">Hunger</span>
                          <span className="font-semibold text-rust-dark">+40</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-ash-medium text-sm">Weight</span>
                          <span className="font-semibold text-rust-dark">0.2</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Item Categories */}
              <div className="lg:col-span-1">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-desert-sand/30 mb-8">
                  <h2 className="text-2xl font-bold text-rust-dark mb-6 font-adventure">
                    Item Categories
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-rust-light flex items-center justify-center text-white">
                        🛡️
                      </div>
                      <div>
                        <h3 className="font-semibold text-rust-dark">Equipment</h3>
                        <p className="text-ash-medium text-sm">Armor, weapons, accessories</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-desert-gold flex items-center justify-center text-ash-dark">
                        🧪
                      </div>
                      <div>
                        <h3 className="font-semibold text-rust-dark">Consumables</h3>
                        <p className="text-ash-medium text-sm">Potions, food, water</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-ash-light flex items-center justify-center text-ash-dark">
                        🧱
                      </div>
                      <div>
                        <h3 className="font-semibold text-rust-dark">Materials</h3>
                        <p className="text-ash-medium text-sm">Ore, wood, herbs</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-starry-blue flex items-center justify-center text-white">
                        💎
                      </div>
                      <div>
                        <h3 className="font-semibold text-rust-dark">Treasure</h3>
                        <p className="text-ash-medium text-sm">Artifacts, gems, gold</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white">
                        📜
                      </div>
                      <div>
                        <h3 className="font-semibold text-rust-dark">Quest Items</h3>
                        <p className="text-ash-medium text-sm">Keys, scrolls, relics</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Item Stats */}
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-desert-sand/30">
                  <h2 className="text-2xl font-bold text-rust-dark mb-6 font-adventure">
                    Item Stats
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="bg-earth-beige/50 rounded-xl p-4 border border-desert-sand/30">
                      <h3 className="font-semibold text-rust-dark mb-2 font-adventure">
                        Rarity
                      </h3>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-white border border-gray-300"></div>
                          <span className="text-ash-medium text-sm">Common</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                          <span className="text-ash-medium text-sm">Uncommon</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                          <span className="text-ash-medium text-sm">Rare</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                          <span className="text-ash-medium text-sm">Epic</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <span className="text-ash-medium text-sm">Legendary</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-earth-beige/50 rounded-xl p-4 border border-desert-sand/30">
                      <h3 className="font-semibold text-rust-dark mb-2 font-adventure">
                        Item Durability
                      </h3>
                      <p className="text-ash-medium text-sm">
                        Equipment items have durability that decreases with use. When durability reaches zero, the item becomes damaged and loses effectiveness. [Source: Pearl Abyss]
                      </p>
                    </div>
                    <div className="bg-earth-beige/50 rounded-xl p-4 border border-desert-sand/30">
                      <h3 className="font-semibold text-rust-dark mb-2 font-adventure">
                        Item Weight
                      </h3>
                      <p className="text-ash-medium text-sm">
                        Each item has a weight value. Carrying too much weight will slow you down and reduce your stamina. [Source: Pearl Abyss]
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