'use client'

import Link from 'next/link'
import Sidebar from '../../components/Sidebar'

export default function WeaponsPage() {
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
                      Weapons
                    </span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Weapons Content */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-rust-dark mb-12 font-adventure">
              Weapon Database
            </h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Weapon List */}
              <div className="lg:col-span-2">
                {/* Sword */}
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-desert-sand/30 mb-8">
                  <div className="h-48 relative">
                    <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url(https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Red%20Desert%20game%20fantasy%20sword%20with%20desert%20theme%2C%20ancient%20weapon%2C%20Pearl%20Abyss%20official&image_size=landscape_4_3)' }}>
                      <div className="absolute bottom-2 right-2 text-white text-xs bg-black/50 px-2 py-1 rounded">
                        [Image Source: Pearl Abyss Official]
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-2xl font-bold text-rust-dark font-adventure">
                        Sword
                      </h2>
                      <span className="bg-desert-gold/20 text-desert-gold px-3 py-1 rounded-full text-xs font-medium">
                        Warrior
                      </span>
                    </div>
                    <p className="text-ash-medium mb-6 leading-relaxed">
                      The sword is a versatile melee weapon used by Warriors. It offers a balance of damage and speed, making it suitable for both one-handed and two-handed combat styles. [Source: Pearl Abyss]
                    </p>
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between items-center">
                        <span className="text-ash-medium">Damage</span>
                        <span className="font-semibold text-rust-dark">80-120</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-ash-medium">Attack Speed</span>
                        <span className="font-semibold text-rust-dark">Medium</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-ash-medium">Critical Chance</span>
                        <span className="font-semibold text-rust-dark">5%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-ash-medium">Durability</span>
                        <span className="font-semibold text-rust-dark">100</span>
                      </div>
                    </div>
                    <Link 
                      href="/database/weapons/sword" 
                      className="text-desert-gold font-medium hover:text-desert-amber transition-colors flex items-center gap-1"
                    >
                      View Details <span>→</span>
                    </Link>
                  </div>
                </div>
                
                {/* Staff */}
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-desert-sand/30">
                  <div className="h-48 relative">
                    <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url(https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Red%20Desert%20game%20desert%20themed%20magical%20staff%20with%20crystal%20top%2C%20Pearl%20Abyss%20official&image_size=landscape_4_3)' }}>
                      <div className="absolute bottom-2 right-2 text-white text-xs bg-black/50 px-2 py-1 rounded">
                        [Image Source: Pearl Abyss Official]
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-2xl font-bold text-rust-dark font-adventure">
                        Staff
                      </h2>
                      <span className="bg-desert-gold/20 text-desert-gold px-3 py-1 rounded-full text-xs font-medium">
                        Mage
                      </span>
                    </div>
                    <p className="text-ash-medium mb-6 leading-relaxed">
                      The staff is a magical weapon used by Mages. It amplifies magical energy and allows for the channeling of powerful spells. [Source: Pearl Abyss]
                    </p>
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between items-center">
                        <span className="text-ash-medium">Damage</span>
                        <span className="font-semibold text-rust-dark">60-140</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-ash-medium">Attack Speed</span>
                        <span className="font-semibold text-rust-dark">Slow</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-ash-medium">Critical Chance</span>
                        <span className="font-semibold text-rust-dark">8%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-ash-medium">Durability</span>
                        <span className="font-semibold text-rust-dark">80</span>
                      </div>
                    </div>
                    <Link 
                      href="/database/weapons/staff" 
                      className="text-desert-gold font-medium hover:text-desert-amber transition-colors flex items-center gap-1"
                    >
                      View Details <span>→</span>
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Weapon Types */}
              <div className="lg:col-span-1">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-desert-sand/30 mb-8">
                  <h2 className="text-2xl font-bold text-rust-dark mb-6 font-adventure">
                    Weapon Types
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-rust-light flex items-center justify-center text-white">
                        ⚔️
                      </div>
                      <div>
                        <h3 className="font-semibold text-rust-dark">Melee Weapons</h3>
                        <p className="text-ash-medium text-sm">Swords, axes, daggers</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-ash-light flex items-center justify-center text-ash-dark">
                        🏹
                      </div>
                      <div>
                        <h3 className="font-semibold text-rust-dark">Ranged Weapons</h3>
                        <p className="text-ash-medium text-sm">Bows, crossbows</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-desert-gold flex items-center justify-center text-ash-dark">
                        ✨
                      </div>
                      <div>
                        <h3 className="font-semibold text-rust-dark">Magic Weapons</h3>
                        <p className="text-ash-medium text-sm">Staves, wands</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-starry-blue flex items-center justify-center text-white">
                        🛡️
                      </div>
                      <div>
                        <h3 className="font-semibold text-rust-dark">Shields</h3>
                        <p className="text-ash-medium text-sm">Bucklers, tower shields</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Weapon Stats */}
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-desert-sand/30">
                  <h2 className="text-2xl font-bold text-rust-dark mb-6 font-adventure">
                    Weapon Stats
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="bg-earth-beige/50 rounded-xl p-4 border border-desert-sand/30">
                      <h3 className="font-semibold text-rust-dark mb-2 font-adventure">
                        Damage
                      </h3>
                      <p className="text-ash-medium text-sm">
                        The amount of damage the weapon deals. Higher values mean more damage per hit. [Source: Pearl Abyss]
                      </p>
                    </div>
                    <div className="bg-earth-beige/50 rounded-xl p-4 border border-desert-sand/30">
                      <h3 className="font-semibold text-rust-dark mb-2 font-adventure">
                        Attack Speed
                      </h3>
                      <p className="text-ash-medium text-sm">
                        How quickly the weapon can be swung. Faster weapons attack more frequently but may deal less damage per hit. [Source: Pearl Abyss]
                      </p>
                    </div>
                    <div className="bg-earth-beige/50 rounded-xl p-4 border border-desert-sand/30">
                      <h3 className="font-semibold text-rust-dark mb-2 font-adventure">
                        Critical Chance
                      </h3>
                      <p className="text-ash-medium text-sm">
                        The chance to deal bonus damage on a hit. Critical hits typically deal 50% more damage. [Source: Pearl Abyss]
                      </p>
                    </div>
                    <div className="bg-earth-beige/50 rounded-xl p-4 border border-desert-sand/30">
                      <h3 className="font-semibold text-rust-dark mb-2 font-adventure">
                        Durability
                      </h3>
                      <p className="text-ash-medium text-sm">
                        How many times the weapon can be used before it needs to be repaired. Weapons with higher durability last longer. [Source: Pearl Abyss]
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